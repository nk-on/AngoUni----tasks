var figlet = require("figlet");
figlet.text("Hello world",function(err,data){
    if(err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    };
    console.log(data)
});