# |QA Automation Assessment

Projeto de automação de testes cobrindo **UI e API**, utilizando Playwright + TypeScript com arquitetura baseada em boas práticas de mercado.

---

## |Stack
- Playwright
- TypeScript
- API Testing (BrasilAPI)
- UI Testing (SauceDemo)
- Page Object Model (POM)
- GitHub Actions (CI)

---

## |Estrutura do Projeto
tests/
api/
cep.spec.ts
cnpj.spec.ts
ui/
login.spec.ts
purchase.spec.ts
pages/
LoginPage.ts
InventoryPage.ts
CheckoutPage.ts
api/
client.ts


## |Como rodar localmente

bash
npm install
npx playwright test


## |Boas práticas aplicadas
Separação de testes por domínio (API / UI)
Page Object Model (POM)
Reutilização de client para API
Validação de contrato e regras de negócio
Uso de baseURL (evita hardcode)
Testes independentes e paralelos

## |Relatório
npx playwright show-report

## |Destaques técnicos
Testes API desacoplados de browser
Validação robusta de respostas externas
Multi-browser testing (Chromium, Firefox, WebKit)
Estrutura escalável para novos cenários

## |Autora
Fernanda Alcerito
Senior QA
