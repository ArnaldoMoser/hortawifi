function enviarDados() {
    var dados = document.getElementById('dados').value;

    // Enviar dados para o ESP32
    fetch('http://ESP32-IP/receberDados', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: 'dados=' + encodeURIComponent(dados),
    })
    .then(response => response.text())
    .then(data => {
        console.log('Dados enviados com sucesso:', data);
    })
    .catch(error => {
        console.error('Erro ao enviar dados:', error);
    });
}
