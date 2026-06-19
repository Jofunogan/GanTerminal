export function route(intentName: string) {
  switch (intentName) {
    case "FILE_CREATE":
      return "file"

    default:
      return "system"
  }
}