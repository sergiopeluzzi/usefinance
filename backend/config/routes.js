const express = require('express')

module.exports = function(server) {
    //API de Rotas
    const router = express.Router()
    server.use('/api', router)

    //BillingCycle routes - rotas rest do billingCycle 
    const billingCycleService = require('../api/billingCycle/billingCylceService')
    billingCycleService.register(router, '/billingCycles')

    //BillingCycleSummary routes
    const BillingCycleSummaryService = require('../api/billingSummary/billingSummaryService')
    router.route('/billingSummary')
        .get(BillingCycleSummaryService.getSummary)
}