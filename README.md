# QA Automation Assessment - NS Tech

##  |Overview

Este projeto foi desenvolvido como parte do processo seletivo para a posição de **Senior QA Engineer**, com foco em garantir qualidade, confiabilidade e escalabilidade em aplicações críticas relacionadas a **logística e seguros de cargas**.

A solução foi construída utilizando **Playwright**, com abordagem moderna de automação, visando não apenas validar funcionalidades, mas também **mitigar riscos, prevenir regressões e apoiar decisões de engenharia**.
Os testes validam comportamento real da API e não assumem padrões REST, garantindo maior confiabilidade em ambientes produtivos
---

## |Objetivo

Garantir a qualidade do sistema através de:

* Testes automatizados de UI
* Validação de cenários positivos e negativos
* Estrutura escalável para crescimento da suíte
* Separação de responsabilidades (Page Object Model)
* Base para integração contínua (CI/CD)

---

## | Estratégia de Testes

A abordagem adotada segue princípios de qualidade modernos:

### |Tipos de teste cobertos

* Testes funcionais (UI)
* Testes positivos (happy path)
* Testes negativos (validação de erro)
* Testes de regressão inicial

### |Arquitetura

* **Page Object Model (POM)** para reutilização e manutenção
* Separação entre camadas:

  * `tests/ui` → testes de interface
  * `pages` → abstração da UI
  * `tests/api` → base para testes de API
 
  ## |Rastreabilidade

Os testes automatizados foram desenvolvidos com base nos cenários descritos em:

* TEST_STRATEGY.md
* TEST_CASES.md

Garantindo alinhamento entre:

* Requisitos
* Casos de teste
* Automação


### |Foco de qualidade

* Estabilidade dos testes
* Legibilidade e manutenção
* Facilidade de expansão
* Isolamento de responsabilidades

---

## |Estrutura do Projeto


qa-automation-assessment-ns-tech/
│
├── tests/
│   ├── ui/
│   │   ├── login.spec.ts
│   │   └── purchase.spec.ts
│   ├── api/
│   │   ├── cep.spec.ts
│   │   └── cnpj.spec.ts
│   └── e2e/
│
├── pages/
│   └── LoginPage.ts
│
├── playwright.config.ts
├── package.json
└── README.md


---

## |How to execute:

### 1. Clonar o repositório


git clone https://github.com/NandAlcerito/qa-automation-assessment-ns-tech.git
cd qa-automation-assessment-ns-tech


### 2. Instalar dependências


npm install


### 3. Instalar browsers do Playwright


npx playwright install


### 4. Executar testes


npx playwright test


### 5. Visualizar relatório


npx playwright show-report


---

## |Cenários implementados

### | Login

* Login com credenciais válidas
* Login com credenciais inválidas

###  Fluxo de compra (base)

* Estrutura preparada para validação de jornada completa

### |API (estrutura inicial)

* Testes preparados para expansão (ex: CEP, CNPJ)

---

## |Riscos identificados

* Dependência de ambiente externo (SauceDemo)
* Falta de controle sobre dados de teste
* Possível instabilidade de elementos UI

---

## |Melhorias futuras

* Integração com CI/CD (GitHub Actions)
* Mock de serviços externos
* Testes de performance
* Testes de contrato (API)
* Data-driven tests
* Geração de massa de dados automatizada
* Retry inteligente e controle de flakiness

---

## | Decisões técnicas

* Uso do Playwright pela sua confiabilidade e suporte multi-browser
* Implementação de POM para reduzir acoplamento
* Separação de testes por domínio (UI/API)
* Estrutura preparada para crescimento contínuo

---

## 🧪 Qualidade além do teste

Este projeto não se limita à execução de testes automatizados.

A proposta é demonstrar:

* Pensamento crítico em QA
* Prevenção de defeitos
* Estrutura sustentável
* Visão de produto e risco

## |Autor

Fernanda Alcerito
Senior QA Engineer
