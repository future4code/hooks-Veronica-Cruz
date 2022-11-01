Exercício 1
a) *Qual a sua opinião em relação a usar strings para representar os ids? 
Você concorda que seja melhor do que usar números?*

Gerar id como string é mais fácil de controlar.

b) *A partir de hoje vamos tentar isolar, ao máximo, as nossas lógicas dentro de funções. 
Isso vai deixar nosso código mais organizado e aumentar a facilidade da manutenção e refatoração. 
Dado isso, crie uma função para gerar um id.*

Criado na pasta services no arquivo IdGenerator.ts

===================================================================
Exercício 2
import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*
as string é uma tipagem que garante que o valor passado será uma string.

b) *Agora, crie a função que gere o token. 
Além disso, crie um type  para representar o input dessa função.*

===================================================================
Exercício 3


===================================================================
Exercício 4


===================================================================
Exercício 5


===================================================================
Exercício 6


====================================================================
Exercício 7


