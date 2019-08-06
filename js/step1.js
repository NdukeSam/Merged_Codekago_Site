const moveToHome = () => {
  location.href = '/home.html'
}
const step1 = () => {
  location.href = 'step4.html'
}
const step2 = () => {
  location.href = 'step3.html'
}
const step3 = () => {
  location.href = 'step2.html'
}
const step4 = () => {
  location.href = 'step1.html'
}
const checkClick = () => {
  const input1 = document.querySelector('#check1'),
    text = document.querySelector('#digital');
  if (input1.checked) {
    text.classList.add('clickedClass');
    text.style.color = "rgba(71, 194, 247, 1)";
    text.style.fontSize = "15px";

  } else {
    text.style.color = "rgba(132, 142, 152, 1)";
  }
}
const checkClick1 = () => {
  const input1 = document.querySelector('#check2'),
    text = document.querySelector('#content');
  if (input1.checked) {
    text.classList.add('clickedClass');
    text.style.color = "rgba(71, 194, 247, 1)";
    text.style.fontSize = "15px";

  } else {
    text.style.color = "rgba(132, 142, 152, 1)";
  }
}
const checkClick2 = () => {
  const input1 = document.querySelector('#check3'),
    text = document.querySelector('#branding');
  if (input1.checked) {
    text.classList.add('clickedClass');
    text.style.color = "rgba(71, 194, 247, 1)";
    text.style.fontSize = "15px";

  } else {
    text.style.color = "rgba(132, 142, 152, 1)";
  }
}
const checkClick3 = () => {
  const input1 = document.querySelector('#check4'),
    text = document.querySelector('#notSure');
  if (input1.checked) {
    text.classList.add('clickedClass');
    text.style.color = "rgba(71, 194, 247, 1)";
    text.style.fontSize = "15px";

  } else {
    text.style.color = "rgba(132, 142, 152, 1)";
  }
}