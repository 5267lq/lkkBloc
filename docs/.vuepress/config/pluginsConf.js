const moment = require('moment');
const secret=require("./secret.js");
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
        clientId:secret.clientId,
        clientSecret:secret.clientSecret,
        autoCreateIssue: true,
        locale: 'zh',
    },
    '@vuepress/back-to-top': true,
    '@vuepress/google-analytics': {
        'ga':secret.ga
    },
    "vuepress-plugin-auto-sidebar": {
        // options
    }
}