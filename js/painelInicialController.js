var app = angular.module('app', ['ui.mask']); // injeção de dependencia: ui.mask

app.controller('painelInicialController', function($scope, $http){
    $scope.showCadastro = false;
    $scope.noticia = objNoticia();
    
    $scope.abreCadastroNoticia = function(){
        $scope.showCadastro = true;
    }
    
    $scope.cadastrarNovaNoticia = function(){
        $http
            .post('../api/cadastrarNovaNoticia', $scope.noticia) // manda todo o objeto para a api
            .success(function(data){
                
                if(!data.erro) {
                    // deu certo o cadastro
                    alert("Cadastro efetuado com sucesso!");
                    $scope.showCadastro = false;
                    $scope.noticia = objNoticia();
                } else {
                    alert("Falha ao cadastrar notícia!");   
                }
            
            })
            .error(function(){
                alert("Falha geral da aplicação!");
            });
    };
    
});

function objNoticia(){
    return {
        idnoticia : -1,
        noticiatitulo : "",
        noticiadescricao : "",
        noticiatexto : "",
        noticiadata : ""
    };
}