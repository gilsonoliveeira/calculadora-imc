function updatePeso(value){
    document.getElementById('pnum').value = value
}

function updateAltura(value) {
    let AlturaEmMetros= (value /100).toFixed(2)
    document.getElementById('anum').value = AlturaEmMetros
}

function calcular() {

    let peso = Number(pnum.value)
    let altura = Number(anum.value)
    let imc = peso / (altura * altura)
    let res = document.getElementById('res')


    // Alterna os Displays
    document.getElementById('peso').style.display = "none"
    document.getElementById('altura').style.display = "none"
    document.getElementById('h1').style.display = "none"
    document.getElementById('calcular').style.display = "none"
    document.getElementById('res').style.display = "block"

    res.innerHTML = ""
    

    if (imc < 18.5) {
        res.innerHTML = "Seu IMC é de " + imc.toFixed(2) + ". Você está abaixo do peso."
    }
    else if (imc >= 18.5 && imc <= 24.9) {
        res.innerHTML = "Seu IMC é de " + imc.toFixed(2) + ". Você está no peso ideal."
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        res.innerHTML = "Seu IMC é de " + imc.toFixed(2) + ". Você está com sobrepeso."
    }
    else if (imc >= 30.0 && imc <= 34.9) {
        res.innerHTML = "Seu IMC é de " + imc.toFixed(2) + ". Você está com obesidade grau I."
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        res.innerHTML = "Seu IMC é de " + imc.toFixed(2) + ". Você está com obesidade grau II (severa)."
    }
    else {
        res.innerHTML = "Seu IMC é de " + imc.toFixed(2) + ". Você está com obesidade mórbida (morbida)."
    }
}