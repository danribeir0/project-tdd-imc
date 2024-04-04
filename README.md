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

![TDD - Imgem que ilustra as fases do test driven development - escrever um teste que falha, ver o teste falhar, escrever o mínimo de código possível para fazer o teste passar e, por fim, refatorar o código da melhor forma que conseguirmos para solucionar o problema](/imgs/tdd.jpg)

Vamos realizar a prática do TDD para o desenvolvimento de um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa.

## 1º Passo - Crie uma nova pasta para o projeto.
- Crie uma nova pasta para o projeto.

    >É uma boa prática NÃO utilizar letras maiúsculas, nem espaço, nem outros caracteres especiais.  
    >Utilize apenas letras minúsculas, o hifem `-` para separar as palavras e, se achar necessário, pode usar números.

- Exemplo de um bom nome para a pasta desse projeto:

    `projeto-tdd-imc`

## 2º Passo - Abra a pasta do Projeto TDD IMC no VSCode
- Abra a pasta do projeto tdd imc no VSCode  
![abrir pasta com VSCode](/imgs/abrir-com-code.jpg)

## 3º Passo - Instale o módulo do 'JEST' no projeto
- Para utilizar o [Framework de Testes `JEST`](https://jestjs.io/pt-BR/) no nosso projeto abra o terminal (`Ctrl + '`) e execute o comando:

        npm i --save-dev jest

- A instalação terá sido BEM SUCEDIDA quando for adicionado a pasta e os arquivos:  

    Pasta: `node_modules`

    Arquivos: `package-lock.json` e `package.json`

![Pasta: 'node_modules' - Arquivos: 'package-lock.json' e 'package.json'](/imgs/apos-instalacao-jest.jpg)

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
![explorador de  arquivos do projeto com a pasta src e os arquivos imc.js e imc.tes.js](/imgs/explorer-pasta-src-arquivos-imc.js-imc.tes.jpg)

