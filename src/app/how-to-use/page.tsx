
export default function HowToUsePage() {

  return (
    <main>
      <h1>Como usar</h1>
      <p>Essa página mostra como utilizar a calculadora estatística.</p>
      <br />
      <h2>Cálculo sem intervalos de classes</h2>
      <ol type="1">
        <li>Desative, se está ativado, a botão 'Usar classes'</li>
        <li>Digite o conjunto de números que serão calculados.</li>
        <ul>
          <li>Caso os números estejam em uma tabela com frequência, você poderá digitar a frequência do elemento assim: 4*2 (o elemento 4 tem frequência 2)</li>
        </ul>
        <li>Sempre deixe um espaço em branco entre cada elemento para que o cálculo ocorra sem problemas</li>
        <li>Por fim, aperte o botão calcular.</li>
      </ol>
      <br />
      <h2>Cálculo com intervalos de classes</h2>
      <ol type="1">
        <li>Ativie, se está desativado, a botão 'Usar classes'</li>
        <li>Digite o conjunto de números que serão calculados.</li>
        <ul>
          <li>Para digitar uma classe e sua frequência digite assim: 2-4*5 (a classe de intervalo inferior 2 e intervalo superior 4 tem frequência igual a 5)</li>
        </ul>
        <li>Sempre deixe um espaço em branco entre cada elemento para que o cálculo ocorra sem problemas</li>
        <li>Por fim, aperte o botão calcular.</li>
      </ol>
    </main>
  )
}