angular.module("MyFirstApp", [])
	.controller("FirstController", function($scope){
	    $scope.nombre = "Jorman";
	    $scope.nuevoComentario = {};
	    $scope.comentarios = [	
		    {
		    	comentario: "Comentario efectuado por Jorman",
		    	username: "l3inadz"
		    },
		    {
		    	comentario: "Comentario default",
		    	username: "hater"
			}    
		];
		$scope.agregarComentario = function(){
			$scope.comentarios.push($scope.nuevoComentario);
			$scope.nuevoComentario = {};
		}
	});