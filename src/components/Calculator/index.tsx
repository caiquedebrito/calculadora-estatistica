import { useRef, useState } from "react"
import styles from "./styles.module.css"
import { useResult } from "@/hooks/useResult"
import { ToggleButton } from "../ToggleButton"
import { calculatorWithClasses } from "@/utils/CalculatorWithClasses"
import { calculatorWithoutClasses } from "@/utils/CalculatorWithoutClasses"

const permitedKeys = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "*", " "]


export const Calculator = () => {
  const { setResult } = useResult()
  const [isUsingClasses, setIsUsingClasses] = useState(false)
  const panelRef = useRef<HTMLTextAreaElement>(null)

  function handleOnSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const panel = panelRef.current?.value
    if (!panel) return
    
    if (isUsingClasses) {
      calculatorWithClasses.calculate(panel, setResult)
      return
    } 

    calculatorWithoutClasses.calculate(panel, setResult)
  }

  function cleanPanel() { panelRef.current!.value = ""; setResult({}); calculatorWithClasses.clean(); calculatorWithoutClasses.clean() }

  return (
    <div className={styles.container}>
      <form onSubmit={handleOnSubmit}>

        <textarea name="panel" id={styles.panel} cols={50} rows={10} ref={panelRef} ></textarea>

        <div id={styles.controls}>
          <div>
            <button id={styles.calculateButton} type="submit">Calcular</button> 
            <button onClick={cleanPanel}>Limpar</button>
          </div>

          <div>
            <p>Usar classes</p>
            <ToggleButton label="Usar classes" toggled={false} callback={setIsUsingClasses}/>

          </div>

        </div>
      </form>
    </div>
  )
}