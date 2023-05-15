import { Result } from "@/Contexts/ResultContext"
import { Dispatch, SetStateAction } from "react"

class CalculatorWithoutClasses {
  private numbers: number[] = []

  calculate(panel: string, setResult: Dispatch<SetStateAction<Result | undefined>>) {
    this.handleValues(panel)
    const rol = this.numbers.sort((a, b) => a - b)
    const amplitude = this.calculateAmplitute(rol)
    const mediaAritmetica = this.calculateMedia()
    const mediaGeometrica = this.calculateMediaGeometrica()

    const mediaHarmonica = this.calculateMediaHarmonica()

    const mediaQuadratica = this.calculateMediaQuadratica()

    const mediana = this.calculateMediana(rol)

    const moda = this.calculateModa(rol)

    const desvioMedio = this.calculateDesvioMedio(mediaAritmetica)

    const variancia = this.calculateVariancia(mediaAritmetica)

    const desvioPadrao = this.calculateDesvioPadrao(variancia)
    
    const coeficienteVariacao = this.calculateCoeficienteVariacao(desvioPadrao, mediaAritmetica)

    setResult({
      rol,
      amplitude,
      mediaAritmetica,
      mediaGeometrica,
      mediaHarmonica,
      mediaQuadratica,
      mediana,
      moda,
      desvioMedio,
      variancia,
      desvioPadrao,
      coeficienteVariacao
    })
  }

  private calculateAmplitute(rol: number[]) {
    return rol[rol.length - 1] - rol[0]
  }

  private calculateMedia() {
    return this.numbers.reduce((a, b) => a + b) / this.numbers.length
  }

  private calculateMediaGeometrica() {
    return Math.pow(this.numbers.reduce((a, b) => a * b), 1 / this.numbers.length)
  }

  private calculateMediaHarmonica() {
    return this.numbers.length / this.numbers.reduce((a, b) => 1 / a + 1 / b)
  }

  private calculateMediaQuadratica() {
    return Math.sqrt(this.numbers.reduce((a, b) => a + Math.pow(b, 2)) / this.numbers.length)
  }

  private calculateMediana(rol: number[]) {
    return rol.length % 2 === 0
      ? (rol[rol.length / 2 - 1] + rol[rol.length / 2]) / 2 : rol[Math.floor(rol.length / 2)]
  }

  private calculateModa(rol: number[]) {
    // // calculo da moda
    let freq = {} as any
    let moda: number[] = []

    for (let i = 0; i < rol.length; i++) {
      let num = rol[i]
      freq[num] = freq[num] ? freq[num] + 1 : 1
    }

    let maxFreq = 0
    for (let key in freq) {
      if (freq[key] > maxFreq) {
        moda = [Number(key)]
        maxFreq = freq[key]
      } else if (freq[key] === maxFreq) {
        moda.push(Number(key))
      }
    }

    return moda
  }

  private calculateDesvioMedio(media: number) {
    return this.numbers.reduce((a, b) => a + Math.abs(b - media), 0) / this.numbers.length
  }

  private calculateVariancia(media: number) {
    return this.numbers.reduce((a, b) => a + Math.pow(b - media, 2), 0) / this.numbers.length
  }

  private calculateDesvioPadrao(variancia: number) {
    return Math.sqrt(variancia)
  }

  private calculateCoeficienteVariacao(desvioPadrao: number, media: number) {
    return (desvioPadrao / media) * 100
  }


  private handleValues(panel: string) {
    panel.split(" ").map(number => {

      if (number.includes("*")) {
        const [value, frequency] = number.split("*")

        for (let i = 0; i < Number(frequency); i++) {
          this.numbers.push(Number(value))
        }

      } else {
        this.numbers.push(Number(number))
      }

    })

    console.log(this.numbers)
  }
}

export const calculatorWithoutClasses = new CalculatorWithoutClasses()