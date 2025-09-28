// A. Establece la fecha de tu cumpleaños (año, mes - 1, día)
// Importante: El mes en JavaScript va de 0 a 11 (enero es 0, diciembre es 11).
const birthday = new Date("2025-11-24T00:00:00"); // Ejemplo: 27 de septiembre de 2026
document.getElementById('birthday-date').textContent = birthday.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' });

// B. Función para actualizar la cuenta regresiva
function updateCountdown() {
    const now = new Date();
    let nextBirthday = new Date(birthday);
    
    // Si el cumpleaños de este año ya pasó, calcula el del próximo año
    if (now > nextBirthday) {
        nextBirthday.setFullYear(nextBirthday.getFullYear() + 1);
    }
    
    const timeDifference = nextBirthday - now;
    
    // Cálculo de días, horas, minutos y segundos
    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById('countdown');

    if (timeDifference < 0) {
        countdownElement.textContent = "¡Feliz Cumpleaños!";
        clearInterval(countdownInterval);
    } else {
        countdownElement.textContent = `Faltan ${days} días, ${hours} horas, ${minutes} minutos y ${seconds} segundos.`;
    }
}

// C. Actualiza la cuenta regresiva cada segundo
const countdownInterval = setInterval(updateCountdown, 1000);

// Llama a la función al inicio para evitar un retraso
updateCountdown();