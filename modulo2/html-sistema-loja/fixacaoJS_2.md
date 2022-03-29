```function calculaPrecoTotal(quantidade) {
let precoMenor = 1.00
let precoMaior = 1.30
if(quantidade >= 12) {
  return quantidade * precoMenor
} else {
  return quantidade * precoMaior
}
}```