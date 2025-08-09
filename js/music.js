var currentAudio = null;

function playAudio(audioId) {
  if (currentAudio !== null) {
    currentAudio.pause();
  }
  currentAudio = document.getElementById(audioId);
  currentAudio.play();
}

document.getElementById('co_gai_o_phuong_xa').addEventListener('click', function() {
  playAudio('co_gai_o_phuong_xa_audio');
});

document.getElementById('day_bien').addEventListener('click', function() {
  playAudio('day_bien_audio');
});

