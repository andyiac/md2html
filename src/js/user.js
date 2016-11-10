export default {
    /*
       https://api.github.com/search/users?q=location:china&page=1
       https://api.github.com/search/repositories?q=language:swift&page=1

       this.$resource('/api/statistics{/id}/{?fields}').get({'id':2}, {'fields:[1,45,23]};
        will turn into:
        /api/statistics/2?fields=1,45,23
                    /users?q=location:china&page=1

    */
    getTrendingUsers: function (ctx, cb){
        ctx.$http.get("https://api.github.com/search/users", {params:{'q':'location:china','page':1}})
        .then((res)=>{
            if(cb) cb(res.body.items)
        },(err)=>{
            console.log("error ---> " + JSON.stringify(err));
        })
    }
}