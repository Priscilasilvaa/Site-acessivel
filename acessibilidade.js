
 // Função para alternar o tema
 function toggleTheme() {
    const body = document.body;
    if (body.classList.contains('padrao')) {
        body.classList.remove('padrao');
        body.classList.add('acess');
    } else {
        body.classList.remove('acess');
        body.classList.add('padrao');
    }
}