// Crie um função que receba uma string com o nome e outra string com uma data de nascimento (ex.: “24/04/1993”).
//A função deve separar o dia, o mês e ano e retornar uma string no seguinte formato: 

const pessoa = (nome: string, nascimento: string): string =>{
    const [dia, mes, ano]= nascimento.split("/")
    const frase: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
    return frase;
} 
        
    console.log(pessoa("Verônica", "03/07/1990"))