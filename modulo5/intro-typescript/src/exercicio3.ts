// function checaAnoBissexto(ano) {
//     const cond1 = ano % 400 === 0
//     const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
//     return cond1 || cond2
//  }

function checaAnoBissexto(ano: number) {
    const cond1 = ano % 400 === 0
    const cond2 = (ano % 4 === 0) && (ano % 100 !== 0)
    return console.log(cond1 || cond2)
 }
checaAnoBissexto(2040)