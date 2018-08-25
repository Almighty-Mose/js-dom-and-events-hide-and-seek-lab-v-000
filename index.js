function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  let element = document.querySelector('.ranked-list li');
  for(i = 0; i < element.length; i++)
}