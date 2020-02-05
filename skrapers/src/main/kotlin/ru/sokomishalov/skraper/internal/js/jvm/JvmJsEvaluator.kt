package ru.sokomishalov.skraper.internal.js.jvm

import kotlinx.coroutines.Dispatchers.IO
import kotlinx.coroutines.withContext
import ru.sokomishalov.skraper.internal.js.JsEvaluator
import javax.script.Invocable
import javax.script.ScriptEngine
import javax.script.ScriptEngineManager

class JvmJsEvaluator(
        override val script: String,
        private val engine: ScriptEngine = ScriptEngineManager().getEngineByName("JavaScript").apply { eval(script) }
) : JsEvaluator {

    override suspend fun eval(func: String, vararg params: String): String? {
        return withContext(IO) {
            runCatching {
                (engine as Invocable).invokeFunction(func, *params)?.toString()
            }.getOrNull()
        }
    }

}