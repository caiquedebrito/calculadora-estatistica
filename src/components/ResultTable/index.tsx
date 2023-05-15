import { useResult } from "@/hooks/useResult"

export const ResultTable = () => {
  const { result, } = useResult()
  
  return (
    <table>
        <thead>
          <tr>
            <td>Medida</td>
            <td>Valor</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Rol</td>
            <td>{ result?.rol?.join(" ") }</td>
          </tr>
          <tr>
            <td>Amplitude</td>
            <td>{ result?.amplitude }</td>
          </tr>
          <tr>
            <td>Média Aritmética</td>
            <td>{ result?.mediaAritmetica }</td>
          </tr>
          <tr>
            <td>Média Geométrica</td>
            <td>{ result?.mediaGeometrica }</td>
          </tr>
          <tr>
            <td>Média Harmônica</td>
            <td>{ result?.mediaHarmonica }</td>
          </tr>
          <tr>
            <td>Média Quadrática</td>
            <td>{ result?.mediaQuadratica }</td>
          </tr>
          <tr>
            <td>Mediana</td>
            <td>{ result?.mediana }</td>
          </tr>
          <tr>
            <td>Moda(s)</td>
            <td>{ result?.moda?.join(" ") }</td>
          </tr>
          <tr>
            <td>Desvio médio</td>
            <td>{ result?.desvioMedio }</td>
          </tr>
          <tr>
            <td>Variância</td>
            <td>{ result?.variancia }</td>
          </tr>
          <tr>
            <td>Desvio Padrão</td>
            <td>{ result?.desvioPadrao }</td>
          </tr>
          <tr>
            <td>Coeficiente de Variação</td>
            <td>{ result?.coeficienteVariacao }</td>
          </tr>
        </tbody>
      </table>
  )
}