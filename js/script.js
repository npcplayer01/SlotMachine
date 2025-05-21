const btn   = document.getElementById('playBtn');
const nums  = document.getElementById('numbers');
const msg   = document.getElementById('message');

btn.addEventListener('click', () => {
  // 2% de probabilidad de ganar
  const win = Math.random() < 0.02;
  let digits;

  if (win) {
    digits = [7,7,7];
  } else {
    // Generar 3 dígitos aleatorios != 7
    digits = Array.from({ length: 3 }, () => {
      let d;
      do { d = Math.floor(Math.random() * 10); } while (d === 7);
      return d;
    });
  }

  // Mostrar los dígitos
  nums.textContent = digits.join(' ');

  if (win) {
    msg.textContent = '¡Felicidades, ganaste! 🎉';
    msg.classList.add('win');
    msg.classList.remove('lose');
    // lanzar confetti 5 veces
    for (let i = 0; i < 5; i++) {
      setTimeout(() => {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.3 } });
      }, i * 400);
    }
  } else {
    msg.textContent = 'Lo siento, inténtalo de nuevo.';
    msg.classList.add('lose');
    msg.classList.remove('win');
  }
});
