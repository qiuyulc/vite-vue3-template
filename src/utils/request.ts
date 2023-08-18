/* eslint-disable prettier/prettier */
import axios from 'axios'
import router from '../router/index'
/**
 * 引入该文件会导致vite热更新有问题。循环引用得问题
 */
// import router from '@/router'
import { ElMessage } from 'element-plus'

const instance = axios.create({
  headers: {
    Authorization: localStorage.getItem('Authorization') || ''
  }
})

instance.interceptors.request.use(
  (config) => {
    if (config.headers) {
      ;(config.headers as any).Authorization = localStorage.getItem('Authorization')
    }
    return config
  },
  (error) => {
    return Promise.reject(error)
  }
)

instance.interceptors.response.use(
  (response) => {
    if (response.headers.authentication) {
      localStorage.setItem('Authorization', `Bearer ${response.headers.authentication}`)
    }
    if (response.data.code && response.data.code !== 0) {
      ElMessage.error(response.data.msg)
    }
    if (response.data.code && response.data.code === 401) {
      router.replace('/login')
    }
    return response.data
  },
  (error) => {
    return Promise.reject(error)
  }
)

export default instance
