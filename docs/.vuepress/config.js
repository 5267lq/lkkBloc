const headConf=require('./config/headConf');
const pluginsConf=require('./config/pluginsConf');
const navConf=require('./config/navConf');
const sidebarConf=require('./config/sidebarConf');
module.exports = {
    // base:"/lkkBloc/",
    title: 'lkk',
    description: 'Just playing around',
    head: headConf,
    plugins: pluginsConf,
    themeConfig: {
        logo: '/assets/img/tim.jpg',
        lastUpdated: '更新时间',
        // navbar: false,
        sidebar: 'auto',
        sidebarDepth: 3,
        nav: navConf,
        sidebar:sidebarConf,   
    }
}