import Link from "next/link";
import styles from "./styles.module.css"

export function Navigation() {

  return (
    <nav id={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/how-to-use">Como usar?</Link>
    </nav>
  )
}