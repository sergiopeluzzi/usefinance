angular.module('primeiraApp')
    .config([
        '$stateProvider', //dependencias 
        '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) { //injetando as dependencias
            $stateProvider
                .state('dashboard', { //quando estiver no estado dashboard ele faz duas coisas
                    url: "/dashboard", //muda a url pra /dashboard
                    templateUrl: "dashboard/dashboard.html" //carrega o template dashboard na ui-view da index.html
                })
                .state('billingCycle', {
                    url: "billingCycle",
                    templateUrl: "billingCycle/tabs,html"
                })

            $urlRouterProvider.otherwise('/dashboard') //estado padrao se nenhum estado definido for chamado
        }
    ])