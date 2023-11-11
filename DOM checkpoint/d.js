var plus = document.getElementsByClassName("fa-square-plus");
console.log(plus);
for (let index = 0; index < plus.length; index++) {
  const element = plus[index];
  console.log(element);
  element.addEventListener("click", function (e) {
    console.log(element.previousElementSibling.innerText++);
    calcult();
  });
}
var minus = document.getElementsByClassName("fa-square-minus");
for (let index = 0; index < minus.length; index++) {
  const element1 = minus[index];
  element1.addEventListener("click", function (e) {
    if (element1.nextElementSibling.innerText > 0) {
      console.log(element1.nextElementSibling.innerText--);
      calcult();
    }
  });
}
var like = document.getElementsByClassName("fa-thumbs-up");
for (let index = 0; index < like.length; index++) {
  const element2 = like[index];
  element2.addEventListener("click", function (e) {
    element2.classList.toggle("clr");
    console.log(clr);
  });
}
var trash = document.getElementsByClassName("fa-trash");
for (let index = 0; index < trash.length; index++) {
  const element = trash[index];
  element.addEventListener("click", function (e) {
    element.closest(".box").remove();
  });
}
function calcult() {
  var price = document.querySelectorAll("h2 span");
  var s1 = 0;
  for (let index = 0; index < price.length; index++) {
    const element = price[index];
    console.log(element.innerText);
    s1 += element.innerText * minus[index].nextElementSibling.innerText;

    console.log(minus[index].nextElementSibling.innerText);
  }
  var total = document.querySelector("#Total span");
  console.log(s1);
  total.innerText = s1;
}
calcult();
