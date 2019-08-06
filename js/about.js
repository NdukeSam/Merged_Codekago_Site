const b = (params1, params2) => {
  let a = document.getElementById('a');
  let b = document.getElementById('b');
  let c = document.getElementById('c');
  let d = document.getElementById('d');
  let e = document.getElementById('e');
  let f = document.getElementById('f');
  let g = document.getElementById('g');
  let h = document.getElementById('h');
  let param = document.getElementById(`${params1}`);
  let aDiv = document.querySelector('._1');
  let bDiv = document.querySelector('._2');
  let cDiv = document.querySelector('._3');
  let dDiv = document.querySelector('._4');
  let eDiv = document.querySelector('._5');
  let fDiv = document.querySelector('._6');
  let gDiv = document.querySelector('._7');
  let hDiv = document.querySelector('._8');
  let params = document.getElementById(`${params2}`)
  aDiv.classList.remove('circle-background');
  bDiv.classList.remove('circle-background');
  cDiv.classList.remove('circle-background');
  dDiv.classList.remove('circle-background');
  eDiv.classList.remove('circle-background');
  fDiv.classList.remove('circle-background');
  gDiv.classList.remove('circle-background');
  hDiv.classList.remove('circle-background');
  a.style.display = 'none';
  b.style.display = 'none';
  c.style.display = 'none';
  d.style.display = 'none';
  e.style.display = 'none';
  f.style.display = 'none';
  g.style.display = 'none';
  h.style.display = 'none';
  param.style.display = 'block';
  params.classList.add('circle-background');
}

const career = () => {
  location.href = 'career/home.html'
}
const showMore = () => {
  let more1 = document.getElementById('show-1');
  let more2 = document.getElementById('show-2');
  let more3 = document.getElementById('show-3');
  let more4 = document.getElementById('show-4');
  let more5 = document.getElementById('show-5');
  let more6 = document.getElementById('show-6');
  let button = document.getElementById('button');
  more1.style.display = 'unset';
  more2.style.display = 'unset';
  more3.style.display = 'unset';
  more4.style.display = 'unset';
  more5.style.display = 'unset';
  more6.style.display = 'unset';
  button.style.display = 'none';
}
const minimize = () => {
  let show = document.getElementById('show');
  let mini = document.getElementById('mini');
  let coreValue = document.querySelector('.mobile-core-value');
  mini.style.display = 'none';
  show.style.display = 'block';
  coreValue.style.height = '820px';
}
const show = () => {
  let show = document.getElementById('show');
  let coreValue = document.querySelector('.mobile-core-value');
  let mini = document.getElementById('mini');
  mini.style.display = 'block';
  coreValue.style.height = '1430px';
  show.style.display = 'none';
}

