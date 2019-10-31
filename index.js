function scrolling() {
  if (document.body.scrollTop > 15 || document.documentElement.scrollTop > 15) {
    document.getElementById('arrow-button').style.display = 'block';
  }
  else {
    document.getElementById('arrow-button').style.display = 'none';
  }
};

window.onscroll = function () {
  scrolling()
};

function goUp() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};
