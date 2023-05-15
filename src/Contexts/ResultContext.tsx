import { Dispatch, ReactElement, SetStateAction, createContext, useState } from "react";

export type Result = {
  rol?: number[],
  amplitude?: number,
  mediaAritmetica?: number,
  mediaGeometrica?: number,
  mediaHarmonica?: number,
  mediaQuadratica?: number,
  mediana?: number,
  moda?: number[],
  desvioMedio?: number,
  variancia?: number,
  desvioPadrao?: number,
  coeficienteVariacao?: number,
}

type ResultContextType = {
  result: Result | undefined,
  setResult: Dispatch<SetStateAction<Result | undefined>>
}

export const ResultContext = createContext({} as ResultContextType)

export function ResultProvider({ children }: { children: ReactElement }) {
  const [result, setResult] = useState<Result>()

  return (
    <ResultContext.Provider value={{ result, setResult }}>
      { children }
    </ResultContext.Provider>
  )
}