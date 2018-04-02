/**
 * 1.0
 */
const vetor = new Array()

vetor.push({
  id: 'zero'
})
vetor.push({
  id: 'um'
})

console.log(JSON.stringify(vetor, null, 2))

vetor[0].depois = vetor[1]
vetor[1].depois = vetor[0]

/**
 * 1.3
 */
let entrada = [
  {
    id: 'a',
    tesouro: false,
    vizinhos: []
  },
  {
    id: 'b',
    tesouro: false,
    vizinhos: []
  },
  {
    id: 'c',
    tesouro: false,
    vizinhos: []
  },
  {
    id: 'd',
    tesouro: false,
    vizinhos: []
  },
  {
    id: 'e',
    tesouro: false,
    vizinhos: []
  },
  {
    id: 'f',
    tesouro: false,
    vizinhos: []
  },
  {
    id: 'g',
    tesouro: false,
    vizinhos: []
  },
  {
    id: 'h',
    tesouro: false,
    vizinhos: []
  },
  {
    id: 'i',
    tesouro: false,
    vizinhos: []
  }
]

entrada[0].vizinhos.push(entrada[1])
entrada[0].vizinhos.push(entrada[3])
entrada[1].vizinhos.push(entrada[0])
entrada[1].vizinhos.push(entrada[2])
entrada[2].vizinhos.push(entrada[1])
entrada[2].vizinhos.push(entrada[5])
entrada[3].vizinhos.push(entrada[0])
entrada[3].vizinhos.push(entrada[4])
entrada[4].vizinhos.push(entrada[3])
entrada[4].vizinhos.push(entrada[5])
entrada[4].vizinhos.push(entrada[7])
entrada[5].vizinhos.push(entrada[2])
entrada[5].vizinhos.push(entrada[4])
entrada[5].vizinhos.push(entrada[8])
entrada[6].vizinhos.push(entrada[7])
entrada[7].vizinhos.push(entrada[4])
entrada[7].vizinhos.push(entrada[6])
entrada[7].vizinhos.push(entrada[8])
entrada[8].vizinhos.push(entrada[7])
entrada[8].vizinhos.push(entrada[5])

entrada[Math.trunc(Math.random() * entrada.length)].tesouro = true

entrada = entrada[Math.trunc(Math.random() * entrada.length)]

/**
 * 1.4
 */
const div = document.getElementById('tabelando')

let table = ''
for (let i = 0; i < 3; i++) {
  table += '<tr>'
  for (let j = 0; j < 3; j++) {
    table += `<td> ${i + 1}${j + 1} </td>`
  }
  table += '</tr>'
}

div.innerHTML = '<table>' + table + '</table>'
