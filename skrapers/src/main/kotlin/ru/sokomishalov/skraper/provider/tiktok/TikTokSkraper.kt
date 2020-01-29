package ru.sokomishalov.skraper.provider.tiktok

import com.fasterxml.jackson.databind.JsonNode
import ru.sokomishalov.skraper.Skraper
import ru.sokomishalov.skraper.SkraperClient
import ru.sokomishalov.skraper.client.jdk.DefaultBlockingSkraperClient
import ru.sokomishalov.skraper.fetchDocument
import ru.sokomishalov.skraper.fetchJson
import ru.sokomishalov.skraper.internal.serialization.aReadJsonNodes
import ru.sokomishalov.skraper.model.ImageSize
import ru.sokomishalov.skraper.model.ImageSize.*
import ru.sokomishalov.skraper.model.Post
import kotlin.text.Charsets.UTF_8

class TikTokSkraper @JvmOverloads constructor(
        override val client: SkraperClient = DefaultBlockingSkraperClient
) : Skraper {

    companion object {
        private const val TIK_TOK_BASE_URL = "https://tiktok.com"
    }

    override suspend fun getLatestPosts(uri: String, limit: Int): List<Post> {
        val userData = getUserData(uri)

        val id = userData?.get("userId")?.asText()
        val secUid = userData?.get("secUid")?.asText()

        val url = "${TIK_TOK_BASE_URL}/share/item/list?id=${id}&secUid=${secUid}&type=1&count=${limit}&minCursor=0&maxCursor=0&_signature=VIm6dAAgEBYZFjzZxqkSy1SJu2AAAlc"
        val data = client.fetchJson(url = url, headers = mapOf("Referer" to TIK_TOK_BASE_URL))

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
        val document = client.fetchDocument("${TIK_TOK_BASE_URL}/${uri}")

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
}