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
    res.style.display = "block"

    let resultado = "";
    

    if (imc < 18.5) {
        resultado = "Seu IMC é de <strong>" + imc.toFixed(2) + "</strong>. Você está <strong>abaixo do peso</strong>."

    }
    else if (imc >= 18.5 && imc <= 24.9) {
        resultado = "Seu IMC é de <strong>" + imc.toFixed(2) + "</strong>. Você está no <strong>peso ideal</strong>."
    }
    else if (imc >= 25.0 && imc <= 29.9) {
        resultado = "Seu IMC é de <strong>" + imc.toFixed(2) + "</strong>. Você está com <strong>sobrepeso</strong>."
    }
    else if (imc >= 30.0 && imc <= 34.9) {
        resultado = "Seu IMC é de <strong> " + imc.toFixed(2) + "</strong>. Você está com <strong>obesidade grau I</strong>."
    }
    else if (imc >= 35.0 && imc <= 39.9) {
        resultado = "Seu IMC é de <strong>" + imc.toFixed(2) + "</strong>. Você está com <strong>obesidade grau II (severa)</strong>."
    }
    else {
        resultado = "Seu IMC é de <strong>" + imc.toFixed(2) + "</strong>. Você está com <strong>obesidade mórbida (morbida)</strong>."
    }

    document.getElementById('resultado').innerHTML = resultado;

        
}

function resetar() {
    res.style.display = "none"
    document.getElementById('peso').style.display = "block"
    document.getElementById('altura').style.display = "block"
    document.getElementById('h1').style.display = "block"
    document.getElementById('calcular').style.display = "block"

}