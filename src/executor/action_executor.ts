import { handleFile } from "../modules/file/handler"

export function execute(intent: any) {
  switch (intent.name) {
    case "FILE_CREATE":
    case "FILE_DELETE":
      return handleFile(intent)

    default:
      return {
        success: false,
        message: "Intent não mapeada"
      }
  }
}