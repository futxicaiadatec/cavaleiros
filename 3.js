const aux = []

const tabela = []
for (let i = 0; i < 7; i++) {
  const linha = []
  for (let j = 0; j < 7; j++) {
    linha.push({
      linha: i,
      coluna: j,
      jaPasseiAqui: false,
      caminho: [],
      dom: document.getElementById(`linha-${i}_coluna-${j}`)
    })
  }
  tabela.push(linha)
}
const entrada = tabela[3][3]
entrada.dom.innerText = 'o'
entrada.jaPasseiAqui = true
entrada.caminho.push(entrada)
aux.push(entrada)

function vizinhos ({linha: i, coluna: j}) {
  const obj = [
    {
      coluna: i - 1,
      linha: j
    },
    {
      coluna: i,
      linha: j + 1
    },
    {
      coluna: i + 1,
      linha: j
    },
    {
      coluna: i,
      linha: j - 1
    }
  ]

  return obj.filter(e => e.coluna < 7)
      .filter(e => e.linha < 7)
      .filter(e => e.coluna > -1)
      .filter(e => e.linha > -1)
}
/**
 * 3.1
 */
function coleraProfunda () {
  const lastAux = aux.pop()
  lastAux.dom.innerText = '#'
  lastAux.jaPasseiAqui = true

  const neighborLastAux = vizinhos(lastAux).map(
    e => tabela[e.coluna][e.linha]
  ).filter(
    e => !e.jaPasseiAqui
  )

  neighborLastAux.forEach(function (e) {
    e.dom.innerText = '*'
    e.caminho = [...lastAux.caminho]
    e.caminho.push(e)
  })
  aux.push(...neighborLastAux)
}
/**
 * 3.3
 */
const xua = new Queue()
xua.push(entrada)

function meteoroPegasus () {
  const firstXua = xua.shift()
  firstXua.dom.innerText = '#'
  firstXua.jaPasseiAqui = true

  const neighborFirstXua = vizinhos(firstXua).map(
    e => tabela[e.coluna][e.linha]
  ).filter(
    e => !e.jaPasseiAqui
  )

  neighborFirstXua.forEach(function (e) {
    e.dom.innerText = '*'
    e.caminho = [...firstXua.caminho]
    e.caminho.push(e)
  })
  xua.push(...neighborFirstXua)
}

/**
 * 3.4
 */
const mapa = []
for (let i = 0; i < 7; i++) {
  const linha = []
  for (let j = 0; j < 7; j++) {
    linha.push({
      linha: i,
      coluna: j,
      custo: Number(document.getElementById(`l${i}c${j}`).childNodes[0].value),
      caminho: [],
      custoCaminho: Infinity,
      dom: document.getElementById(`l${i}c${j}`)
    })
  }
  mapa.push(linha)
}

const fila = new Queue()

mapa[3][3].caminho.push(mapa[3][3])
mapa[3][3].custoCaminho = 30

fila.push(mapa[3][3])

function meteoroPegasusMaisEsperto () {
  const firstFila = fila.shift()

  const neighborFirstFila = vizinhos(firstFila).map(
    e => mapa[e.coluna][e.linha]
  ).filter(
    e => e.custoCaminho > firstFila.custoCaminho + e.custo
  ).map(e => {
    e.caminho = [...firstFila.caminho]
    e.caminho.push(e)
    e.custoCaminho = firstFila.custoCaminho + e.custo

    return e
  })

  fila.push(...neighborFirstFila)
}

// conteúdo inapropriado
const updateMapa = e => {
  const j = e.target.parentElement.cellIndex
  const i = e.target.parentNode.parentNode.rowIndex
  mapa[i][j].custo = Number(e.target.value)
}
Array.from(document.getElementsByTagName('table')[1].querySelectorAll('input[type="number"]')).forEach(e => {
  e.onchange = updateMapa
})
document.getElementById('l3c3').childNodes[0].onchange = e => {
  mapa[3][3].custo = Number(e.target.value)
  mapa[3][3].custoCaminho = Number(e.target.value)
}
