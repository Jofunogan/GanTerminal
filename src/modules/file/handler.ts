import { FileActions } from "./actions"
import { FileIntents } from "./intents"

export function handleFile(intent: any) {
  switch (intent.name) {
    case FileIntents.CREATE:
      return {
        success: true,
        message: FileActions.create(intent.entities.name)
      }

    case FileIntents.DELETE:
      return {
        success: true,
        message: FileActions.delete(intent.entities.name)
      }

    default:
      return {
        success: false,
        message: "Intent de arquivo não suportada"
      }
  }
}