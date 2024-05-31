# Roadmap de Testes para a Calculadora
## Fase 1: Testes de Interface
### Renderização Inicial:
- Objetivo: Garantir que todos os botões essenciais estão visíveis na interface.
- Itens a Verificar: Botões numéricos (1, 2, 3), botões de operações (+, -, *, /), parênteses ((, )).
## Fase 2: Testes de Funcionalidade Básica
### Manipulação de Cliques nos Botões:
- Objetivo: Verificar a resposta da calculadora aos cliques dos botões numéricos e de operações básicas.
- Cenário: Inserção de uma sequência simples de números e operações (1, 2, +, 3, =).
- Resultado Esperado: Exibição correta do resultado da operação (15).
### Limpar Entrada e Resultado:
- Objetivo: Testar a funcionalidade do botão de limpar (C).
- Cenário: Inserção de alguns números seguidos pelo clique no botão de limpar (1, 2, C).
- Resultado Esperado: A entrada deve estar vazia.
## Fase 3: Testes de Expressões Complexas
### Manipulação de Expressões Complexas:
- Objetivo: Verificar a capacidade da calculadora de resolver expressões aritméticas complexas.
- Cenário: Inserção de uma expressão que combina várias operações (12 + 3 * 2 =).
- Resultado Esperado: Cálculo correto da expressão (18).
### Expressões com Parênteses:
- Objetivo: Testar a manipulação de expressões que incluem parênteses.
- Cenário: Inserção de uma expressão com parênteses ((1 + 2) * 3 =).
- Resultado Esperado: Cálculo correto da expressão respeitando a precedência de operações (9).
## Fase 4: Testes com Números Negativos
### Multiplicação com Números Negativos:
- Objetivo: Testar operações envolvendo números negativos.
- Cenário: Inserção de uma expressão com multiplicação de negativos (-2 * -2 =).
- Resultado Esperado: Cálculo correto da expressão (4).
### Divisão com Números Negativos:
- Objetivo: Verificar operações de divisão envolvendo números negativos.
- Cenário: Inserção de uma expressão de divisão com negativo (-4 / 2 =).
- Resultado Esperado: Cálculo correto da expressão (-2).
## Fase 5: Testes de Casos Especiais
### Divisão por Zero:
- Objetivo: Testar a resposta da calculadora ao tentar dividir por zero.
- Cenário: Inserção de uma expressão de divisão por zero (4 / 0 =).
- Resultado Esperado: Exibição de uma mensagem de erro (Impossível dividir por zero).
### Prevenção de Operadores Duplicados:
- Objetivo: Verificar a prevenção de operadores duplicados na entrada.
- Cenário: Inserção de operadores consecutivos (4 / / 2).
- Resultado Esperado: Correção automática para uma expressão válida (4 / 2).
## Fase 6: Testes com Valores Decimais
### Manipulação de Valores Decimais:
- Objetivo: Testar operações envolvendo números decimais.
- Cenário: Inserção de uma expressão decimal (2.2 / 1 =).
- Resultado Esperado: Cálculo correto da expressão (2.2).
### Divisão de Decimais:
- Objetivo: Verificar a divisão de números decimais.
- Cenário: Inserção de uma expressão decimal complexa (2.2 / 0.1 =).
- Resultado Esperado: Cálculo correto da expressão (22).
## Fase 7: Testes de Robustez
### Verificação de Correção de Erros:
- Objetivo: Garantir que todos os bugs conhecidos sejam corrigidos e que a calculadora funcione corretamente em todos os cenários.
- Cenário: Testar todas as combinações possíveis de entradas e operações.
- Resultado Esperado: A calculadora deve passar em todos os testes sem falhas.

### Este roadmap de testes garante que a calculadora seja testada de forma abrangente, cobrindo desde a interface básica até operações complexas e casos especiais, assegurando sua funcionalidade e robustez.