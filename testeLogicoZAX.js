const lojas = [
  { nome: "Loja 1", pedidos: [50, 50, 50], taxa: 0.05 },
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

const selecionaLoja = (moto) => {
  const lojaLocalizada =
    moto === motos.moto4
      ? lojas[0]
      : lojas.find(({ pedidos }) => pedidos.length > 0);

  if (!lojaLocalizada) return { error: "Não exitem mais pedidos disponíveis" };

  return lojaLocalizada;
};

const calculaTaxaEntregador = (moto, taxa) => {
  const valorPedidos = moto.pedidos.reduce((prev, curr) => prev + curr, 0);
  const valorTaxaLoja = taxa * valorPedidos;
  const total = valorTaxaLoja + moto.taxa;

  return total;
};

const modificaPedidos = (loja, moto) => {
  const { pedidos } = loja;

  pedidos.forEach((pedido) => {
    moto.pedidos.push(pedido);
  });

  const index = lojas.indexOf(loja);

  lojas[index].pedidos = [];
};

const verificaDisponibilidade = (loja, moto) => {
  const { pedidos } = loja;

  if (pedidos.length === 0)
    return { error: `${moto.nome} só realiza entregas para ${lojas[0].nome}` };

  return true;
};

const relatorioEntrega = (moto = motos.moto4) => {
  const loja = selecionaLoja(moto);

  if (loja.error) return console.log(loja.error);

  const disponibilidade = verificaDisponibilidade(loja, moto);

  if (disponibilidade.error) return console.log(disponibilidade.error);

  const { nome, taxa } = loja;

  modificaPedidos(loja, moto);

  const pagamentoEntregador = calculaTaxaEntregador(moto, taxa);

  console.log(`
  Entregador: ${moto.nome}
  Pedidos: ${moto.pedidos.length}
  Loja: ${nome}
  Pagamento entregador: R$ ${pagamentoEntregador}
  `);
};

relatorioEntrega();
relatorioEntrega(motos.moto1);
relatorioEntrega(motos.moto2);
relatorioEntrega(motos.moto3);
relatorioEntrega(motos.moto5);
relatorioEntrega();
