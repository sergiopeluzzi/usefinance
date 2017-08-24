const mongoose = require('mongoose')

module.exports = mongoose.connection.openUri('mongodb://localhost:27017/usefinance')

//Muda mensagem de erro geral que é padrão ingles
mongoose.Error.messages.general.required = "O atributo '{PATH}' é obrigatório!"
mongoose.Error.messages.Number.min = "O '{VALUE}' informado é menor que o limite mínimo '{MIN}'!"
mongoose.Error.messages.Number.max = "O '{VALUE}' informado é maior que o limite máximo '{MAX}'!"
mongoose.Error.messages.toString.enum = "'{VALOR}' nao é válido para o atributo '{PATH}'!"