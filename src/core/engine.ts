import { normalizeInput } from "./normalizer"
import { detectIntent } from "./intent_engine"
import { route } from "./router"
import { updateState } from "./state_manager"

export function run(input: string) {
  const normalized = normalizeInput(input)

  const intent = detectIntent(normalized)

  const module = route(intent.name)

  updateState({
    lastIntent: intent.name
  })

  return {
    intent,
    module
  }
}