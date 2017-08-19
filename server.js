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

function login(parametro, Hola){ 
	for (var i =  5; i >= 0; i--) {
		console.log(parametro+Hola)
	}
}

login("hola ", "como estas")


function suma(parametro,Numero){
	var total =0;
	var suma = parametro + Numero;
	for (var i = 5; i >= 0; i--) {
		console.log(suma);
		//total=(total=((parametro+Numero)*i))
		total = total + suma;
		console.log(total);
	}
	
}

