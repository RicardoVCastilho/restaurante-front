const url = 'http://localhost:3000/api/pedidos/all-pedidos';

fetch(url)
    .then(res => res.json())
    .then(data => {
        const lista = document.getElementById('pedidos-lista');

data.forEach(pedido => {
  const pedidoBox = document.createElement('div');
  pedidoBox.classList.add('pedido-card');

  const cliente = document.createElement('h2');  // Cliente em destaque
  cliente.textContent = pedido.cliente_nome;
  cliente.classList.add('pedido-cliente');

  const descricao = document.createElement('p');  // Produto depois
  descricao.textContent = pedido.descricao;
  descricao.classList.add('pedido-produto');

  const valorNumerico = Number(pedido.valor);
  const valor = document.createElement('p');
  valor.innerHTML = `<strong>Valor:</strong> R$ ${valorNumerico.toFixed(2)}`;
  valor.classList.add('valor');

  const dataPedido = new Date(pedido.data_pedido);
  const dataFormatada = dataPedido.toLocaleDateString('pt-BR');
  const data = document.createElement('p');
  data.textContent = `Data: ${dataFormatada}`;
  data.classList.add('data-pedido');

  pedidoBox.appendChild(cliente);
  pedidoBox.appendChild(descricao);
  pedidoBox.appendChild(valor);
  pedidoBox.appendChild(data);

  lista.appendChild(pedidoBox);
});


    })
    .catch(err => console.error('Erro ao carregar os pedidos:', err));
