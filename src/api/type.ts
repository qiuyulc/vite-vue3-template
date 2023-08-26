type code = 200 | 404 | 500
export type RuleType = {
  name: string
  pass: string
  code: string
  record: string
}

export type AxiosDataType<T> = {
  code: code
  msg: string
  result?: T
}
