function toggleKey(index) {
  const descs = document.querySelectorAll('.description');
  descs.forEach((desc, i) => {
    if (i === index) {
      const isVisible = desc.classList.contains('visible');
      desc.classList.toggle('visible', !isVisible);
    } else {
      desc.classList.remove('visible');
    }
  });
}
