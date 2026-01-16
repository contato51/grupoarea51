// Inicialização de Ícones
lucide.createIcons();

// Gráfico de Crescimento //  
const ctx = document.getElementById('growthChart').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(58, 131, 60, 0.25)');
gradient.addColorStop(1, 'rgba(58, 131, 60, 0)');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '2018', '2021', '2024', '2025'],
        datasets: [{
            label: 'Performance',
            data: [5, 15, 12, 35, 48],
            borderColor: '#1a1a1a', // Linha preta minimalista
            borderWidth: 2,
            pointRadius: 6,
            pointBackgroundColor: '#fff',
            pointBorderColor: '#22c55e', // Borda do ponto verde
            pointBorderWidth: 3,
            fill: false,
            tension: 0, // Linhas retas estilo "arquitetura"
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { 
                grid: { display: false },
                ticks: { color: '#999', font: { size: 10 } }
            },
            y: { display: false }
        }
    }
});

// Scroll Suave
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', e => {
        if (link.hash !== "") {
            e.preventDefault();
            const target = document.querySelector(link.hash);
            if (target) {
                window.scrollTo({
                    top: target.offsetTop - 80,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Função para aplicar a máscara de telefone
const handlePhone = (event) => {
  let input = event.target;
  input.value = phoneMask(input.value);
}

const phoneMask = (value) => {
  if (!value) return "";
  value = value.replace(/\D/g, ''); // Remove tudo que não é número
  value = value.replace(/(\d{2})(\d)/, "($1) $2"); // Coloca parênteses no DDD
  value = value.replace(/(\d{5})(\d)/, "$1-$2"); // Coloca o hífen no quinto dígito
  return value;
}

// Aplica a função ao campo de telefone
const telInput = document.querySelector('input[name="telefone"]');
if (telInput) {
    telInput.addEventListener('keyup', (event) => handlePhone(event));
}