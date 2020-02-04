package ru.sokomishalov.skraper.provider.tiktok

import com.fasterxml.jackson.databind.JsonNode
import kotlinx.coroutines.Dispatchers.IO
import kotlinx.coroutines.withContext
import ru.sokomishalov.skraper.Skraper
import ru.sokomishalov.skraper.SkraperClient
import ru.sokomishalov.skraper.client.jdk.DefaultBlockingSkraperClient
import ru.sokomishalov.skraper.fetchDocument
import ru.sokomishalov.skraper.fetchJson
import ru.sokomishalov.skraper.internal.serialization.aReadJsonNodes
import ru.sokomishalov.skraper.internal.url.uriCleanUp
import ru.sokomishalov.skraper.model.ImageSize
import ru.sokomishalov.skraper.model.ImageSize.*
import ru.sokomishalov.skraper.model.Post
import javax.script.Invocable
import javax.script.ScriptEngineManager
import kotlin.text.Charsets.UTF_8


class TikTokSkraper @JvmOverloads constructor(
        override val client: SkraperClient = DefaultBlockingSkraperClient
) : Skraper {

    override val baseUrl: String = "https://tiktok.com"

    override suspend fun getLatestPosts(uri: String, limit: Int): List<Post> {
        val userData = getUserData(uri)

        val id = userData?.get("userId")?.asText()
        val secUid = userData?.get("secUid")?.asText()

        val url = "${baseUrl}/share/item/list?id=${id}&secUid=${secUid}&type=1&count=${limit}&minCursor=0&maxCursor=0"
        val signature = generateSignature(url)
        val data = client.fetchJson(url = "${url}&_signature=${signature}", headers = mapOf("Referer" to baseUrl))

        return emptyList()
    }

    override suspend fun getPageLogoUrl(uri: String, imageSize: ImageSize): String? {
        val user = getUserData(uri)

        return when (imageSize) {
            SMALL -> user.getCover("covers")
            MEDIUM -> user.getCover("coversMedium") ?: user.getCover("covers")
            LARGE -> user.getCover("coversLarge") ?: user.getCover("coversMedium") ?: user.getCover("covers")
        }
    }

    private suspend fun getUserData(uri: String): JsonNode? {
        val document = client.fetchDocument("${baseUrl}/${uri.uriCleanUp()}")

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

    private suspend fun generateSignature(url: String): String? = withContext(IO) {
        runCatching {
            JS_ENGINE.eval(JS_CRAWLER).toString()
            val inv = JS_ENGINE as Invocable
            val value = inv.invokeFunction("generateSignature", url) as String?
            value
        }.onFailure {
            println(it)
        }.getOrNull()
    }

    companion object {
        private val JS_ENGINE = ScriptEngineManager().getEngineByName("JavaScript")
        private val JS_CRAWLER = TikTokSkraper::class.java.getResource("/tiktok/fuck-byted-crawler.js").readText()
    }
}