/**
 * Copyright (c) 2019-present Mikhael Sokolov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
package ru.sokomishalov.skraper

import com.fasterxml.jackson.databind.JsonNode
import kotlinx.coroutines.Dispatchers.IO
import kotlinx.coroutines.withContext
import org.jsoup.Jsoup
import org.jsoup.nodes.Document
import ru.sokomishalov.skraper.internal.image.imageDimensions
import ru.sokomishalov.skraper.internal.serialization.readJsonNodes
import ru.sokomishalov.skraper.model.URLString
import java.nio.charset.Charset
import kotlin.text.Charsets.UTF_8


/**
 * @author sokomishalov
 */

suspend fun SkraperClient.fetchBytes(url: URLString, headers: Map<String, String> = emptyMap()): ByteArray? {
    return runCatching {
        fetch(url = url, headers = headers)
    }.getOrNull()
}

suspend fun SkraperClient.fetchJson(url: URLString, headers: Map<String, String> = emptyMap()): JsonNode? {
    return runCatching {
        fetch(url = url, headers = headers)?.run {
            readJsonNodes()
        }
    }.getOrNull()
}

suspend fun SkraperClient.fetchDocument(url: URLString, headers: Map<String, String> = emptyMap(), charset: Charset = UTF_8): Document? {
    return runCatching {
        fetch(url = url, headers = headers)?.run {
            Jsoup.parse(toString(charset))
        }
    }.getOrNull()
}

suspend fun SkraperClient.fetchAspectRatio(url: URLString, headers: Map<String, String> = emptyMap(), defaultValue: Double = 1.0): Double {
    return runCatching {
        withContext(IO) {
            openStream(url = url, headers = headers)
                    ?.imageDimensions
                    ?.run { first.toDouble() / second.toDouble() }
        }
    }.getOrNull() ?: defaultValue
}