const _ = require('lodash')

const BillingCycle = require('./billingCycle')

//Lista de métodos permitidos para o serviço do BillingCycle
BillingCycle.methods(['get', 'post', 'put', 'delete'])
//Ao efetuar um update, o metodo retorna o objeto novo e não o antigo e ativa as validações que vem false por padrão (n sei pq!?)
BillingCycle.updateOptions({ new: true, runValidators: true })

//Middleware do noderestful que intercepta as requisições get/post/put/delete antes ou depois. Neste caso, depois de um post ou um put chame a função sendErrorsOrNext
BillingCycle.after('post',  sendErrorsOrNext).after('put', sendErrorsOrNext)

//Definição da função
function sendErrorsOrNext(req, res, next) {
    const bundle = res.locals.bundle //objeto que guarda varias informações da resposta, como erros, objeto da resposta, etc

    if(bundle.errors) {
        var errors = parseErrors(bundle.errors) //Se houver erros será aplicado o parse no erro pela função parseErrors
        res.status(500).json({ errors })
    } else {
        next()
    }
}

//Definição da parseErrors
function parseErrors(nodeRestfulErrors) {
    const errors = []
    
    //percorre cada atributo dos erros do noderestful com o forIn do lodash
    _.forIn(nodeRestfulErrors, error => errors.push(error.message)) //Segundo parametro é uma callback que insere no array o atributo message de cada erro gerado
    
    return errors
}

//Middleware pra retornar o contador de registros no banco
BillingCycle.route('count', function(req, res, next) { //Metodo que cria a rota para api/billingCycle/count
    BillingCycle.count(function(error, value) { //Metodo count do mongoose
        if(error) {
            res.status(500).json({errors: [error]})
        } else {
            res.json({ value })
        }
    })
})

module.exports = BillingCycle