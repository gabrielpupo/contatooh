angular.module('contatooh').controller('ContatosController', function($scope){

    $scope.total = 0;
    $scope.filtro = '';

    $scope.incrementa = function(){
        $scope.total++;
    };

    $scope.contatos = [
        {
        "_id": 1,
        "nome": "Gabriel",
        "email": "cont1@empresa.com.br"
        },
        {
        "_id": 2,
        "nome": "Matheus",
        "email": "cont2@empresa.com.br"
        },
        {
        "_id": 3,
        "nome": "Larissa",
        "email": "cont3@empresa.com.br"
        }
        ];

});