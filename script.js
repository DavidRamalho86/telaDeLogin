function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

        if (username === 'david' && password === '123') {
        alert('Login bem-sucedido!');
    } else {
        alert('Credenciais inválidas. Tente novamente.');
    }
}