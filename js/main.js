function buttonHover(x) {
  x.style.backgroundColor = "#49505F";
}

function buttonExit(x) {
  x.style.backgroundColor = "transparent";
}

function greenHover(x) {
  x.style.backgroundColor = "#449D44";
}

function greenExit(x) {
  x.style.backgroundColor = "#178A27";
}

function blueHover(x) {
  x.style.backgroundColor = "#31b0d5";
}

function blueExit(x) {
  x.style.backgroundColor = "#1686C1";
}

function grayHover(x) {
  x.style.backgroundColor = "#c9302c";
}

function grayExit(x) {
  x.style.backgroundColor = "#852406";
}

function readHover(x) {
  x.style.backgroundColor = "#e6e6e6";
}

function readExit(x) {
  x.style.backgroundColor = "white";
}

function contactHover(x) {
  x.style.backgroundColor = "white";
  x.style.color = "#262628";
}

function contactExit(x) {
  x.style.backgroundColor = "#262628";
  x.style.color = "white";
}

//parallax test

window.addEventListener('scroll', function (e){
  var scrolled = window.pageYOffset;

  const background = document.querySelector('.background');
  background.style.top = -(scrolled * 5) + 'px';
});
