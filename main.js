/* メインビジュアルのメッセージ */
const texts = [
  'World Peace',
  'Paz mundial',
  'Pax mundi',
  'Världsfred',
  'Wereldvrede',
  'La paz mundial',
  'Paix mondiale',
  'Мир у всьому світі',
  'Мир во всем мире',
];
const switchText = document.getElementById('switch-text');
setInterval(() => {
  let rnd = Math.floor(Math.random() * texts.length);
  switchText.textContent = texts[rnd];
}, 1500);


