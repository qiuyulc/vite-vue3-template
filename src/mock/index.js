import Mock from 'mockjs'

Mock.setup({
    timeout: 1000
})

Mock.mock('/login', function () {
    return Mock.mock({
        'code': 200,
        'msg': '',
        'result': {
            token: '123456789',
            userName: 'admin',
            password: '123456789'
        }
    })
})

Mock.mock('/getMenu', function () {
    return Mock.mock({
        'code': 200,
        'msg': '',
        'result': [
            {
                path: '/home',
                name: 'home',
                component: 'HomeView',
                meta: {
                    title: 'Home',
                    keepAlive: true
                }
            },
            {
                path: '/about',
                name: 'about',
                component: 'AboutView',
                meta: {
                    title: 'About',
                    keepAlive: true
                }
            }
        ]
    })
})