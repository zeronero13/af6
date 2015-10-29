var express = require("express");
var fs = require("fs");
var app = express();

var port = process.env.PORT || 1337;

app.use(':/file', function(req, res, next){
    fs.readFile(__dirname+'/files/'+req.params.file, function(err){
        if(err){
            res.status(404).send('404 Not found');
        }else{
            next();
        } 
    });
    
});

app.get('/:file', function(req, res){
    //res.send('Hello you requested '+ req.params.file + ', here it is:');
    
   /* fs.stat(__dirname+'/files/'+req.params.file, function(err, stat) {
    if(err == null) {
            console.log('File exists');
            res.sendFile(__dirname+'/files/'+req.params.file);
        } else if(err.code == 'ENOENT') {
            console.log('File does not exists');
            res.send('File does not exists');
            //fs.writeFile('log.txt', 'Some log\n');
        } else {
            console.log('Some other error: ', err.code);
            res.send('File does not exists');
        }
    });*/
    
    res.sendFile(__dirname+'/files/'+req.params.file);
});

app.listen(port, function(){
    console.log('Server started on port '+ port);
});

