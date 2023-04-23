let lis = document.querySelectorAll(".works ul li");
let imgs = Array.from(document.querySelectorAll(".works img"));

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    e.target.classList.add("active");
    imgs.forEach((img) => {
      img.style.display = "none";
    });
    let chosen = imgs.filter((el) => {
      return el.classList.contains(e.target.getAttribute("data-"));
    });
    chosen.forEach((img) => {
      img.style.display = "block";
    });
  });
});
