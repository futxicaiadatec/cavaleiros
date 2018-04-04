/**
 * 2.1
 */
const tabela = []
for (let i = 0; i < 7; i++) {
  const linha = []
  for (let j = 0; j < 7; j++) {
    linha.push({
      linha: i,
      coluna: j,
      jaPasseiAqui: false,
      dom: document.getElementById(`linha-${i}_coluna-${j}`)
    })
  }
  tabela.push(linha)
}

const entrada = tabela[3][3]
entrada.dom.innerText = 'o'
entrada.jaPasseiAqui = true

/**
 * 2.2
 */
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

console.dir(
  vizinhos(entrada).map(
    e => tabela[e.coluna][e.linha]
  )
)

const aux = []
aux.push(...vizinhos(entrada).map(e => tabela[e.coluna][e.linha]))

/**
 * 2.3
 */
function poprint () {
  setTimeout(function () {
    const toPrintNow = aux.pop()
    toPrintNow.dom.innerText += '*'

    aux.length !== 0 && poprint()
  }, 1000)
}
poprint()

/**
 * 2.5
 */
function coleraProfunda () {
  setTimeout(function () {
    const lastAux = aux.pop()
    lastAux.dom.innerText = '#'
    lastAux.jaPasseiAqui = true

    const lastAuxVizinhos = vizinhos(lastAux).map(e => tabela[e.coluna][e.linha])
    const lastAuxVizinhosNovos = lastAuxVizinhos.filter(e => !e.jaPasseiAqui)

    lastAuxVizinhosNovos.forEach(function (e) {
      e.dom.innerText = '*'
    })
    aux.push(...lastAuxVizinhosNovos)

    aux.length !== 0 && coleraProfunda()
  }, 100)
}
