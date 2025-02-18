# Introdução:
  Somos uma empresa de aluguel de temporada. Nós alugamos propriedades de proprietários por pequenos períodos de tempo, geralmente por até 90 dias.

# Requisito: Cálculo da data de repasse para o proprietário
  ## Quando uma propriedade é reservada/alugada, nós recebemos o valor do aluguel do hóspede e repassamos o dinheiro para o proprietário de acordo com as seguintes regras:
    - Sempre repassamos o dinheiro para o proprietário no dia 15 e também no último dia do mês. Caso o data do repasse caia num feriado ou final de semana, o repasse é feito no próximo dia útil. 
    - Se a data de checkin, que é a data da entrada dos hóspedes na propriedade, acontecer até o dia 15, repassamos o valor para o proprietário no último dia útil do mês.
    - Se a data de checkin, que é a data da entrada dos hóspedes na propriedade, acontecer até o último dia do mês, repassamos o valor para o proprietário no dia 15 do mês subsequente a data de checkin.
  ## Tarefa: Calcule a data de repasse do proprietário para uma reserva.
    - Use a estrutura disponibilizada no arquivo para solucionar o problema. (Linguagem Typescript, framework de test: Jest)
    - Escreva testes que garantam que a solução apresentada resolverá o problema proposto.
    - Estrutura de dados de uma reserva
      - Data de checkin
      - Data de checkout (Data de saída do hóspede da propriedade)
      - Nome da propriedade
      - Valor da reserva
    - Exemplos:
      - Dia útil:
        - Checkin: 15/04/2025
        - Data de repasse: 30/04/2025
      - Dia útil:
        - Checkin: 16/04/2025
        - Data de repasse: 15/05/2025
      - Feriado:
        - Checkin: 01/11/2024
        - Data de repasse: 18/11/2024

### Crie uma branch a partir da branch main e resolva o problema na branch criada. Depois que o problema for resolvido, abra um pull request para a branch main. 

### O código deve ser legível, claro e conciso. Implemente testes que testem todos os cenários possíveis.