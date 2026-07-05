// PULSO — shared site script
(function () {
  const dateline = document.querySelector('.dateline');
  if (dateline) {
    const today = new Date();
    const formatted = today.toLocaleDateString('en-GB', {
      weekday: 'long',
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });
    dateline.textContent = formatted + ' · Maputo Edition';
  }
})();
