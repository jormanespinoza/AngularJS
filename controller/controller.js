angular.module("MyFirstApp", [])
	.controller("FirstController",["$scope", function(s){
	    s.nombre = "Jorman";
	    s.nuevoComentario = {};
	    s.comentarios = [	
		    {
		    	comentario: "Testing AngularJS",
		    	username: "l3inadz"
		    },
		    {
		    	comentario: "What about it?",
		    	username: "neo"
			}    
		];
		s.agregarComentario = function(){
			s.comentarios.push(s.nuevoComentario);
			s.nuevoComentario = {};
		}
	}]);