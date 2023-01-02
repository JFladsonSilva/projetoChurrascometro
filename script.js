let inputAdultos = document.getElementById('adultos');
let inputCriancas = document.getElementById('criancas');
let inputduracao = document.getElementById('duracao');
let resultado = document.getElementById('resultado')
let button = document.querySelector('#button')

const calcular = () => {
    console.log('testandooo');
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputduracao.value;
    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<p>${qtdTotalCarne}g de Carne</p>`
    resultado.innerHTML += `<p>${qtdTotalCerveja}ml de Cerveja</p>`
    resultado.innerHTML += `<p>${qtdTotalBebidas}ml de Bebidas</p>`


}

const carnePP = (duracao) => {
    if(duracao >= 6) {
        return 650;
    }
    return 400;
}

const cervejaPP = (duracao) => {
    if(duracao >= 6) {
        return 2000;
    }
    return 1200;
}

const bebidasPP = (duracao) => {
    if(duracao >= 6) {
        return 1500;
    }
    return 1000;
}
button.addEventListener('click', calcular)