package ru.sokomishalov.skraper.provider.tiktok

import com.fasterxml.jackson.databind.JsonNode
import ru.sokomishalov.skraper.Skraper
import ru.sokomishalov.skraper.SkraperClient
import ru.sokomishalov.skraper.client.jdk.DefaultBlockingSkraperClient
import ru.sokomishalov.skraper.fetchDocument
import ru.sokomishalov.skraper.fetchJson
import ru.sokomishalov.skraper.internal.serialization.getByPath
import ru.sokomishalov.skraper.internal.serialization.getInt
import ru.sokomishalov.skraper.internal.serialization.getString
import ru.sokomishalov.skraper.internal.serialization.readJsonNodes
import ru.sokomishalov.skraper.model.MediaSize.*
import ru.sokomishalov.skraper.model.PageInfo
import ru.sokomishalov.skraper.model.Post
import ru.sokomishalov.skraper.model.toImage


class TikTokSkraper @JvmOverloads constructor(
        override val client: SkraperClient = DefaultBlockingSkraperClient,
        override val baseUrl: String = "https://tiktok.com"
) : Skraper {

    override suspend fun getPosts(path: String, limit: Int): List<Post> {
        val userData = getUserData(path = path)

        val id = userData?.get("userId")?.asText().orEmpty()
        val secUid = userData?.get("secUid")?.asText().orEmpty()

        val url = "${baseUrl}/share/item/list?secUid=${secUid}&id=${id}&type=1&count=${limit}&minCursor=0&maxCursor=0"

        val signature = generateSignature(url = url)

        val finalUrl = "${url}&_signature=${signature}"
        val headers = mapOf("Referer" to baseUrl, "User-Agent" to USER_AGENT)

        val data = client.fetchJson(url = id, headers = headers)

        val items = data
                ?.getByPath("body.itemListData")
                ?.toList()
                .orEmpty()

        return items.mapNotNull {
            Post(id = "")
        }

    }

    override suspend fun getPageInfo(path: String): PageInfo? {
        val user = getUserData(path = path)

        return user?.run {
            PageInfo(
                    nick = getString("uniqueId").orEmpty(),
                    name = getString("nickName"),
                    description = getString("signature"),
                    followersCount = getInt("fans"),
                    avatarsMap = mapOf(
                            SMALL to user.getFirstAvatar("covers").toImage(),
                            MEDIUM to user.getFirstAvatar("coversMedium", "covers").toImage(),
                            LARGE to user.getFirstAvatar("coversLarge", "coversMedium", "covers").toImage()
                    )
            )
        }
    }


    private suspend fun getUserData(path: String): JsonNode? {
        val document = client.fetchDocument(url = "${baseUrl}${path}", headers = mapOf("User-Agent" to USER_AGENT))

        val json = document
                ?.getElementById("__NEXT_DATA__")
                ?.html()
                ?.readJsonNodes()

        return json
                ?.get("props")
                ?.get("pageProps")
                ?.get("userData")
    }

    private fun JsonNode?.getFirstAvatar(vararg names: String): String {
        return names
                .mapNotNull {
                    this
                            ?.get(it)
                            ?.elements()
                            ?.asSequence()
                            ?.firstOrNull()
                            ?.asText()
                }
                .firstOrNull()
                .orEmpty()
    }

    private suspend fun generateSignature(url: String): String? {
        return "kekpek"
    }

    companion object {
        private const val USER_AGENT = "Mozilla/5.0 (iPhone; CPU iPhone OS 11_0 like Mac OS X) AppleWebKit/604.1.38 (KHTML, like Gecko) Version/11.0 Mobile/15A372 Safari/604.1"
    }
}