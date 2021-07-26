(async() => {
    const database = require('./db')
    const Produto = require('./produto')

try {
    const resultado = await database.sync()
    console.log(resultado)
} catch (error) {
    console.log(error)
}

const resultadoCreate = await Produto.create({
    nome: 'Mouse',
    preco: 10,
    descricao: 'Um mouse USB bonitão'
})
console.log(resultadoCreate)

//read

const produtos = await Produto.findAll()
console.log(produtos)

//update
const produto = await Produto.findByPk(1)
produto.nome = 'mouse top'

const resultadoSave = await produto.save()
console.log(resultadoSave)

const produto = await Produto.findByPk(1)
produto.destroy()

})()

