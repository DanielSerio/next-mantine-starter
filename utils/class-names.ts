export type Arg = (string | null | never | false | undefined)

/**
 * *This function takes an array of somewhat unknowns and returns a string. 
 * If the array is empty, it returns undefined. 
 * If the array contains strings, it returns a string with the strings joined by a single space.*
 * @param {Arg[]} args - Arg[]
 * @returns A string.
 */
export function classNames(...args: Arg[]): string | undefined {
  const stringified: string[] = args.filter((value: Arg) => {
    return (
      value &&
      (value as string).length &&
      (!/^\s+$/.test(value))
    )
  }) as string[]

  /**
   * *If the string starts with whitespace, remove it. 
   * *If the string ends with whitespace, remove it. 
   * *If the string contains any whitespace, replace it with a single hyphen. 
   * *Return the resulting string.*
   * @param {string} value - The string to be cleaned.
   * @returns {string} A string.
   */
  const cleanString = (value: string): string => {
    if (/^\s+/.test(value)) value = value.trimStart()
    if (/\s+$/.test(value)) value = value.trimEnd()
    if (/\s+/g.test(value)) value = value.replace(/\s+/g, '-')
    return value
  }

  if (stringified.length) return stringified.map(cleanString).join(' ')
  return undefined
}