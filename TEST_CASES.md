# Test Cases - NS Tech Assessment

## 🔐 Login

### CT01 - Login com sucesso

* Dado usuário válido
* Quando realizar login
* Então deve acessar o sistema

### CT02 - Login inválido

* Dado usuário inválido
* Quando tentar login
* Então deve exibir erro

### CT03 - Campos vazios

* Quando tentar login sem preencher
* Então deve validar obrigatoriedade

---

## 🚚 Fluxo de carga (exemplo de domínio)

### CT04 - Criar carga com sucesso

* Dado dados válidos
* Quando criar carga
* Então deve salvar corretamente

### CT05 - Criar carga com dados inválidos

* Dado dados incompletos
* Quando tentar criar
* Então deve retornar erro

---

## 🔄 Regressão

### CT06 - Fluxo completo

* Login → operação → validação final

---

## ⚠️ Cenários críticos

### CT07 - Timeout / inatividade

* Sessão deve expirar corretamente

### CT08 - Concorrência

* Múltiplas operações simultâneas

---

## 🌐 API

### CT09 - Validação de endpoint

* Retorno 200
* Estrutura correta

### CT10 - Erro de API

* Status diferente de 200
