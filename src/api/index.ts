import instance from '../utils/request.js'

export const getMenuData = () => {
  return instance({
    method: 'post',
    url: '/getMenu'
  })
}
