const moment = require('moment');
moment.locale("zh-cn")
module.exports = {
    // base:"/lkkBloc/",
    title: 'lkk',
    description: 'Just playing around',
    head: [
        ['meta', { name: 'author', content: 'vuepress介绍 lkk' }],
        ['meta', { name: 'keywords', content: 'vuepress介绍 lkk' }],
        ['link', { rel: 'manifest', href: '/manifest.json' }],
        ['meta', { name: 'theme-color', content: '#3eaf7c' }],
        ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
        ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
        ['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon-152x152.png' }],
        ['link', { rel: 'mask-icon', href: '/icons/safari-pinned-tab.svg', color: '#3eaf7c' }],
        ['meta', { name: 'msapplication-TileImage', content: '/icons/msapplication-icon-144x144.png' }],
        ['meta', { name: 'msapplication-TileColor', content: '#000000' }]
    ],
    plugins: [
        [
            '@vuepress/last-updated', {
                transformer: (timestamp) => {
                    return moment(timestamp).format("LLLL")
                }
            }
        ],
        ['@vuepress/pwa', {
            serviceWorker: true,
            updatePopup: {
                message: "新内容可用",
                buttonText: "刷新"
            }
        }]
    ],
    themeConfig: {
        logo: '/assets/img/tim.jpg',
        lastUpdated: '更新时间',
        // navbar: false,
        sidebar: 'auto',
        sidebarDepth: 3,
        nav: [
            // 单个地址
            { text: '首页', link: '/' },
            { text: '导航', link: '/guide/' },
            { text: '谷歌', link: 'https://google.com' },
            // 多个地址
            {
                text: '博客地址',
                items: [
                    { text: 'Github', link: 'https://github.com/zhangwinwin/FEBlog' },
                    { text: '掘金', link: 'https://juejin.cn/user/1486195453331757' },
                    {
                        text: '语言',
                        items: [
                            { text: 'Chinese', link: '' },
                            { text: 'English', link: '' },
                            { text: 'Japanese', link: '' },
                        ]
                    },
                ]
            }
        ],
        sidebar: [
            '/',
            '/about',
            // ['/page-b', 'Explicit link text']
            {
                title: '美丽的test',   // 必要的
                path: '/test/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
                collapsable: false, // 可选的, 默认值是 true,
                sidebarDepth: 2,    // 可选的, 默认值是 1
                children: [
                    '/test/test1',
                    '/test/test2'
                ]
            },
        ]
        // sidebar: {
        //     '/about/': [
        //         '',
        //         'one',
        //         'two',
        //     ],
        //     '/test/': [
        //         'test1',
        //         'test2',
        //     ],

        //     // fallback
        //     '/': [
        //         '',        /* / */
        //     ]
        // }
    }
}