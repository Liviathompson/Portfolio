// Mobile Menu Toggle
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.querySelector('i').classList.toggle('fa-bars');
    hamburger.querySelector('i').classList.toggle('fa-times');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        hamburger.querySelector('i').classList.add('fa-bars');
        hamburger.querySelector('i').classList.remove('fa-times');
    });
});

// Header scroll effect
window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Form submission
// Aguarda o carregamento completo da página antes de executar o código
document.addEventListener("DOMContentLoaded", function() {
    
    // Seleciona o formulário pelo ID
    const form = document.getElementById('form');

    // Adiciona um "ouvinte" para o evento de envio do formulário
    form.addEventListener('submit', function (e) {
        // 1. Impede o envio padrão do formulário (para não recarregar a página)
        e.preventDefault();

        // 2. Cria um objeto FormData para capturar todos os dados do formulário
        const formData = new FormData(form);
        const action = form.getAttribute('action'); // Pega o URL do FormSubmit do seu HTML

        // 3. Envia os dados em segundo plano usando a API Fetch
        fetch(action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json' // Pede uma resposta em formato JSON do servidor
            }
        })
        .then(response => {
            // 4. Verifica se o envio foi bem-sucedido
            if (response.ok) {
                // Se sim, mostra a sua mensagem de sucesso
                alert('Obrigada pela mensagem! Entrarei em contato em breve.');
                // E limpa o formulário
                form.reset();
            } else {
                // Se houve um erro no servidor, avisa o utilizador
                alert('Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.');
            }
        })
        .catch(error => {
            // 5. Se houve um erro de rede (ex: sem internet), também avisa o utilizador
            console.error('Erro na requisição:', error);
            alert('Não foi possível enviar a mensagem. Verifique sua conexão com a internet.');
        });
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Active navigation link based on scroll position
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (scrollY >= (sectionTop - 100)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});