const BotaoDelete = () => {
    const botaoDelete = document.createElement('button');
    botaoDelete.innerText = "Delete";

    botaoDelete.addEventListener('click', deleteTarefa)
    return botaoDelete;
}

const deleteTarefa = (event) => {
    const buscarTagDelete = event.target;

    const finalizarDelete = buscarTagDelete.parentElement;

    finalizarDelete.remove()

    return buscarTagDelete;
}

export default BotaoDelete;