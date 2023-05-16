let num = window.document.querySelector('input#num')
let lista = window.document.querySelector('select#lista')
let res = window.document.querySelector('div#res')
let valores = []

function forNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function naList(n, list) {
    if (list.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (forNumero(num.value) && !naList(num.value, valores)) {
        valores.push(Number(num.value))
        let item = window.document.createElement('option')
        item.text = `-> ${num.value} foi adicionado `
        lista.appendChild(item)
        res.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista')
    }
    num.value = ''
    num.focus()
}

function finalizar () {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0

        for (let pos in valores) {
            soma += valores[pos]
            if (valores[pos] > maior) {
                maior = valores[pos]
            } else {
                menor = valores[pos]
            }
        }
        media = soma / total

        res.innerHTML = ''
        res.innerHTML += `<br>-> ${total} números cadastrados.</br>`
        res.innerHTML += `<br>-> O maior valor da lista é ${maior}.</br>`
        res.innerHTML += `<br>-> O menor valor da lista é ${menor}.</br>`
        res.innerHTML += `<br>-> A soma de todos os valores é ${soma}.</br>`
        res.innerHTML += `<br>-> A média de todos os valores é ${media}.</br>`
    }
}

/*
1- adciona valores no select
    se tiver algum valor existente ou maior(valor invalido ou já existente)...
    se não: adiciona em um vetor

2- temos ao todo x numeros cadastras
3- o maior valor informado é x
4- somando todos os valores temo x
5- a média dos valores é x

7- se adicionar outro valor depois, ele some e adciona com os demais
*/