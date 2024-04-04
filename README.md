# Projeto TDD
Projeto utilizando a técnica TDD (desenvolvimento orientado a testes).  
Um exemplo com o cálculo do IMC (índice de massa corporal).  

Para essa prática usarei o [VSCode](https://code.visualstudio.com/download) e o [Node.js](https://nodejs.org/en/download/current).  
Se você ainda não tem esses programas instalados, baixe e instale.

>Eu estou usando os ícones da extensão [´VSCode Great Icons´](https://marketplace.visualstudio.com/items?itemName=emmanuelbeziat.vscode-great-icons).  
Se você quiser os ícones iguais basta adicionar essa extensão no seu VSCode.

## TDD - Test Driven Development ou Desenvolvimento Orientado a Testes
A técnica/prática do TDD foi introduzida pela metodologia ágil XP - eXtreme Programming.  
Essa técnica prega que os testes devem ser escritos antes da codificação propriamente dita.

Nesse tutorial vou ensina como criar um novo projeto do zero e realizar o desenvolvimento de um programa (IMC) com a técnica do TDD, escrevendo os testes antes de criar o código do programa.

Na técnica do TDD devemos primeiro escrever um teste que falha, ver o teste falhar, escrever o mínimo de código possível para fazer o teste passar e, por fim, refatorar o código da melhor forma que conseguirmos para solucionar o problema.

![TDD - Imgem que ilustra as fases do test driven development - escrever um teste que falha, ver o teste falhar, escrever o mínimo de código possível para fazer o teste passar e, por fim, refatorar o código da melhor forma que conseguirmos para solucionar o problema](/imgs/01-tdd.jpg)

Vamos realizar a prática do TDD para o desenvolvimento de um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa.

## 1º Passo - Crie uma nova pasta para o projeto.
- Crie uma nova pasta para o projeto.

    >É uma boa prática NÃO utilizar letras maiúsculas, nem espaço, nem outros caracteres especiais.  
    >Utilize apenas letras minúsculas, o hifem `-` para separar as palavras e, se achar necessário, pode usar números.

- Exemplo de um bom nome para a pasta desse projeto:

    `projeto-tdd-imc`

## 2º Passo - Abra a pasta do Projeto TDD IMC no VSCode
- Abra a pasta do projeto tdd imc no VSCode  
![abrir pasta com VSCode](/imgs/02-abrir-com-code.jpg)

## 3º Passo - Instale o módulo do 'JEST' no projeto
- Para utilizar o [Framework de Testes](https://jestjs.io/pt-BR/) `JEST` no nosso projeto abra o terminal (`Ctrl + '`) e execute o comando:

        npm i --save-dev jest

- A instalação terá sido BEM SUCEDIDA quando for adicionado a pasta e os arquivos:  

    Pasta: `node_modules`

    Arquivos: `package-lock.json` e `package.json`

![Pasta: 'node_modules' - Arquivos: 'package-lock.json' e 'package.json'](/imgs/03-apos-instalacao-jest.jpg)

## 4º Passo - Adicione o Script JEST para testes no arquivo package.json
- Abra o arquivo `package.json` e acrescente o código abaixo entre as últimas 2 chaves de fechamento -` } `-

        ,
        "scripts": {
        "test": "jest"
        }

O arquivo deverá ficar assim:

        {
            "devDependencies": {
                "jest": "^29.7.0"
            },
            "scripts": {
                "test": "jest"
            }
        }

## 5º Passo - Criar os arquivos imc.js e imc.test.js
Para uma melhor organização do projeto vamos criar primeiro uma pasta `src` (fonte) e por os arquivos de códigos fonte dentro dessa pasta

Agora iremos criar os dois aruivos de códigos fonte do nosso projeto dentro da pasta `src`.  

    O arquivo do programa IMC: `imc.js`  
    E o arquivo de teste: `imc.test.js`

Deve ficar assim:  
![explorador de  arquivos do projeto com a pasta src e os arquivos imc.js e imc.tes.js](/imgs/04-explorer-pasta-src-arquivos-imc.js-imc.tes.jpg)

## 6º Passo - Agora vamos começar a prática TDD
### 1º bloco de código - Vamos começar escrevendo um teste e ver ele falhar
Abra o aquivo `imc.test.js` e digite o código abaixo  
PRESTE MUITA ATENÇÃO NAS LETRAS MAIÚSCULAS E MÍNUSCULAS

![primeiro bloco de código - teste que falha](/imgs/05-bloco-code-1.jpg)

Depois execute o teste no terminal (`ctrl + '`) - `npm test`

![test1-falha](/imgs/06-test1-falha.jpg)

Esse teste deve falhar e você deve ver e identificar o erro: `ReferenceError: imc is not defined`

![falha1-imc-is-not-defined](/imgs/07-falha1-imc-is-not-defined.jpg)

### 2º bloco de código - vamos resolver o erro 'imc is not defined'
Ainda no arquivo `imc.test.js` altere o código para ele ficar desse jeito:

![segundo bloco de código - teste que falha](/imgs/08-bloco-code-2.jpg)

Depois execute o teste no terminal (`ctrl + '`) - `npm test`

Esse teste deve falhar e você deve ver e identificar o erro:

        Expected constructor: Function
        Received constructor: Object

![falha2-expected-Function-receveid-Object](/imgs/09-falha2-expected-Function-receveid-Object.jpg)

### 3º bloco de código - agora vamos fazer o teste passar (PASS)
Abra o arquivo `imc.js` e digite o código abaixo:

![terceiro bloco de código - teste que passa](/imgs/10-bloco-code-3.jpg)

Depois execute o teste no terminal (`ctrl + '`) - `npm test`

Esse teste deve passar.

![test3-pass](/imgs/11-test3-pass.jpg)