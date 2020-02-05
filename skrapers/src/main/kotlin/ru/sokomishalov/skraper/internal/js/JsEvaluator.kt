package ru.sokomishalov.skraper.internal.js

interface JsEvaluator {
    val script: String
    suspend fun eval(func: String, vararg params: String): String?
}