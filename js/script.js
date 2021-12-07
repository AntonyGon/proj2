const cardNumberForm = document.querySelector("#i1");
const cardNumber = document.querySelector(".card-number");
const maketCardNumber = "#### #### #### ####";
const cardNumberFunc = () => {
  let maskOptions = {
    mask: "0000 0000 0000 0000",
  };
  let mask = IMask(cardNumberForm, maskOptions);
  cardNumber.textContent =
    cardNumberForm.value +
    maketCardNumber.substring(cardNumberForm.value.length);
};
const cardNameForm = document.querySelector("#i2");
const cardName = document.querySelector(".card-holder");
const cardNameFunc = () => {
  if (cardNameForm.value === "") cardName.textContent = "AD SOYAD";
  else cardName.textContent = cardNameForm.value;
};
const cardMonthForm = document.querySelector("#i3");
const cardYearForm = document.querySelector("#i4");
const cardDate = document.querySelector(".card-expires");

const cardDateFunc = () => {
  cardDate.textContent = `${cardMonthForm.value}/${cardYearForm.value}`;
};
const cardBack = document.querySelector(".card-back");
const addCardBack = () => {
  cardBack.classList.add("active");
};
const removeCardBack = () => {
  cardBack.classList.remove("active");
};
const cardCVVForm = document.querySelector("#i5");
const cardBackCVV = document.querySelector(".card-back-CVV");
const cardBackCVVfunc = () => {
  cardBackCVV.textContent = cardCVVForm.value;
};
let elem = 0;
const cardBorderColorFunc= (cssEl) => {
  if (elem!==0) {elem.style.borderColor="transparent"};
  let a = document.querySelector(cssEl);
  a.style.borderColor="white";
  elem=a;
}
const submitFunc = () => {
  let form = {
    Number: cardNumberForm.value,
    Name: cardNameForm.value,
    Month: cardMonthForm.value,
    Year: cardYearForm.value,
    CVV: cardCVVForm.value,
  };
  console.log(form);
};
