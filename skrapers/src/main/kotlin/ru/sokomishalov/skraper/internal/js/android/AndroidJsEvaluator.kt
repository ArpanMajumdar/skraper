package ru.sokomishalov.skraper.internal.js.android

import ru.sokomishalov.skraper.internal.js.JsEvaluator

class AndroidJsEvaluator(
        override val script: String
) : JsEvaluator {
    override suspend fun eval(func: String, vararg params: String): String? = null
}