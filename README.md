# Automação Obramax

- Este é o projeto de automação utilizando Cypress para testes de interface.

## Descrição do Projeto

- O projeto tem como objetivo principal realizar testes automatizados para assegurar que suas funcionalidades estejam conforme o esperado. Além disso, busca-se validar a experiência do usuário, identificar possíveis falhas de usabilidade e garantir sua consistência.

### Estrutura do projeto

```
|-- cypress
|   |-- e2e
|   |   |--desk
|   |   |    -- ecom
|   |   |       |-- nao_regionalizado_logado //cenários de testes e2e
|   |   |       |   |-- cart.cy.js /testes e2e
|   |   |    -- qta
|   |   |       |-- nao_regionalizado_logado //cenários de testes e2e
|   |   |       |   |-- cart.cy.js /testes e2e
|   |   |--mobile
|   |   |   |   |   |-- ecom
|   |   |   |   |   |   |-- nao_regionalizado_logado //cenários de testes e2e
|   |   |   |   |   |   |   |-- cart.cy.js /testes e2e
|   |   |   |   |   |-- qta
|   |   |   |   |   |   |-- nao_regionalizado_logado //cenários de testes e2e
|   |   |   |   |   |-- cart.cy.js /testes e2e
|   |-- fixtures
|   |   |-- cart.json //armazenar dados estáticos
|   |-- support
|   |   |-- commands
|   |   |   |-- commands_api.js //comandos personalizados / funções
|   |   |-- page_elements
|   |   |   |-- cart_page.js //mapeamentos de elementos
|   |   |-- e2e.js
|-- cypress.env.json //variáveis de ambiente
|-- cypress.config.js //configuração principal do projeto

```

### Instalação de Dependências

Certifique-se de ter o Node.js instalado em sua máquina. Em seguida, você pode instalar as dependências do projeto executando o seguinte comando no terminal:

`npm install`

### Versão das Ferramentas

- Cypress: 13.6.4
- Cypress Plugin XHR Toggle: 1.2.1
- cypress-allure-plugin: 2.40.2
- ESLint: 8.55.0
- Prettier: 3.1.0
- NodeJS: 20
- NPM: 10.2.4

### Instalação

- Abra o terminal e navegue até o diretório onde deseja clonar o repositório do GitHub. Em seguida, execute o seguinte comando:
  `git clone https://github.com/quality-digital/obramax-cypress-e2e`
- Entre no diretório do projeto recém-clonado usando o comando:
  `cd nome-repositorio`
- Edite o arquivo cypress_exemplo.env.json para cypress.env.json e insera seus dados
- Execute o seguinte comando para instalar as dependências do projeto, incluindo o Cypress: `npm i`

### Principais comandos para execução dos testes

No pronpt de comando:
Navegar até a pasta do projeto e execute um dos comando abaixo:

Para abrir a IDE do Cypress e executar os testes:

`npx cypress open`

Para executar todos os testes em modo headless:

`npx cypress run`

Para executar os testes de um arquivo específico em modo headless, utilize um dos seguintes comandos:

`npx cypress run ecom_mobile_android`: Executa os testes Cypress em um ambiente de dispositivo móvel Android.

`npx cypress run ecom_mobile_ios`: Executa os testes Cypress em um ambiente de dispositivo móvel Android.

`npx cypress run ecom_desk_1920`: Executa os testes Cypress em um ambiente de desktop com resolução de 1920x1080.

`npx cypress run ecom_desk_1366`: Executa os testes Cypress em um ambiente de desktop com resolução de 1366x768.

### Plugins

- Controle de relatórios [cypress-plugin-allure](https://allurereport.org/docs/cypress/)

- Controle do comportamento das solicitações XHR durante a execução dos testes [cypress-plugin-xhr-toggle](https://www.npmjs.com/package/cypress-plugin-xhr-toggle)
