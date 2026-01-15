// Inicialização de Ícones
lucide.createIcons();

// Gráfico de Crescimento
const ctx = document.getElementById('growthChart').getContext('2d');
const gradient = ctx.createLinearGradient(0, 0, 0, 200);
gradient.addColorStop(0, 'rgba(58, 131, 60, 0.25)');
gradient.addColorStop(1, 'rgba(58, 131, 60, 0)');

new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['2015', '', '2020', '', '2025'],
        datasets: [{
            data: [12, 19, 28, 39, 46],
            borderColor: '#3a833c',
            borderWidth: 3.5,
            fill: true,
            backgroundColor: gradient,
            tension: 0.45,
            pointRadius: [0, 0, 5, 0, 8],
            pointBackgroundColor: '#3a833c',
            pointBorderColor: 'white',
            pointBorderWidth: 2
        }]
    },
    options: {
        responsive: true,
        plugins: { legend: { display: false } },
        scales: {
            x: { display: false },
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

