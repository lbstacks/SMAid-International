const filterContainer = document.querySelector(".button-group");
const galleryItems = document.querySelectorAll(".item");

filterContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("cta")) {
    filterContainer.querySelector(".active").classList.remove("active");
    event.target.classList.add("active");

    const filterValue = event.target.getAttribute("data-filter");
    galleryItems.forEach((item) => {

      if (filterValue === "*" || item.classList.contains(filterValue)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  }
});
