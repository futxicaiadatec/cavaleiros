const cavaleiro = [1.5, 1.4, 1.3, 1.2, 1.1]
const dificuldade = [50, 55, 60, 70, 75, 80, 85, 90, 95, 100, 110, 120, 0]

let casas0 = [
  [cavaleiro[0]],
  [cavaleiro[1]],
  [cavaleiro[2]],
  [cavaleiro[3]],
  [cavaleiro[4]],
  [cavaleiro[0]],
  [cavaleiro[1]],
  [cavaleiro[2]],
  [cavaleiro[3]],
  [cavaleiro[4]],
  [cavaleiro[0]],
  [cavaleiro[1]],
  [
    cavaleiro[2], cavaleiro[3], cavaleiro[4], cavaleiro[0], cavaleiro[1],
    cavaleiro[2], cavaleiro[3], cavaleiro[4], cavaleiro[0], cavaleiro[1],
    cavaleiro[2], cavaleiro[3], cavaleiro[4]
  ]
]

function tempoBatalha (casas) {
  let tempo = 0
  for (let i = 0; i < casas.length; i++) {
    const dific = dificuldade[i]
    let somaCosmos = 0
    for (let j = 0; j < casas[i].length; j++) {
      somaCosmos += casas[i][j]
    }
    tempo += dific / somaCosmos
  }
  return tempo
}

const moveCavaleiro = (casas, h, k, d) => casas.map(e => [...e]).map(
  (e, i) => e.filter(
    (_, j) => i !== h || j !== k
  )
).map(extendArray).map(
  (e, i) => e.sew(i === d ? casas[h][k] : null)
)

 const moveCavaleiroRandom = function moveCavaleiroRandom (casas) {
   let casaOrigem
   while (casas[casaOrigem = Math.floor(casas.length * Math.random())].length === 1);
   const cavaleiroOrigem = Math.floor(casas[casaOrigem].length * Math.random())

   let casaDestino
   while (
     casas[casaDestino = Math.floor(casas.length * Math.random())].find(
       el => el === casas[casaOrigem][cavaleiroOrigem]
     ) || casas[casaDestino].length === 5);

  return moveCavaleiro(casas, casaOrigem, cavaleiroOrigem, casaDestino)
 }

/**
 * 6.1
 */
const darwin = []
for (let i = 0; i < 12; i++) {
  const casas = moveCavaleiroRandom(casas0)
  const tempo = tempoBatalha(casas)
  darwin.push({casas, tempo})
}
