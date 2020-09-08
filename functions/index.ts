// Generic data fetcher.
// @ts-ignore: (...args) input not provided
export const fetcher = (...args) => fetch(...args).then((res) => res.json())
