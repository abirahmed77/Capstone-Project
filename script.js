var index = 0;

function carousel() {
  var i;
  var x = document.getElementsByClassName("myslides");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  index++;

  if (index > x.length) {
    index = 1;
  }

  x[index - 1].style.display = "block";

  setTimeout(carousel, 2000);
}
carousel();

function carousel2() {
  var i;
  var x = document.getElementsByClassName("myslides2");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  index++;

  if (index > x.length) {
    index = 1;
  }

  x[index - 1].style.display = "block";

  setTimeout(carousel2, 2000);
}
carousel2();

function carousel3() {
  var i;
  var x = document.getElementsByClassName("myslides3");

  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }

  index++;

  if (index > x.length) {
    index = 1;
  }

  x[index - 1].style.display = "block";

  setTimeout(carousel3, 2000);
}
carousel3();
