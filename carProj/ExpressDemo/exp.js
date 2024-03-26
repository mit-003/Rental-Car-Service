var express = require ('express');
var bodyParser = require ('body-parser');
var brands=require('./brands');
var app =express();
var jsonBodyParser=bodyParser.json();
app.use(jsonBodyParser);
var cors=require('cors');
app.use(cors());

//var urlencodedbodyParser=bodyParser.urlencodeded({})  // This line of code can be used when we are using post->body->x.www.
app.get('/brands', function (req, res){
    res.json(brands);
});
app.get('/brands/:brand', function (req, res){
    const brand=req.params["brand"];
    res.json(brands.filter((el)=>el.brand==brand))
});
app.post('/brands', function (req, res){
    var brand=req.body;
    brands.push(brand);
    res.json(brand);
});
app.put('/brands/:brand/:id', function (req, res){
    var brand=req.params["brand"];
    var id=req.params["id"];
    console.log(brand,id);
    var {price}=req.body;
    for(let j=0;j<brands.length;j++){
        let car = brands[j];
        if(car.brand==brand){
            for(let i=0;i<car.models.length;i++){
                if(car.models[i].id==id){
           
            
                if(price)
                    car.models[i].price=price;
                    break;
            
        }
    }
}
}
   // res.send('Herrre we will update brands in data:'+req.params["brand"]);
   res.send("updated");
});
app.delete('/brands/:brand', function (req, res){
    const brand=req.params["brand"];
    brands=brands.filter((el)=>el.brand!=brand)
    res.send('deleted'+brand);
});
var server = app.listen(8000, function(){
    var host = server.address().address;
    var port = server.address().port;
    console.log("Example app listening at http");
})