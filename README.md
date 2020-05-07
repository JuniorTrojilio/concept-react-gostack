<div align="center">
	<img src="https://user-images.githubusercontent.com/39541807/81132560-3a20a000-8f25-11ea-8179-4f4540936787.png">
	<h1> React Concepts</h1>
</div>
<p align="center">In this initial module we learn the main react concepts.</p>
<div display="inline" align="center">
<img src="https://img.shields.io/github/license/juniortrojilio/concept-react-gostack">
</div>

---

## O que é React?

- Biblioteca para construção de interfaces
- Utilizado para construção de SPAs (Single Page Applications)
- Framework (library JS)
- Tudo é executado em JS
- React → Framework
- ReactJS → Web Development
- React Native → Mobile Development

---

## Vantagens

- Organização do código
- Componentização

     "Acontece quando consigo isolar a lógica de uma funcionalidade sem que interfira no funcionamento da aplicação"

- Divisão de responsabilidades
    - Back-end : Regras de negócio
    - Front-end: Interface
- Uma API, vários clients
- Programação declarativa

---

## JSX

Responsavel por escrever o HTML dentro do Javascript

Permite ao React criar os próprios elementos.

```jsx
/* React sem JSX */

function Button(){
	return React.createElement(
		'button',
		{type : button},
		React.createElement(
			'span',
			{ class : 'icon'}
	)
)}

<button type="button">
	<span class="icon"></span>
</button>

/* React com JSX */

function Button(){
	return (
	<button type="button">
		<span class="icon"></span>
	</button>
)
```

---

## Imperativo vs Declarativo

Resumidamente imperativo diz "**como fazer"** e o declarativo diz **"o que fazer"**.

Abstraindo para um exemplo de código:

As notificações que aparecem no facebook,  em um exemplo imperativo para editar ou remover a numeração teria-mos algo como:

```jsx
function renderBadge(num){
	if (notifications === 0 && num > 0){
		//for add badge
		container.appendChild(badge)
	}
	
	if(notifications !== 0 && num > 0){
		//change number of notifications in badge
		badge.innerHTML = num
	}

  if(notifications !== 0 && num === 0){
	  //Remove badge
		container.removeChild(badge)
	}
}
```

Já em um exemplo declarativo utilizando React:

```jsx
// We don't compare the previous state
function Badge({ num }){
	return (
		<div id="container">
			{ num > 0 && <div id="badge"> { num } </div>}}
			<span class="icon"></span>
		</div>
	)
}
```

---

## Babel

O browser não entende JSX, então o Babel transpila o código escrito em JSX em javascript que os browsers entendão.

 

## WebPack

Pega o código que o Babel compila e transforma em um unico código (Bundle). 

---

## Construindo um projeto React

### Ferramentas utilizadas:

- babel
- react react-dom
- webpack

Inicializar um projeto dentro do diretório

```bash
yarn init -y
```

adicionar lib react para desenvolvimento web

```bash
yarn add react react-dom
```

## Configurando o Babel

adicionar babel e webpack

```bash
yarn add @babel/core @babel/preset-env @babel/preset-react webpack webpack-cli
```

adicionar babel cli

```bash
yarn add @babel/cli
```

adicionar babel loader

```bash
yarn add babel-loader
```

adicionar o loader de css

```bash
yarn add style-loader css-loader  
```

adicionar o loader de arquivos

```bash
yarn add file-loader
```

adicionar transform para async await no babel

```bash
yarn add @babel/plugin-transform-runtime -D
```

---

## Configurando o Axios para chamadas HTTP

```bash
yarn add axios
```

---

# Conceitos Importantes

### Componentes

Tudo no React é um componente, podem ser encapsulados, e asemelham a arvore de elementos mas sem interferir na execução dos demais componentes, todo componente é uma função que retorna um html para montar o JSX.

**Criação de um Componente:**

- Cria-se um novo arquivo js que leva o nome do componente
- Importa o React
- Declara a exportação  da função e o código HTML é introduzido:

```jsx
export default function Component(){
	return (
		<h1> Hello World </h1>
	)
}
```

### Propriedades

As propriedades são atributos passados dentro da tag  do component por exemplo no component anterior:

```jsx
function App(){
return (
	<Component tittle="Homepage"/>
)}

/* A função do componente receberá como argumentos as propriedades passadas na tag */

export default function Component({ title }){
	return (
		<h1> { title } </h1>
	)
}
```

### Estado e Imutabilidade

O React permite atualizar em tempo de execução as informações na view através do gerenciamento de estados, pense da seguinte maneira, suponhamos que eu desenhe o seguinte desenho: 
<div align="center">
<img src="https://user-images.githubusercontent.com/39541807/81321903-8aa11600-9069-11ea-9b61-3e48bc9f090c.png"  width=300>
</div>
Use sua imaginação e pense que isto é um desenho de um chão com uma grama, o sol la em cima e o céu em azul no fundo, uma vez que eu desenhe isto em uma folha sufite com giz de cera não conseguirei mudar a cor apenas do sol, terei que desenhar tudo novamente! Pois é, é mais ou menos assim que os componentes no react funcionam, todo componente é imutavel, inalterável, e se encontra em um estado, mas para que não tenhamos que fazer um carregamento de toda a página novamente (redesenhar tudo), eu visualizo qual componente foi alterado e removo ele naquele estado e adiciono um novo componente com a alteração que desejo ou seja em um novo estado. De volta ao exemplo, para alterar a cor do sol, teriamos que recortar o sol  e adicionar um novo sol com um estado diferente e só aquele pedacinho foi redesenhado.
<div align="center">
<img src="https://user-images.githubusercontent.com/39541807/81321898-88d75280-9069-11ea-88b8-fefc5859ee9c.png" width=300>      </div>                                            
	<p align="center">↓↓↓↓↓↓↓</p>											     
<div align="center">
<img src="https://user-images.githubusercontent.com/39541807/81321901-8a087f80-9069-11ea-97e7-016586dadaae.png" width=300>
</div>
No react podemos fazer o uso dos hooks para facilitar o controle dos estados dos componentes.

## useState

Retorna um array com duas posições

1. Váriavel com seu valor inicial
2. Função para atualizar o valor da variável

## useEffect

Utilizado para disparar alguma função quando solicitado.

1. Primeiro parâmetro armazena qual função disparar
2. Quando disparar a função

---
<p align="center"> <> with 💙 by <a href="https://github.com/juniortrojilio">Junior Trojilio</a></p>
