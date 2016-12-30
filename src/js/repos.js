export default {
    getBlogList: function(ctx, cb){
        ctx.$http.get("/api/list_all_blog/").then((res)=>{
            if(cb) cb(res.data.data.blog_list)
        },(err)=>{
            //console.log("---getRepos error ---> " + JSON.stringify(err));
        })   
    },
    
    //http://localhost:9090/api/get_blog/?id=20
    getBlogDetail: function(ctx, id, cb){
        ctx.$http.get("/api/get_blog/?id=" + id ).then((res)=>{
            if(cb) cb(res.data.data)
        },(err)=>{
            //console.log("---getRepos error ---> " + JSON.stringify(err));
        })   
    }

}