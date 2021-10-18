const lojas = [
  {
    nome: "Loja 1",
    pedidos: [10, 20, 30],
    taxa: 0.05,
  },

  { nome: "Loja 2", pedidos: [50, 50, 50, 50], taxa: 0.05 },

  { nome: "Loja 3", pedidos: [50, 50, 100], taxa: 0.15 },
];
const motos = {
  moto1: {
    nome: "Moto 1",
    taxa: 2.0,
    pedidos: [],
  },

  moto2: {
    nome: "Moto 2",
    taxa: 2.0,
    pedidos: [],
  },

  moto3: {
    nome: "Moto 3",
    taxa: 2.0,
    pedidos: [],
  },

  moto4: {
    nome: "Moto 4",
    taxa: 2.0,
    pedidos: [],
  },

  moto5: {
    nome: "Moto 5",
    taxa: 3.0,
    pedidos: [],
  },
};

const relatorioEntrega = (moto = motos.moto4) => {
  let loja =
    moto === motos.moto4
      ? lojas[0]
      : lojas.find(({ pedidos }) => pedidos.length > 0);

  const { pedidos, nome, taxa } = loja;

  if (pedidos.length === 0) return;

  const index = lojas.indexOf(loja);
  pedidos.forEach((pedido, i) => {
    moto.pedidos.push(pedido);
  });

  lojas[index].pedidos = [];

  const valorPedidos = moto.pedidos.reduce((prev, curr) => prev + curr, 0);
  const valorTaxaLoja = taxa * valorPedidos;

  const total = valorTaxaLoja + moto.taxa;
  console.log(`
  Entregador: ${moto.nome}
  Pedidos: ${moto.pedidos.length}
  Loja: ${nome}
  Pagamento entregador: R$ ${total}`);
};

relatorioEntrega(motos.moto5);
relatorioEntrega(motos.moto2);
// relatorioEntrega(motos.moto3);
// relatorioEntrega(motos.moto4);
