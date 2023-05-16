import { Result } from "@/Contexts/ResultContext";
import { Dispatch, SetStateAction } from "react";

type Classes = {
  limiteInferior: number,
  limiteSuperior: number,
  frequencia: number
}

export class CalculatorWithClasses {
  private classesArray: Classes[] = []
  private frequencyCount = 0

  calculate(panel: string, setResult: Dispatch<SetStateAction<Result | undefined>>) {
    this.handleValues(panel)
    this.countFrequency()
    const media = this.calculateMedia()
    const mediana = this.calculateMediana()
    const moda = this.calculateModa({ media, mediana })
    const desvioMedio = this.calculateDesvioMedio(media)
    const variancia = this.calculateVarianca(media)
    const desvioPadrao = this.calculateDesvioPadrao(variancia)
    const coeficienteVariacao = this.calculateCoeficienteVariacao(desvioPadrao, media)

    setResult({
      mediaAritmetica: media,
      mediana,
      moda,
      desvioMedio,
      desvioPadrao,
      variancia,
      coeficienteVariacao
    })
  }

  clean() {
    this.classesArray = []
    this.frequencyCount = 0
  }

  private calculateVarianca(media: number) {
    return this.classesArray.reduce((previousValue, currentValue) => previousValue + Math.pow(((currentValue.limiteInferior + currentValue.limiteSuperior) / 2) - media, 2)*currentValue.frequencia, 0) / this.frequencyCount
  }

  private calculateDesvioPadrao(variancia: number) {
    return Math.sqrt(variancia)
  }

  private calculateCoeficienteVariacao(desvioPadrao: number, media: number) {
    return (desvioPadrao / media) * 100
  }

  private handleValues(panel: string) {
    panel.split(" ").map(value => value.split("*")).map(cls => {
      const [limiteInferior, limiteSuperior] = cls[0].split("-")
      this.classesArray.push({ limiteInferior: Number(limiteInferior), limiteSuperior: Number(limiteSuperior), frequencia: Number(cls[1]) })
    })
  }

  private countFrequency() {
    this.frequencyCount = this.classesArray.reduce((previousValue, currentValue) => previousValue + currentValue.frequencia, 0)
  }

  private calculateMedia() {
    const quantidade = this.classesArray.reduce((previousValue, currentValue) => previousValue + ((currentValue.limiteInferior + currentValue.limiteSuperior) / 2)*currentValue.frequencia, 0)

    return quantidade / this.frequencyCount
  }

  private calculateMediana() {
    // Cálculo da mediana
    const n = this.frequencyCount / 2
    let frequenciaAc = 0
    let classeMediana = {} as Classes

    for (const classe of this.classesArray) {
      frequenciaAc += classe.frequencia

      if (frequenciaAc >= n) {
        classeMediana = classe
        break
      }
    }

    frequenciaAc -= classeMediana.frequencia

    const amplituteMedia = classeMediana.limiteSuperior - classeMediana.limiteInferior
    const limiteInferior = classeMediana.limiteInferior
    const frequenciaMd = classeMediana.frequencia
     
    return (limiteInferior + (n - frequenciaAc) * amplituteMedia / frequenciaMd)
  }

  private calculateModa({ media, mediana }: { media: number, mediana: number }) {
    // Cálculo da moda: fórmula de Pearson
    return [3*mediana - 2*media]
  }

  private calculateDesvioMedio(media: number) {
    return this.classesArray.reduce((previousValue, currentValue) => previousValue + Math.abs(((currentValue.limiteInferior + currentValue.limiteSuperior) / 2) - media)*currentValue.frequencia, 0) / this.frequencyCount
  }

}

export const calculatorWithClasses = new CalculatorWithClasses()