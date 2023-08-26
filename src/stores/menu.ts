import { defineStore } from 'pinia'
import { getMenuData } from '@/api/index'
export const useMenuStore = defineStore('menu_data', {
  state: () => {
    return {
      menu_data: []
    }
  },
  actions: {
    async handleMenuData() {
      return await getMenuData().then((res) => {
        if (res.code === 200) {
          this.menu_data = res.result
        }

        return res
      })
    }
  }
})
