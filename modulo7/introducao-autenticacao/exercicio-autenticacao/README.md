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

Criada a função no arquivo Authenticator.ts na pasta services e o type 
no arquivo User.ts na pasta models.
===================================================================
Exercício 3
Pronto, com essas três funções preparadas podemos criar o nosso endpoint. As informações dele são:

- *Verbo/Método*: POST
- *Path*: `/user/signup`

a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
Endpoint criado no controller e request.rest

b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
Alteração feita no arquivo UserBusiness.ts na pasta business.

c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*
Alteração feita no arquivo UserBusiness.ts na pasta business.
===================================================================
Exercício 4
a) Crie uma função que retorne as informações de um usuário a partir do email
Função criada no UserDatabase.ts na pasta data.

===================================================================
Exercício 5
Agora, vamos implementar o endpoint de login, com as seguintes especificações:

- *Verbo/Método*: POST
- *Path*: `/user/login`
- *Input:* O body da requisição deve ser

a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*
    endpoint criado no controller e request.rest

b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*
    Alterações feita no business
===================================================================
Exercício 6
criar uma função que recebe o token e devolve as informações do usuário salvas nele
const expiresIn = "1min";

const getData = (token: string): AuthenticationData => {
  const payload = jwt.verify(token, process.env.JWT_KEY as string) as any;
  const result = {
    id: payload.id,
  };
  return result;
};
a) *O que a linha `as any` faz? Por que precisamos usá-la ali?*
    ela tipa como podendo receber qualquer valor, seja number, string ou boolean
    precisamos usar porque senão o id não seria reconhecido como do tipo string
b) *Crie uma função que realize a mesma funcionalidade da função acima*
    criado no arquivo Authenticator.ts na pasta services.
====================================================================
Exercício 7
criar um endpoint que retorne as informações do usuário logado. As especificações dele estão abaixo:

- *Verbo/Método*: GET
- *Path*: `/user/profile`
- *Input:* Deve receber, nos headers, o token de autenticação:

a) *Comece criando uma função no data que retorne o usuário a partir do id*
    criado no userdatabase
b) *Crie o endpoint com as especificações passadas*
    endpoint criado no controller e request.rest