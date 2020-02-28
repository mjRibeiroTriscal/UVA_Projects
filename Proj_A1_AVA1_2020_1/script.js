/*
*   @project     A1_AVA1_UVA_2020_1
*   @author      Mário Jorge (mariojgmaster@yahoo.com.br)
*   @Git         MJRibeiroTriscal (https://github.com/mjRibeiroTriscal)
*/

window.addEventListener("load", () => {
    // Máscara Telefone / Celular
    let elem = document.getElementById('tel')
    elem.addEventListener('input', () => {
        let telNum = elem.value.replace(/\D/g, "")
        telNum.length >= 12 ? telNum = telNum.replace(/^(\d\d)(\d\d)(\d)(\d{4})(\d{4}).*/, "+$1 ($2) $3 $4-$5") :
        telNum.length >= 10 ? telNum = telNum.replace(/(\d\d)(\d)(\d{4})(\d{4})/, "($1) $2 $3-$4") :
        telNum.length > 8 ? telNum = telNum.replace(/(\d)(\d{4})(\d{4})/, "$1 $2-$3") :
        telNum = telNum.replace(/(\d{4})(\d{4})/, "$1-$2")
        elem.value = telNum
        return telNum
    })
    // Máscara CPF
    let cpf = document.getElementById('cpf')
    cpf.addEventListener('input', () => {
        let cpfNum = cpf.value.replace(/\D/g, "")
        cpfNum = cpfNum.replace(/^(\d{3})(\d{3})(\d{3})(\d{2}).*/, "$1.$2.$3-$4")
        cpf.value = cpfNum
        return cpfNum
    })
    // Máscara RG
    let rg = document.getElementById('rg')
    rg.addEventListener('input', () => {
        let rgNum = rg.value.replace(/\D/g, "")
        rgNum = rgNum.replace(/^(\d{2})(\d{3})(\d{3})(\d{1}).*/, "$1.$2.$3-$4")
        rg.value = rgNum
        return rgNum
    })
    // Array que contem os elementos (li) da progress bar
    let step = [ document.getElementById('stp1'), document.getElementById('stp2'), document.getElementById('stp3') ]
    step[0].setAttribute("class", "active")
    let button = document.getElementById('next')
    let aux = 1 // LEMBRETE: Usar no controle de páginas
    // Start da função de paginação
    pagination(aux)
    // Evento que 'escuta' o butão 'Next' e avança os steps da progress bar
    button.addEventListener("click", () => {
        for (let a = 0; a <= aux; a++) step[a] != undefined || step[a] != null ? step[a].setAttribute("class", "active") : 0
        aux <= 2 ? aux++ : 0
        console.log('aux: ', aux)
        pagination(aux)
    })
    // Evento que 'escuta' o butão 'Back' e volta os steps da progress bar
    document.getElementById('back').addEventListener("click", () => {
        aux > 1 ? aux-- : 0
        for (let a = 3; a >= aux; a--) step[a] != undefined || step[a] != null ? step[a].classList.remove("active") : 0
        console.log('aux: ', aux)
        pagination(aux)
    })
})
// Função de paginação com as regras de tela
function pagination(pagina){
    switch(pagina){
        case 1:
            document.getElementById('title').innerHTML = 'Informações Pessoais'
            document.getElementById('personalInfo').style.display = 'block'
            document.getElementById('contactInfo').style.display = 'none'
            document.getElementById('accountInfo').style.display = 'none'
            document.getElementById('back').classList.add('desapareca')
            document.getElementById('next').classList.add('margStart')
            document.getElementById('next').innerHTML = 'Próximo'
            break
        case 2:
            document.getElementById('title').innerHTML = 'Informações de Contato'
            document.getElementById('personalInfo').style.display = 'none'
            document.getElementById('contactInfo').style.display = 'block'
            document.getElementById('accountInfo').style.display = 'none'
            document.getElementById('back').classList.remove('desapareca')
            document.getElementById('next').classList.remove('margStart')
            document.getElementById('back').innerHTML = 'Anterior'
            document.getElementById('next').innerHTML = 'Próximo'
            break
        case 3:
            document.getElementById('title').innerHTML = 'Informações de Conta'
            document.getElementById('personalInfo').style.display = 'none'
            document.getElementById('contactInfo').style.display = 'none'
            document.getElementById('accountInfo').style.display = 'block'
            document.getElementById('next').innerHTML = 'Concluir'
            break
    }
}
