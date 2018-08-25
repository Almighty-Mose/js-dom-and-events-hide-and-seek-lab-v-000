function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.querySelector('.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    lis[i].innerHTML = (i + n).toString();
  }
}