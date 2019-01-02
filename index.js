// videos 28 complete... 29 starting...

const express=require('express');
require('./services/passport');



const app=express();
    
require('./routes/authRoutes')(app);

   
const PORT=process.env.PORT || 5000;
app.listen(PORT);