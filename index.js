function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target');
}

function increaseRankBy(n) {
  const list = document.querySelectorAll('.ranked-list li');
  for (let i = 0; i < list.length; i++) {
    let rank = parseInt(list[i].innerHTML);
    list[i].innerHTML = (rank + n).toString();
  }
}

function deepestChild() {
  
}