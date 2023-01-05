const fontEl = document.getElementById('text');
document.getElementById('font-size-control').addEventListener('input', function () {
  fontEl.style.fontSize = this.value + 'px';
});
