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
  const loja = lojas.find(({ pedidos }) => pedidos.length > 0);
  const { pedidos } = loja;

  pedidos.forEach((pedido) => {
    moto.pedidos.push(pedido);
  });

  console.log(moto.pedidos);
};

calculoEntrega(motos.moto4);
