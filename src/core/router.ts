export function route(intentName: string) {
  switch (intentName) {
    case "FILE_CREATE":
    case "FILE_DELETE":
      return "file"

    default:
      return "system"
  }
}