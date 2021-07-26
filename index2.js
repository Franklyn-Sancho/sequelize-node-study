async () => {
  const database = require("./db");
  const Produto = require("./models/produto");
  const Fabrincante = require("./models/fabricante");

  try {
    Produto.belongsTo(Fabrincante, {
      constrants: true,
      foreignKey: "idFabrincante",
    });

    const resultado = await dabase.sync({ force: true });
  } catch (error) {
    console.log(error);
  }

  const resultadoCreate = await Fabrincante.create({
      nome: 'apple'
  })

  const idFabrincante = resultado.id

  const resultadoCreate2 = await Produto.create({
      nome: 'iphone',
      preco: '5000',
      descricao: 'Smartphone da maçã',
      idFabrincante: idFabrincante
  })
};
