export default {
    /*
       https://api.github.com/search/users?q=location:china&page=1
    */
    getTrendingUsers: function (ctx, cb){
        ctx.$http.get("https://api.github.com/search/users",{params:{q:{location:'china',page:1}}}).then((res)=>{
            if(cb) cb(res)
        },(err)=>{
            console.log("error ---> " + JSON.stringify(err));
        })
    }
}