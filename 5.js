const cavaleiro = [1.5, 1.4, 1.3, 1.2, 1.1]

let casas = [
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

/**
 * 5.1
 */
const quantasBatalhas = c => c.reduce((a, b) => a + b.length, 0)

/**
 * 5.2
 */
const haRepetido = c => c.some((e, i, c) => c.indexOf(e, c.indexOf(e) + 1) === -1 ? false : true)

/**
 * 5.3
 */
const moveCavaleiro = (casas, h, k, d) => casas.map(e => [...e]).map(
  (e, i) => e.filter(
    (_, j) => i !== h || j !== k
  )
).map(extendArray).map(
  (e, i) => e.sew(i === d ? casas[h][k] : null)
)

/**
 * 5.4
 */
 const moveCavaleiroRandom = function moveCavaleiroRandom (casas) {
   let casaOrigem
   while (casas[casaOrigem = Math.floor(casas.length * Math.random())].length === 1);
   const cavaleiroOrigem = Math.floor(casas[casaOrigem].length * Math.random())

   let casaDestino
   while (
     casas[casaDestino = Math.floor(casas.length * Math.random())].find(
       el => el === casas[casaOrigem][cavaleiroOrigem]
     ) || casas[casaDestino].length === 5);

  console.log(`casas[${casaOrigem}][${cavaleiroOrigem}] --> casas[${casaDestino}]`)

  return moveCavaleiro(casas, casaOrigem, cavaleiroOrigem, casaDestino)
 }
