import router from './router'
// import router from 'vue-router'
import { useMenuStore } from './stores/menu';
const view = import.meta.glob('@/views/*.vue');
import LayoutView from './layout/index.vue';
router.beforeEach(async (to, form, next) => {
    if (to.path === '/login') {
        next()
    } else {
        const { menu_data, handleMenuData } = useMenuStore();
        if (menu_data.length === 0) {
            //获取

            let data = await handleMenuData();
            if (data.code === 200) {
                const { result = [] } = data;
                const children = result.map((item) => {
                    const Component = view[`/src/views/${item.component}.vue`];
                    const router = {
                        ...item,
                        component: Component
                    }
                    return router
                })
                const routes = {
                    name: 'layout',
                    path: '/',
                    component: LayoutView,
                    children: [...children]
                }
                router.addRoute({ ...routes });
                next({ ...to, replace: true })
            } else {
                next('/login')
            }
            // console.log(data, 12345)
            // let links = get_routers(deepClone(data))
            // router.addRoutes(links)

        } else {
            next()
        }
    }
    // next()
})
