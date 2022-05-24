```function calculaNota(ex, p1, p2) {
    let exe = ex * 1
    let prov1 = p1 * 2
    let prov2 = p2 * 3   
let media = (exe+prov1+prov2)/6
  
    if(media >= 9){
        return "A"
    } else if (media < 9 && media >= 7.5){
        return "B"
    } else if (media < 7.5 && media >= 6){
        return "C"
    } else if (media < 6){
        return "D"
    }
  } ```