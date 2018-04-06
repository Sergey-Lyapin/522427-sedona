var hotels_button = document.querySelector(".main-hotels-button");
var popup = document.querySelector(".modal-hotels");

hotels_button.addEventListener("click", function (evt) {
    evt.preventDefault();
    popup.classList.toggle("modal-close");
});

