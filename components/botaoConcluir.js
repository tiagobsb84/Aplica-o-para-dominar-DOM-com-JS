const BotaoConcluir = () => {
    const botaoConcluir = document.createElement('button');
    botaoConcluir.classList.add('check-button');
    botaoConcluir.innerHTML = "Concluir"

    botaoConcluir.addEventListener('click', concluirTarefa);

    return botaoConcluir
}

const concluirTarefa = (event) => {
    const buscarTag = event.target

    const finalizarConcluir = buscarTag.parentElement

    finalizarConcluir.classList.toggle('done');
}

export default BotaoConcluir;