<Respostas:
 Exercício 3
  c) Explique, com as suas palavras, as diferenças entre as duas implementações>

  Inversão de dependências na função performAttack com o validator é útil pois podemos colocar qualquer personagem para ser validado quando utilizamos um input tipado com o Character que é a interface que contém as características do personagem.

<Exercicio 4 
 a) De qual das duas funções (validateCharacter ou performAttack)  deveremos criar um Mock nos próximos testes? Justifique.>

 A função performAttack. Como ela utiliza a validateCharacter, temos que criar um Mock dela.