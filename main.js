// bir dene formunuz var, bu forumda mehsulun sekli ve mehsul haqqinda melumat, qiymet ve tip. submit button.

const form = document.querySelector("form");
const content = document.querySelector(".content");
const cards = document.querySelector(".cards");
const nameInput = document.querySelector("#name");
const imageInput = document.querySelector("#image");
const textArea = document.querySelector("textarea");
const inputPrice = document.querySelector("#price");
const typeText = document.querySelector("#type");
const selectMoney = document.querySelector("#money");

const resetForm = function () {
  nameInput.value = "";
  imageInput.value = "";
  textArea.value = "";
  inputPrice.value = "";
  typeText.value = "";
};

form.addEventListener("submit", handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  if (
    !nameInput.value.trim() ||
    !imageInput.value.trim() ||
    !textArea.value.trim() ||
    !inputPrice.value.trim() ||
    !typeText.value.trim()
  ) {
    alert('Zehmet xanalarin hamisini doldurun')
    return;
  }


  const card = document.createElement("div");
  const cardImage = document.createElement("div");
  const image = document.createElement("img");
  const cardAbout = document.createElement("div");
  const name = document.createElement("h2");
  const about = document.createElement("p");
  const cardPrice = document.createElement("div");
  const price = document.createElement("b");
  const money = document.createElement("span");
  const cardType = document.createElement("div");
  const type = document.createElement("b");
  const typeName = document.createElement("span");

  price.textContent = "Qiymeti: ";
  type.textContent = "Mehsulun novu: ";

  card.classList.add("card");
  cardImage.classList.add("card-img");
  cardAbout.classList.add("card-about");
  cardPrice.classList.add("card-price");
  cardType.classList.add("card-type");

  cardType.append(type, typeName);
  cardPrice.append(price, money);
  cardAbout.append(name, about, cardPrice, cardType);
  cardImage.append(image);
  card.append(cardImage, cardAbout);
  cards.append(card);

  image.src = imageInput.value;
  name.textContent = nameInput.value;
  about.textContent = textArea.value;
  money.textContent = `${inputPrice.value} ${selectMoney.value}`;
  typeName.textContent = typeText.value;
  resetForm();
}
