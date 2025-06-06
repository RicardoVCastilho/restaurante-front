const url = 'http://localhost:3000/api/clientes/all-clientes';

fetch(url)
.then(res => res.json())
.then(data => {
const lista = document.getElementById('clientes-lista');

data.forEach(cliente => {
  const clienteBox = document.createElement('div');
  clienteBox.classList.add('cliente-card');

  const nome = document.createElement('h2');
  nome.textContent = cliente.nome;
  nome.classList.add('cliente-nome');

  const cidade = document.createElement('p');
  cidade.innerHTML = `<strong>Cidade:</strong> ${cliente.cidade}`;

  const telefone = document.createElement('p');
  telefone.innerHTML = `<strong>Telefone:</strong> ${cliente.telefone}`;

  clienteBox.appendChild(nome);
  clienteBox.appendChild(cidade);
  clienteBox.appendChild(telefone);

  lista.appendChild(clienteBox);
});

})
.catch(err => console.error('Erro ao carregar os clientes:', err));