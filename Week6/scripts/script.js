let cat = document.querySelector("#cat");

cat.addEventListener("click", function () {
  cat.src = nextImageUrl();
  setTimeout(function () {
    document.querySelector("#list").remove();
    cat.src = "cat2.jpg";
  }, 5000);
});

var currentUrl = 0;

function nextImageUrl() {
  if (currentUrl == cats.length - 1) {
    currentUrl = 0;
  }
  currentUrl++;

  return cats[currentUrl];
}

let more = document.querySelector("#more");

more.addEventListener("click", (e) => {
  var ul = document.createElement("ul");
  cats.forEach(function (url) {
    ul.innerHTML += `<li><img src="${url}" width="300"/><a href="${url}">${url}</a></li>`;
  });

  document.querySelector("#list").appendChild(ul);
});
