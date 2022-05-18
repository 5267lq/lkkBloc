const moment = require('moment');
moment.locale("zh-cn")
module.exports = {
    '@vuepress/last-updated': {
        transformer: (timestamp) => {
            return moment(timestamp).format("LLLL")
        }
    },
    '@vssue/vuepress-plugin-vssue': {
        // 设置 `platform` 而不是 `api`
        platform: 'github-v4',
        // 其他的 Vssue 配置
        owner: '5267lq',
        repo: 'lkkBloc',
        clientId: 'd3fb2b278d041f156ab0',
        clientSecret: '4d3a43936e32f41e9a006106d4fe1d5f1d35ff07',
        autoCreateIssue: true,
        locale: 'zh',
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
        'ga': 'G-0683GMDTF6'
    },
    "vuepress-plugin-auto-sidebar": {
        // options
    }
}