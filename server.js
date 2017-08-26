var express =require('express');
var bodyParser =require('body-parser');
var server =express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/suma", function(req,res){
	var parametro2=parseInt(req.query.param2);
	var parametro=parseInt(req.query.param);
	var hola=suma(parametro,parametro2);
	res.json(hola);

})
server.get("/resta", function(req,res){
	var parametro2=parseInt(req.query.param2);
	var parametro=parseInt(req.query.param);
	var hola=resta(parametro,parametro2);
	res.json(hola);

})
server.get("/multiplicacion", function(req,res){
	var parametro2=parseInt(req.query.param2);
	var parametro=parseInt(req.query.param);
	var hola=multiplicacion(parametro,parametro2);
	res.json(hola);

})
server.get("/division", function(req,res){
	var parametro2=parseInt(req.query.param2);
	var parametro=parseInt(req.query.param);
	var hola=division(parametro,parametro2);
	res.json(hola);

})


server.listen(3000, function(){
	console.log("servidor corriendo")

});

//var _node_name  = document.getElementById("nodename").value;

function suma(Numero1,Numero2){
	var total =0;
	
		total = Numero1+Numero2;
			return total;
	}	



function resta(Numero1,Numero2){
	var total=0;
	total=Numero1-Numero2;
	return total;

}

function multiplicacion(Numero1,Numero2){
	var total=0;
	total=Numero1*Numero2;
	return total;
}

function division(Numero1,Numero2){
	var total=0;
	total=Numero1/Numero2;
	return total;

}



