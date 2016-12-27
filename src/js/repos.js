export default {
    /*
        https://api.github.com/search/users?q=location:china&page=1
        https://api.github.com/search/repositories?q=language:Java&page=1
    */
    getRepos: function (ctx, language, page, cb){
        var filter ={}
        if(location){
            filter.q = 'language:' +  language
        }
        if(page){
            filter.page = page
        }
        ctx.$http.get("https://api.github.com/search/repositories", { params:filter })
        .then((res)=>{
            if(cb) cb(res.body.items)
        },(err)=>{
            console.log("---getRepos error ---> " + JSON.stringify(err));
        })
    },

    getBlogList: function(ctx, cb){
        ctx.$http.get("/api/list_all_blog/").then((res)=>{
            if(cb) cb(res.data.data.blog_list)
        },(err)=>{
            console.log("---getRepos error ---> " + JSON.stringify(err));
        })   
    },

    //http://localhost:9090/api/get_blog/?id=20
    getBlogDetail: function(ctx, id, cb){
        ctx.$http.get("/api/get_blog/?id=" + id ).then((res)=>{
            if(cb) cb(res.data.data.content)
        },(err)=>{
            console.log("---getRepos error ---> " + JSON.stringify(err));
        })   
    }

}