module.exports=[
    // 单个地址
    { text: '首页', link: '/' },
    { text: '导航', link: '/about.html' },
    { text: '经济', link: '/test/' },
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
]