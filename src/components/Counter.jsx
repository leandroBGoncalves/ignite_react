import { useState }from 'react';

//React não fica o tempo todo monitorando as varieveis para renderizar em tela tada vez que elas sofrerem alguma mudança
//por isso precisamos importar o useState pois onde utilizarmos o use state o react ira monitorar as variaveis

//Conceito da imutabilidade, consiste no fato de que uma variavel ela nunca pode ser alterada, ela pode apenas receber um novo valor.

export function Counter() {
    const [counter, setCounter] = useState(0);
    function Increment(){
        setCounter(counter + 1);
    }

return (
    <div>
        <h2>{counter}</h2>
        <button type="button" onClick={Increment}>
            Increment
        </button>
    </div>
  );
}