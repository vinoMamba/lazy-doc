export function getFirstLetter(name: string | null | undefined) {
  return name?.charAt(0).toUpperCase() || ""
}
