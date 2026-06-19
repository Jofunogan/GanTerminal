export function executeCommand(cmd: string, args: string[]): string {
  switch (cmd) {
    case "help":
      return `
comandos disponíveis:
- help  → mostra ajuda
- echo  → repete texto
- exit  → sai do terminal
      `.trim()

    case "echo":
      return args.join(" ")

    case "exit":
      return "__exit__"

    default:
      return `comando não encontrado: ${cmd}`
  }
}