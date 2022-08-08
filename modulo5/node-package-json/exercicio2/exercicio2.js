let operacoes = process.argv[2]
let n1 = Number(process.argv[3])
let n2 = Number(process.argv[4])

let resultado = "Resultado:"

switch (operacoes) {
    case "soma":
    resultado+= n1+n2
        break;
    case "sub":
       resultado+= n1-n2
        break;
    case "mult":
      resultado+= n1*n2
        break;
    case "div":
    resultado+= n1/n2
        break;
    default:
        console.log("Operação inválida")
}
console.log(resultado)