/*
 *   @project     A1_AVA2_UVA_2020_1
 *   @author      Mário Jorge (mariojgmaster@yahoo.com.br)
 *   @Git         MJRibeiroTriscal (https://github.com/mjRibeiroTriscal)
 */

let canSubmit = [
    namePass = false,
    emailPass = false,
    dataNascPass = false,
    estCivilPass = false,
]

let elemHasError = (condition, elemHasBorder) => {
    condition ? elemHasBorder.style.borderBottomColor = 'red' : elemHasBorder.style.borderBottomColor = 'blue'
}

function calcularIdade() {
    currentDate = new Date
    nascimento = new Date(document.getElementById("dataNasc").value)
    var idade = currentDate.getFullYear() - nascimento.getFullYear()
    if (new Date(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) <
        new Date(currentDate.getFullYear(), nascimento.getMonth(), nascimento.getDate()))
        idade--
        return idade
}

let elemSizeValid = (elem, tam, elemAddress) => {
    nameSize = document.getElementById(elem).value.length
    let condition = nameSize < tam
    elemHasError(condition, elemAddress)
}

let nameValidation = () => elemSizeValid('nome', 15, document.formUva.nome)

let emailValidation = () => {
    let hasSpecialChar = document.getElementById('email').value.includes('@')
    if (hasSpecialChar) {
        elemSizeValid('email', 10, document.formUva.email)
        canSubmit[emailPass] = true
    } else {
        elemHasError(true, document.formUva.email)
        canSubmit[emailPass] = false
    }
}

let dataNascValidation = () => {
    currentDate = new Date()
    let dt = document.getElementById("dataNasc").value
    data = new Date(dt)
    let dataCond = data <= currentDate
    if (dataCond) {
        document.querySelector("#masc").focus()
        canSubmit[dataNascPass] = true
    } else { canSubmit[dataNascPass] = false }
    elemHasError(!dataCond, document.formUva.dataNasc)
}

window.addEventListener("load", () => {

    // Lógica para página de Submit
    if (window.location.href.includes('submit.html')) {
        const url_string = window.location.search;
        const url = new URLSearchParams(url_string);
        const nome = url.get('nome')
        const email = url.get('email')
        const dataNasc = url.get('dataNasc')
        const sexo = url.get('sexo')
        const estCivil = url.get('estCivil')
        const analise = url.get('analise')
        const bancoDados = url.get('bancoDados')
        const desenvolvimento = url.get('desenvolvimento')
        const engenhariaSoftware = url.get('engenhariaSoftware')
        const redesComputadores = url.get('redesComputadores')
        let dataVal = ''
        if (dataNasc != '') {
            let aux = dataNasc.split('-')
            dataVal = `${aux[2]}/${aux[1]}/${aux[0]}`
        }
        let valorSexo = []
        sexo == 'M' ? valorSexo = 'Masculino' : valorSexo = 'Feminino'
        let listAreasInteresse = []
        analise == 'on' ? listAreasInteresse.push('Analise') : 0
        bancoDados == 'on' ? listAreasInteresse.push('Banco de Dados') : 0
        desenvolvimento == 'on' ? listAreasInteresse.push('Desenvolvimento') : 0
        engenhariaSoftware == 'on' ? listAreasInteresse.push('Engenharia de Software') : 0
        redesComputadores == 'on' ? listAreasInteresse.push('Redes de Computadores') : 0
        document.getElementById('nome').innerHTML = nome
        document.getElementById('email').innerHTML = email
        document.getElementById('dataNasc').innerHTML = dataVal
        document.getElementById('sexo').innerHTML = valorSexo
        document.getElementById('estCivil').innerHTML = estCivil
        document.getElementById('areasInteresse').innerHTML = listAreasInteresse.join(', ')
    }

})

let submeterForm = () => {
    // Validação Nome
    nameValidation()
        // Validação E-mail
    emailValidation()
        // Validação Data de Nascimento
    dataNascValidation()
        // Validação Estado Civil
    var radios = document.getElementsByName("estCivil");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            if (radios[i].value == 'Solteiro') {
                if (document.getElementById("dataNasc").value != "") {
                    if (calcularIdade() <= 15) {
                        elemHasError(true, document.formUva.dataNasc)
                        canSubmit[estCivilPass] = false
                        canSubmit[dataNascPass] = false
                    } else {
                        elemHasError(false, document.formUva.dataNasc)
                        canSubmit[estCivilPass] = true
                        canSubmit[dataNascPass] = true
                    }
                }
            }
        }
    }
    console.log('canSubmit: ' + JSON.stringify(canSubmit))
        // Validação Submit
    if (canSubmit.includes(false)) {
        console.log('Não vai passar!');
    } else {
        console.log('Vai passar!')
    }

    // document.formUva.submit()
}