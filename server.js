var express =require('express');
var bodyParser =require('body-parser');
var server =express();

server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());

server.get("/login", function(){

})

server.listen(3000, function(){
	console.log("servidor corriendo")

});

function suma(parametro,Numero){
	var total =0;
	var suma = parametro + Numero;
	for (var i = 5; i >= 0; i--) {
		total = total + suma;
	}	
	return total;
}

