package ru.sokomishalov.skraper.internal.js

import ru.sokomishalov.skraper.internal.js.android.AndroidJsEvaluator
import ru.sokomishalov.skraper.internal.js.jvm.JvmJsEvaluator

@PublishedApi
internal fun getPlatformDependentJsEvaluator(script: String): JsEvaluator = when {
    System.getProperty("java.runtime.name") == "Android Runtime" -> AndroidJsEvaluator(script = script)
    else -> JvmJsEvaluator(script = script)
}