const toggleBtn = document.getElementById('theme-toggle');
const formCadastro = document.getElementById('formulario-de-cadastro');

// Aplica o tema salvo
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-mode');
    toggleBtn.textContent = 'Tema claro ☀️';
} else {
    toggleBtn.textContent = 'Tema escuro 🌙';
}

// Alterna tema ao clicar
toggleBtn.addEventListener('click', (event) => {
    event.preventDefault();
    document.body.classList.toggle('dark-mode');
    if (document.body.classList.contains('dark-mode')) {
        localStorage.setItem('theme', 'dark');
        toggleBtn.textContent = 'Tema claro ☀️';
    } else {
        localStorage.setItem('theme', 'light');
        toggleBtn.textContent = 'Tema escuro 🌙';
    }
});

// ✅ Validação e redirecionamento após cadastro
if (formCadastro) {
    formCadastro.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede envio por padrão

        const senha = document.getElementById('cadastro-senha').value;
        const confirmacao = document.getElementById('senha-confirmacao').value;

        if (senha !== confirmacao) {
            alert('As senhas não coincidem. Tente novamente.');
        } else {
            // Aqui você poderia salvar os dados (opcional)
            // Ex: localStorage.setItem('usuario', JSON.stringify({ nome, email }));

            alert('Cadastro realizado com sucesso!');
            window.location.href = 'login.html'; // Redireciona para a página de login
        }
    });
}
