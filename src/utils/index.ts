export const debounce = (fn: (args: any) => void, time: number) => {
  let timeoutId: number

  return (...args: any) => {
    clearTimeout(timeoutId)
    timeoutId = setTimeout(() => fn(args), time)
  }
}
