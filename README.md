# aluradev
<p>
    <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/adrianoavelino/aluradev">
    <a href="https://github.com/my-study-area">
        <img alt="Made by" src="https://img.shields.io/badge/made%20by-adriano%20avelino-gree">
    </a>
    <img alt="Repository size" src="https://img.shields.io/github/repo-size/adrianoavelino/aluradev">
    <a href="https://github.com/EliasGcf/readme-template/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/adrianoavelino/aluradev">
    </a>
</p>

Aluradev é uma pequena aplicação Frontend utilizando somente HTML, CSS e Javascript, desenvolvida durante a **Alura Challenge Front-End** da Alura. Nela é possível salvar blocos de códigos  semelhante a aplicações como [Gist](https://gist.github.com/), [Codepen](https://codepen.io/) e etc, porém, salvando localmente através do Local Storage.

![Print da Home da aplicação](./assets/img/aluradevprint.png)

A aplicação está disponível em [adrianoavelino.github.io/aluradev](https://adrianoavelino.github.io/aluradev/).

## Sobre
Um produtor de conteúdo de programação solicitou a construção de um editor de texto online para postar trechos de códigos em suas redes sociais. Para ele, o editor precisa ter um layout acessível, simples, bonito e funcional, para que ele possa, inclusive, compartilhar a ferramenta com seus seguidores e seguidoras.

As principais funcionalidades pedidas são: um campo para selecionar a linguagem a ser escrita; um campo de texto para escrever o código em si; e um botão para visualização deste código com o sintaxe highlight com um tema bem bonito. É importante que esse projeto seja escalável, ao ponto que, se for necessário adicionar alguma funcionalidade (feature), seja simples fazê-la. Como esse editor é online, é de extrema importância que ele seja responsivo.

## Tecnologias
- HTML
- CSS
- Javascript
- Highlight.js
- Browsersync (ambiente de desenvolvimento)
- Node/NPM (ambiente de desenvolvimento)

## Começando
> Obs: caso não tenha o Browsersync instalado, execute o seguinte comando: `npm install -g browser-sync`
```bash
# clona o projeto
git clone https://github.com/adrianoavelino/aluradev.git

# entra no diretório da aplicação
cd aluradev

# inicia a aplicação
browser-sync start --server --files "*.html, assets/css/**/*.css, assets/js/*.js"
```
