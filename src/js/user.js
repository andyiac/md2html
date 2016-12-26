export default {

    getTrendingUsers: function (ctx, cb){
        ctx.$http.get("https://api.github.com/search/users", {params:{'q':'location:china','page':1}})
        .then((res)=>{
            if(cb) cb(res.body.items)
        },(err)=>{
            console.log("error ---> " + JSON.stringify(err));
        })
    },
    getUsers: function (ctx, location, language, page, cb){
        var filter ={}

        if(location){
            filter.q = 'location:' + location
        }
        if(language){
            filter.language = language
        }
        if(page){
            filter.page = page
        }

        ctx.$http.get("https://api.github.com/search/users", {params:filter})
        .then((res)=>{
            if(cb) cb(res.body.items)
        },(err)=>{
            console.log("---getUsers error ---> " + JSON.stringify(err));
        })
    }

}