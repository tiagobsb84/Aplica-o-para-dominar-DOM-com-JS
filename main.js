import BotaoConcluir from './components/botaoConcluir.js';
import BotaoDelete from './components/botaoDelete.js';

const criarTarefa = (event) => {
    event.preventDefault();

    const lista = document.querySelector('[data-list]')
    const input = document.querySelector('[data-form-input]');
    const valor = input.value

    const criarLista = document.createElement('li')
    criarLista.classList.add('task');

    const conteudo = `<p class="content">${valor}</p>`;

    const listas = criarLista.innerHTML = conteudo

    criarLista.appendChild(BotaoConcluir());
    criarLista.appendChild(BotaoDelete());
    lista.appendChild(criarLista);

    input.value = " "

}
const addButtom = document.querySelector('[data-form-button]');

addButtom.addEventListener('click', criarTarefa);