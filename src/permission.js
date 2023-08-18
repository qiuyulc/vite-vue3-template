import router from './router'
import { useMenuStore } from './stores/menu';

router.beforeEach(async (to, form, next) => {

    if (to.path === '/login') {
        next()
    } else {
        const useMenu = useMenuStore();
        if (useMenu.menu_data.length === 0) {
            //获取
            let data = await useMenu.handleMenuData();
            console.log(data)
            // let links = get_routers(deepClone(data))
            // router.addRoutes(links)
            next()
        } else {
            next()
        }
    }
    next()
})
