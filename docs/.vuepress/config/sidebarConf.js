module.exports = [
    '/',
    '/about',
    // ['/page-b', 'Explicit link text']
    {
        title: '美丽的test',   // 必要的
        path: '/test/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
        collapsable: false, // 可选的, 默认值是 true,
        sidebarDepth: 2,    // 可选的, 默认值是 1
        children: [
            '/test/test',
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