Exercício 1
a) *O que são os `round` e `salt`? Que valores são recomendados para o `round`? Que valor você usou? Por quê?*

O round é o número de vezes que vai gerar um código diferente para cada criptografia gerada. O mais recomendado é de 10 ou 12. Para maior proteção dos dados.

O salt faz com que o hash gerado seja criptado gerando um novo código-chave para protegê-lo, acrescentando alguns bits que reforçam a segurança da senha do usuário.

b) *Instale o bcryptjs no seu projeto e comece criando a função generateHash(), que será responsável por **criptografar** uma string usando o bcryptjs.  ***** 
Função criada na pasta services.

c) *Agora, crie a função que verifique se uma string é correspondente a um hash, use a função `compare` do bcryptjs*
Função criada na pasta services.
===================================================================

Exercicio 2

a) *Para realizar os testes corretamente, qual deles você deve modificar primeiro? O cadastro ou o login? Justifique.*
Primeiro o cadastro pois os dadosdo usuário deve existir para serem criptografados ao fazer o login.

b) *Faça a alteração do primeiro endpoint*
Alteração na função signup no business

c) *Faça a alteração do segundo endpoint*
Alteração na função login no business

d) *No exercício da aula anterior, nós criamos o endpoint `user/profile`. Também temos que modificar esse endpoint devido à adição da criptografia? Justifique.*

