var app   = require('express')();
var http = require('http').Server(app);
var mysql = require('mysql');
var bodyParser = require("body-parser");
var usuarios = require('./usuarios'); //Obtengo el archivo js de usuarios
var productos = require('./productos'); //Obtengo el archivo js de productos
var tiendas = require('./tiendas'); //Obtengo el archivo js de tiendas
var connection = mysql.createConnection({ //Conexion a la BBDD de MySQL
		host     : 'eu-cdbr-west-01.cleardb.com',
		user     : 'b9aaf5910672e0',
		password : '49db535f',
		database : 'heroku_5acb6db9df2cdc9',
});
connection.connect();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/', function (request, response){
	response.send("Hello world");
	
});

//Llamo a los metodos de la clase usuario
usuarios.getUsuarios(app, connection);
usuarios.postUsuarios(app, connection); 
usuarios.updateUsuarios(app, connection); 


//Llamo a los metodos de la clase productos
productos.getProductos(app, connection);
productos.postProductos(app, connection);
productos.updateProductos(app, connection);


//Llamo a los metodos de la clase tiendas
tiendas.getTiendas(app, connection);
tiendas.postTiendas(app, connection);
tiendas.updateTiendas(app, connection);
tiendas.postGranSuperficie(app, connection);
tiendas.getGranSuperficie(app, connection);
tiendas.updateGranSuperficie(app, connection);

//Mensaje de que se esta conectando el puerto
var port = process.env.PORT || 5000;
http.listen(port,function(){
	console.log("Conectado y escuchando en el puerto "+port);
});