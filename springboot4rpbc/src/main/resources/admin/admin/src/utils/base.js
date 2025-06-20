const base = {
    get() {
        return {
            url : "http://localhost:8080/springboot4rpbc/",
            name: "springboot4rpbc",
            // 退出到首页链接
            indexUrl: 'http://localhost:8080/springboot4rpbc/front/dist/index.html'
        };
    },
    getProjectName(){
        return {
            projectName: "基于web的多媒体素材管理系统"
        } 
    }
}
export default base
