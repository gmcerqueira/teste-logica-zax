const lojas = [
  {
    name: "Loja 1",
    pedidos: [50, 50, 50],
    taxa: 0.05,
  },

  { name: "Loja 2", pedidos: [50, 50, 50, 50], taxa: 0.05 },

  { name: "Loja 3", pedidos: [50, 50, 100], taxa: 0.15 },
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
const calculoEntrega = (moto = motos.moto4) => {
  let loja = (moto = motos.moto4
    ? lojas[0]
    : lojas.find(({ pedidos }) => pedidos.length > 0));

  const { pedidos } = loja;

  if (pedidos.length === 0) return;
  
  pedidos.forEach((pedido) => {
    moto.pedidos.push(pedido);
  });

  const valorPedidos = moto.pedidos.reduce((prev, curr) => prev + curr, 0);
  const valorComTaxaLoja = valorPedidos + loja.taxa * valorPedidos;

  const total = valorComTaxaLoja + moto.taxa;
  console.log(valorComTaxaLoja);
};

calculoEntrega(motos.moto4);
