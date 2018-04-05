/**
 * 4.1
 */
const cavaleiro = [1.5, 1.4, 1.3, 1.2, 1.1]
const dificuldade = [50, 55, 60, 70, 75, 80, 85, 90, 95, 100, 110, 120, 0]

/**
 * 4.2
 */
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

// const tempoBatalha = c => c.reduce((a, b, i) => a + dificuldade[i] / b.reduce((a, b) => a + b, 0), 0)
