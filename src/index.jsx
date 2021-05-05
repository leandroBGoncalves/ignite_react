//importo do react DOM o que vai ser renderizado no meu html

import { render } from 'react-dom';
import { App } from './App'

//aqui eu chamo a função render e no parametro infor dentro de qual elemento eu quero exibir em tela e dentro de qual ID
render(<App />, document.getElementById('root'))