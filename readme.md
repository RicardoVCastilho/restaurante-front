## Projeto Restaurante - Gerenciamento de Clientes e Pedidos
Descrição
Este projeto é uma aplicação web simples para gerenciamento visual de clientes e pedidos de um restaurante. Ele permite visualizar listas de clientes e pedidos com uma interface clara, leve e estilizada com uma paleta de cores em tons de vermelho, transmitindo um design moderno e agradável.

A aplicação é composta por páginas HTML estáticas que exibem dados dinâmicos carregados via JavaScript, onde cada cliente ou pedido é exibido em cards separados, facilitando a leitura e organização.

## Tecnologias Utilizadas

- HTML5;
- CSS3 (com estilização personalizada baseada em cores vermelhas);
- JavaScript (DOM Manipulation para criação dinâmica dos cards).

## Estrutura do projeto

```bash
/
├── index.html              # Página principal (menu)
├── clientes.html           # Página para visualizar clientes
├── pedidos.html            # Página para visualizar pedidos
├── src/
│   ├── css/
│   │   ├── style.css       # Estilos gerais (cores, fontes, layout)
│   │   └── pedidos.css     # Estilos específicos para pedidos
│   ├── imgs/
│   │   ├── clientes-logo.png
│   │   ├── pedidos-logo.png
│   │   └── infinityschool_logo.jpeg
│   └── js/
│       ├── clientes.js     # Script para popular a lista de clientes
│       └── pedidos.js      # Script para popular a lista de pedidos
```

## Funcionalidades

Clientes

- Exibição dinâmica de uma lista de clientes em formato de cards.

- Cada card mostra o nome, cidade e telefone do cliente.

- Navegação simples para voltar ao menu ou acessar a página de pedidos.

Pedidos

- Exibição dinâmica de uma lista de pedidos em formato de cards.

- Cada card apresenta:

  - Nome do cliente (destaque)

  - Descrição do pedido/produto

  - Valor formatado em reais (R$)

  - Data do pedido formatada (dd/mm/aaaa)

- Navegação simples para voltar ao menu ou acessar a página de clientes.