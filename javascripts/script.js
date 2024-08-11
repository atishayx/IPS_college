var closeBtn = document.querySelectorAll(".close"),
    card = document.querySelectorAll(".card");

closeBtn.forEach(function(el) {
  el.addEventListener("click", closeCard);
});

card.forEach(function(el) {
  el.addEventListener("click", openCard);
});

function closeCard(event) {
  event.stopPropagation();
  event.target.closest(".card").classList.add("closed");
}

function openCard(event) {
  if (event.currentTarget.classList.contains("closed")) {
    event.currentTarget.classList.remove("closed");
  } 
}




