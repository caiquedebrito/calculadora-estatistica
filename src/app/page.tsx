"use client";
import styles from './page.module.css'
import { Calculator } from '@/components/Calculator';
import { ResultTable } from '@/components/ResultTable';
import { ResultProvider } from '@/Contexts/ResultContext';


export default function Home() {  

  return (
    <ResultProvider>
      <main className={styles.main}>
        <h1>Calculadora Estatística</h1>
        <Calculator />
        <ResultTable />
      </main>
    </ResultProvider>
  )
}
