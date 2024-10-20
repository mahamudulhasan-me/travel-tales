export function convertNameToUsername(name: string) {
  // Split the name into parts
  const parts = name.split(" ");

  // Convert to lowercase and join with an underscore
  const handle = `@${parts[0].toLowerCase()}_${parts[1].toLowerCase()}`;

  return handle;
}
