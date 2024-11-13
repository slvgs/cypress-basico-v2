## Cypress - Atendimento CAC-TAT 

Nesta seção, abordamos os principais comandos utilizados em um teste básico de uma aplicação de atendimento ou formulário online. Os testes exploram as funcionalidades do sistema, validando interações e comportamentos esperados. Abaixo estão os comandos e suas principais aplicações:

- cy.visit: acessa a URL da aplicação a ser testada.
- should: realiza verificações de estado e valor esperado em elementos.
- type: simula a digitação de texto em campos de entrada.
- click: simula cliques em botões ou outros elementos interativos.
- get: obtém elementos do DOM com base em seletor CSS.
- beforeEach: executa comandos antes de cada teste, facilitando a preparação do cenário.
- select: seleciona opções de um campo de seleção.
- clear: limpa campos de entrada de texto.
- contains: verifica se um elemento contém o texto especificado.
- check/uncheck: marca ou desmarca opções em checkboxes ou radio buttons.
- each: itera sobre uma lista de elementos, aplicando ações ou verificações.
- wrap: encapsula um valor ou elemento para manipulação.
- last: seleciona o último item de uma lista de elementos.
- expect: define uma expectativa de valor ou estado para verificação.
- selectFile: simula o upload de arquivos em campos de upload.
- viewport: ajusta o tamanho da tela para simular visualizações em diferentes dispositivos, como mobile e desktop.
- invoke: chama funções diretamente em elementos ou propriedades para manipulações avançadas.

Esses comandos permitem uma ampla cobertura de interações e verificações, ajudando a garantir que a aplicação 
esteja funcionando conforme esperado em diferentes cenários e dispositivos.

Também foi realizado a leitura de artigos para complemento do aprendizado em aula e aplicados nos testes.

## Pre-requirements

É necessário ter o Node.js e o npm instalados para executar este projeto.


> Eu usei as verões `v20.18.0`do Node.js e npm. Eu sugiro que você use as mesmas versões ou versões posteriores.

## Installation

Execute `npm install` (ou `npm i` para a versão mais curta) para instalar as dev dependencies.

## Tests

Execute npm test(ou npm tpara a versão curta) para executar o teste no modo headless.

Ou execute npm run cy:openpara abrir o Cypress no modo interativo.

## Support this project

Se você quiser apoiar este projeto, deixe um ⭐.

___

Esse projeto foi criado com 💚 por [Gabriella](https://www.linkedin.com/in/gabriella-santanati/).

![](./image/2024-11-13_12h58_54.png)
