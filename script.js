// Reemplaza tu código actual de control de música con este:

let audioEnabled = false;
let musicReady = false;
const backgroundMusic = new Audio('linda_muchachita.mp3');
backgroundMusic.volume = 0.7;
backgroundMusic.loop = true;

// Cargar la música anticipadamente
backgroundMusic.load().then(() => {
  musicReady = true;
}).catch(error => {
  console.error("Error al cargar música:", error);
});

// Habilitar audio con primer clic
document.body.addEventListener('click', function enableAudio() {
  if (!audioEnabled) {
    audioEnabled = true;
    showMusicInfo("Audio habilitado - Haz clic en el botón de música", 2000);
  }
}, { once: true });

// Control de música mejorado
musicControl.addEventListener('click', async function() {
  if (!audioEnabled) {
    showMusicInfo("Primero haz clic en cualquier parte de la página", 2000);
    return;
  }
  
  if (!musicReady) {
    showMusicInfo("La música aún no está lista", 2000);
    return;
  }

  try {
    if (backgroundMusic.paused) {
      await backgroundMusic.play();
      musicControl.innerHTML = '<i class="fas fa-pause"></i>';
      musicControl.title = "Pausar música";
      showMusicInfo("Reproduciendo: Linda Muchachita");
    } else {
      backgroundMusic.pause();
      musicControl.innerHTML = '<i class="fas fa-music"></i>';
      musicControl.title = "Reproducir música";
      showMusicInfo("Música pausada", 2000);
    }
  } catch (error) {
    console.error("Error al controlar música:", error);
    showMusicInfo(`Error: ${error.message}`, 3000);
  }
});