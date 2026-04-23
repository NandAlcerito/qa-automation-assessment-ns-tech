# Test Strategy - NS Tech Assessment

##  Objetivo

Garantir a qualidade do sistema de gestão de cargas e seguros, mitigando riscos operacionais, financeiros e de integridade de dados.

---

## Abordagem

A estratégia adotada segue princípios de Quality Engineering, considerando:

* Prevenção de defeitos
* Cobertura baseada em risco
* Testes automatizados como base de regressão
* Validação de fluxos críticos de negócio

---

## Contexto do domínio

Sistemas de logística e seguros possuem riscos elevados:

* Perda financeira
* Inconsistência de dados
* Falhas em integração com terceiros
* Problemas de rastreabilidade

---

## Tipos de testes considerados

### ✔ Funcionais

Validação das funcionalidades principais

### ✔ Regressão

Garantir que novas alterações não impactem fluxos existentes

### ✔ Integração

Validação de comunicação entre serviços

### ✔ Negativos

Validação de comportamento em cenários inválidos

### ✔ Exploratórios

Identificação de cenários não previstos

---

## Análise de riscos

| Risco               | Impacto | Mitigação            |
| ------------------- | ------- | -------------------- |
| Falha no login      | Alto    | Testes automatizados |
| Dados inválidos     | Alto    | Validação negativa   |
| Instabilidade UI    | Médio   | Retry + trace        |
| Dependência externa | Médio   | Mock futuro          |

---

##  Estratégia de automação

* Playwright para testes E2E
* POM para manutenção
* Execução em CI/CD
* Evidências (logs, screenshots, vídeos)

---

## Critérios de qualidade

* Testes estáveis
* Baixo índice de flakiness
* Execução rápida
* Fácil manutenção

---

## Evolução futura

* Testes de performance
* Testes de contrato (API)
* Observabilidade avançada
* Data-driven testing
