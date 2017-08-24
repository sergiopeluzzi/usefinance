const _ = require('lodash')
const BillingCycle = require('../billingCycle/billingCycle')

function getSummary(req, res) {
    BillingCycle.aggregate({ //Metodo de agregação (SUM) do mongo
        $project: {  //Aqui projeta o objeta da requisição agregando os valores de credito e debito com soma
            credit: {
                $sum: "$credits.value"
            }, 
            debt: {
                $sum: "$debts.value"
            }
        }
    }, {
        $group: { //Aqui agrupa de modo geral, _id é quem define o agrupamento que pode ser por mes, ano e neste caso é tudo
            _id: null,
            credit: {
                $sum: "$credit"
            },
            debt: {
                $sum: "$debt"
            }
        }
    }, {
        $project: { //Aqui projeta novamente, mas agora é o resultado que vem do group e desabilita o id para não ir 
            _id: 0,
            credit: 1,
            debt: 1
        }
    }, function(error, result) { //Ultimo parametro é uma callback que devolve a função do mongo em result como um array de objetos
        if (error) {
            res.status(500).json({ errors: [error] })
        } else {
            res.json(_.defaults(result[0], { //defaults metodo do lodash q, neste caso, vai retornar um objeto {credit e debt} mesmo se o array result vier null ou undefined
                credit: 0,
                debt: 0
            }))
        }
    })
}

module.exports = { getSummary }