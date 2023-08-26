import instance from '../utils/request.js'
import type { RuleType, AxiosDataType } from './type'

export const getMenuData = () => {
  return instance({
    method: 'post',
    url: '/getMenu'
  })
}

export const login = (data: RuleType): Promise<AxiosDataType<Record<string, any>>> => {
  return instance({
    method: 'post',
    url: '/login',
    data: { ...data }
  })
}
