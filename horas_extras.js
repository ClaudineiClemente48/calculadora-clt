function fnHorasExtras(salario, horastrabalhadas, cargahoraria) {
    if(isNaN(salario) || isNaN(horastrabalhadas) || isNaN(cargahoraria)){
        return 'Todos os valores deverão ser numeros'    
    }
    if(salario < 0 || horastrabalhadas < 0 || cargahoraria < 0){
        return 'Todos os valores deverão ser positivos'    
    }
    let horasextras = 0
    
    if(salario < 0){
       return 'todos salario deem ser positivos'
    }
    if (horastrabalhadas > cargahoraria) {
        horasextras = (horastrabalhadas - cargahoraria) * salario
    }

    

    return horasextras
}
module.exports = fnHorasExtras