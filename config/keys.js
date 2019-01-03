//keys.js 

if(process.env.NODE_ENV ==='production'){
    //we are in production
    module.exports=require('./prodn');
    }else{
    //we are in development- return the de key!!!
        module.exports=require('./dev');
    }