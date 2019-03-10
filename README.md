# MyReads Project

## Visão Geral do Projeto

O projeto MyReads consiste numa aplicação de estante de livros que permite selecionar e classificar os livros que você já leu, está lendo ou quer ler. O projeto enfatiza o uso de React para criar a aplicação e fornece um servidor de API e uma biblioteca cliente, que você usará para armazenar informações à medida que interage com a aplicação. 

## Como instalar o projeto?

* É necessário fazer um fork do projeto ou clonar esse projeto através do endereço: https://github.com/celsopixain/reactnd-project-myreads-starter
* Você pode fazer o download do projeto original da Udacity (fazer um fork e clonar) pelo git da udacity, através do endereço: https://github.com/udacity/reactnd-project-myreads-starter .
* Entrar no diretório do projeto e:
    * instalar as dependências com a linha de comando: `npm install`
    * start na aplicação: `npm start`

## Como funciona o projeto?

Nesta aplicação, a página principal exibe uma lista de "estantes" (ou seja, categorias), cada uma das quais contém uma série de livros.

As três estantes são: Currently Reading (lendo atualmente) Want to Read (quer ler) Read (já leu)

Cada livro possui imagem, titulo e autor, é possível alterar o livro de estante com o botão localizado em cima das imagens ou clicar no livro e ver todas as suas informações.

## Página principal

A página principal também tem um link para /search, uma página de pesquisa que permite que você encontre livros para adicionar à sua biblioteca.

A página de pesquisa possui uma entrada de texto que pode ser usada para encontrar livros. À medida que o valor da entrada de texto muda, os livros que correspondem a essa consulta são exibidos na página, juntamente a um controle que permite adicionar o livro à sua biblioteca. Para manter a interface consistente, você pode considerar a reutilização de algum código que usou para exibir os livros na página principal.


## Pagina de Pesquisa

A pagina de pesquisa busca na API pelo termo inserido no input e retorna uma grid com os livros disponíveis onde é possível adicionar o livro a uma estante ou clicar no livro e ver todas as suas informações. Desta forma, esta página também possui um link para / (a URL raiz), que leva de volta à página principal.

Quando você navega da página de pesquisa para a página principal, deve ver instantaneamente todas as seleções que fez na página de pesquisa em sua biblioteca.

## Pagina de Descrição

Traz todas as informações disponíveis sobre o livro assim como link para uma previa do livro, temos uma seção que traz alguns livros aleatórios no final da pagina de descrição.

##Instruções e especificações do projeto

Certifique-se de que seu código adira a nossos guias de estilo de HTML, CSS, JavaScript e Git.
•	Guia de estilo de HTML da Udacity
•	Guia de estilo de CSS da Udacity
•	Guia de estilo de JavaScript da Udacity ou do Airbnb
•	Guia de estilo de Git da Udacity

Recomendamos usar o Git desde o início. Certifique-se de fazer commits com frequência e usar commits bem formatados, que estejam em conformidade com nossas diretrizes.

## Como rodar esse projeto ?

Para rodar o projeto faça o download em sua maquina e use o NPM ou YARN.

Navegue pelo seu Terminal até a pasta do projeto
Instale todas as dependências do projeto com o comando npm install
Para iniciar o servidor de desenvolvimento use o comando npm start

# Critérios de Avaliação do projeto

## Configuração da aplicação
* É fácil instalar e iniciar a aplicação?	
A aplicação foi criada com o create-react-app e exige apenas o npm install e npm start para ser instalada e iniciada (ou com yarn).

* A aplicação inclui o README, com instruções claras de instalação e inicialização?	Um README atualizado que descreve o projeto e tem instruções para instalar e rodar o projeto estão incluídas no README.

## Página principal

* A página principal exibe três categorias (ou "estantes") para livros ("currently reading", "want to read" e "read")?	
A página principal exibe três estantes de livros, e cada livro é mostrado na estante correta.

* A página principal permite que os usuários mudem os livros de estante?	A página principal exibe um controle que permite aos usuários mudar os livros de estante. O controle deve estar ligado a cada instância de livros. A funcionalidade de mover um livro para uma estante diferente funciona corretamente.

* As informações são mantidas quando ocorrem refreshes de página?	Quando é feito refresh no navegador, a página continua exibindo as mesmas informações.

* A página de busca tem um input de busca que permite que os usuários procurem por livros?	
1) A página de busca possui um campo de busca.
2) A página de busca se comporta corretamente:

    a) Quando o usuário digita algo no campo de busca, os livros relacionados à sua busca são corretamente exibidos na página.

    b) Resultados de buscas não são mostrados quando todo o texto do input de pesquisa é deletado

    c) Buscas inválidas são cuidadas e resultados anteriores não são mostrados.

    d) A pesquisa funciona corretamente quando um livro não possui um thumbnail ou um autor. (Para testar isto, pesquise por "poetry" e "biography").
    
    e) O usuário consegue pesquisar com múltiplas palavras, tais como "artificial intelligence".

* Os resultados de busca permitem que um usuário categorize um livro como "currently reading", "want to read" ou "read"?	
    1) Os resultados da página de busca permitem que os usuários selecionem "currently reading", "want to read" ou "read" e coloquem os livros na estante certa.
    2) Livros que não possuem uma estante possuem a marcação em "None" na lista de seleção.
    3) Livros que já estão na estante possuem a marcação em sua respectiva estante da lista de seleção.

