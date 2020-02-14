package ru.sokomishalov.skraper.provider.tiktok

import com.fasterxml.jackson.databind.JsonNode
import ru.sokomishalov.skraper.Skraper
import ru.sokomishalov.skraper.SkraperClient
import ru.sokomishalov.skraper.client.jdk.DefaultBlockingSkraperClient
import ru.sokomishalov.skraper.fetchDocument
import ru.sokomishalov.skraper.fetchJson
import ru.sokomishalov.skraper.internal.js.JsEvaluator
import ru.sokomishalov.skraper.internal.js.getPlatformDependentJsEvaluator
import ru.sokomishalov.skraper.internal.serialization.aReadJsonNodes
import ru.sokomishalov.skraper.model.ImageSize
import ru.sokomishalov.skraper.model.ImageSize.*
import ru.sokomishalov.skraper.model.Post
import kotlin.text.Charsets.UTF_8


class TikTokSkraper @JvmOverloads constructor(
        override val client: SkraperClient = DefaultBlockingSkraperClient,
        private val jsEvaluator: JsEvaluator = getPlatformDependentJsEvaluator(script = JS_CRAWLER)
) : Skraper {

    override val baseUrl: String = "https://tiktok.com"

    override suspend fun getPosts(path: String, limit: Int): List<Post> {
        val userData = getUserData(path = path)

        val id = userData?.get("userId")?.asText().orEmpty()
        val secUid = userData?.get("secUid")?.asText().orEmpty()

        val url = "${baseUrl}/share/item/list?secUid=${secUid}&id=${id}&type=1&count=${limit}&minCursor=0&maxCursor=0"

        val signature = generateSignature(url = url)

        val finalUrl = "${url}&_signature=${signature}"
        val headers = mapOf(
                "Referer" to baseUrl,
                "User-Agent" to USER_AGENT
        )

        val data = client.fetchJson(url = id, headers = headers)

        val items = data
                ?.get("body")
                ?.get("itemListData")
                ?.toList()
                .orEmpty()

        return items.mapNotNull {
            Post(id = "")
        }

    }

    override suspend fun getLogoUrl(path: String, imageSize: ImageSize): String? {
        val user = getUserData(path = path)

        return when (imageSize) {
            SMALL -> user.getCover("covers")
            MEDIUM -> user.getCover("coversMedium") ?: user.getCover("covers")
            LARGE -> user.getCover("coversLarge") ?: user.getCover("coversMedium") ?: user.getCover("covers")
        }
    }

    private suspend fun getUserData(path: String): JsonNode? {
        val document = client.fetchDocument(url = "${baseUrl}${path}", headers = mapOf("User-Agent" to USER_AGENT))

        val data = document
                ?.getElementById("__NEXT_DATA__")
                ?.html()
                ?.toByteArray(UTF_8)

        val json = data.aReadJsonNodes()

        return json
                .get("props")
                ?.get("pageProps")
                ?.get("userData")
    }

    private fun JsonNode?.getCover(name: String): String? {
        return this?.get(name)?.elements()?.next()?.asText()
    }

    private suspend fun generateSignature(url: String): String? {
        return jsEvaluator.eval("generateSignature", url, USER_AGENT)
    }

    companion object {
        private val JS_CRAWLER = TikTokSkraper::class.java.getResource("/tiktok/fuck-byted-crawler.js").readText()
        private const val USER_AGENT = "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
    }
}