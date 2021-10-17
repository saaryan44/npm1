const x=require("express");
const port=process.env.PORT || 3000;
const y=x();

y.use(x.static("public"));

y.get("/",(a,b)=>{console.log("index page");b.send();});

y.get("*",(a,b)=>{b.send(`<html><body><h1>Not there. Only index page exists.</h1></body></html>`);});

y.listen(port,()=>console.log(`port ${port}`));