* As seleções feitas na página de busca aparecem na página principal?	
    Quando um livro é categorizado na página de busca e o usuário navega para a página principal, o livro aparece na respectiva estante da página principal.

## Routing

* A página principal conecta-se à página de busca?	
    A página principal contém um link para a página de busca. Ao clicar neste link, a página de busca é exibida e a URL no endereço do navegador é /search.

* A página de busca é exibida corretamente ao entrar na página inserindo /searchdiretamente na URL do projeto no navegador.

* A página de busca conecta-se de volta à página principal?	A página de busca contém um link para a página principal. Ao clicar neste link, a página principal é exibida e a URL no endereço do navegador é /.

## Funcionalidade do código

* O código do projeto lida com o gerenciamento de estado de forma adequada?	

    O estado componente é passado dos componentes pais para os filhos. A variável de estado não é modificada diretamente - a função setState() é usada de forma correta.

    Os livros possuem o mesmo estado tanto na página de busca como na página principal da aplicação: se um livro está na estante, isso é refletido nos dois locais.

* O JSX é formatado de maneira adequada?	
    Todos os códigos JSX são formatados de maneira adequada e funcional.

## Nomeação do projeto

* O projeto desenvolvido se destacou por adicionar recursos extras além do que foi pedido nas especificações do projeto?	

⚠ ATENÇÃO ⚠ - este item NÃO é um critério obrigatório a se cumprir para ser aprovado no projeto. O seu projeto será aprovado baseando-se apenas nos critérios anteriores (Funcionalidade do código, Routing, etc). Por isso:
•	Se você não for aprovado em pelo menos 1 dos critérios anteriores, os revisores irão também reprovar este critério caso você não atenda ao mesmo. Eles deixarão um comentário nesta especificação informando o que falta para você conquistar a nomeação.
•	Na revisão em que todos os critérios anteriores forem aprovados, o seu projeto estará aprovado. Por isso, este item também será aprovado, independente do seu projeto ter sido nomeado ou não.

* O projeto desenvolvido possui pelo menos três dos seguintes itens:

Item 1 - A arquitetura de código do projeto está muito bem projetada e enxuta
•	A composição dos componentes está bem definida e coesa
•	E a definição dos estados está coesa e aplicada no componente pai mais adequado de acordo com a regra de fluxo de dados unidirecional do React
•	E o uso dos métodos do ciclo de vida está correto
•	E o código está perfeitamente legível e indentado. Os nomes de variáveis, funções, etc. fazem sentido para sua função
•	E não há código JSX repetido. Todos os itens repetidos foram corretamente componentizados, contribuindo para o reuso.
•	E há uso de comentários em trechos de código de maior complexidade para facilitar o entendimento
Item 2 - Há uso de bibliotecas/pacotes externos relevantes não pedidos no projeto
•	Fez uso de um conjunto de pacotes externos que agregou de maneira relevante à UI/UX, como loadings, debounce, forms, material design, bootstrap, etc.
•	OU utilizou outras tecnologias adicionais ao React (GraphQL, Relay, Apollo, Saga, etc)
Item 3 - Foram adicionados novos recursos relevantes na aplicação
•	Implementou recursos além do que foi pedido. Tais features aumentaram a relevância de uso da aplicação, seja enriquecendo a experiência do usuário ou suprindo novas necessidades de uso
Item 4 - Há uso de testes na aplicação
•	Aplicou testes na aplicação, seja com Jest, Nightmare ou qualquer outra ferramenta de testes unitários ou de integração. Os testes apresentaram uma cobertura mínima de 80%

# Arquivos do modelo inicial da Udacity
```bash
├── CONTRIBUTING.md
├── README.md - This file.
├── SEARCH_TERMS.md # The whitelisted short collection of available search terms for you to use with your app.
├── package.json # npm package manager file. It's unlikely that you'll need to modify this.
├── public
│   ├── favicon.ico # React Icon, You may change if you wish.
│   └── index.html # DO NOT MODIFY
└── src
    ├── App.css # Styles for your app. Feel free to customize this as you desire.
    ├── App.js # This is the root of your app. Contains static HTML right now.
    ├── App.test.js # Used for testing. Provided with Create React App. Testing is encouraged, but not required.
    ├── BooksAPI.js # A JavaScript API for the provided Udacity backend. Instructions for the methods are below.
    ├── icons # Helpful images for your app. Use at your discretion.
    │   ├── add.svg
    │   ├── arrow-back.svg
    │   └── arrow-drop-down.svg
    ├── index.css # Global styles. You probably won't need to change anything here.
    └── index.js # You should not need to modify this file. It is used for DOM rendering only.
```

# Backend Server

To simplify your development process, we've provided a backend server for you to develop against. The provided file [`BooksAPI.js`](src/BooksAPI.js) contains the methods you will need to perform necessary operations on the backend:

* [`getAll`](#getall)
* [`update`](#update)
* [`search`](#search)

### `getAll`

Method Signature:

```js
getAll()
```

* Returns a Promise which resolves to a JSON object containing a collection of book objects.
* This collection represents the books currently in the bookshelves in your app.

### `update`

Method Signature:

```js
update(book, shelf)
```

* book: `<Object>` containing at minimum an `id` attribute
* shelf: `<String>` contains one of ["wantToRead", "currentlyReading", "read"]  
* Returns a Promise which resolves to a JSON object containing the response data of the POST request

### `search`

Method Signature:

```js
search(query)
```

* query: `<String>`
* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

