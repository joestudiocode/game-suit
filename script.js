// function computer() {
//   const comp = Math.random();
//   console.log(comp);
//   if (comp < 0.34) return "kertas";
//   if (comp >= 0.34 && comp < 0.67) return "gunting";
//   return "batu";
// }

function computer() {
  const comp = Math.round(Math.random() * 2);
  console.log(comp);
  if (comp < 1) return "kertas";
  if (comp >= 1 && comp < 2) return "gunting";
  return "batu";
}

function getResult(comp, player) {
  if (player == comp) return "DRAW!";
  if (player == "gunting") return comp == "kertas" ? "WON!" : "LOSE!";
  if (player == "kertas") return comp == "gunting" ? "LOSE!" : "WON!";
  if (player == "batu") return comp == "kertas" ? "LOSE!" : "WON!";
}

function loadingCom() {
  const imgComputer = document.querySelector(".img-computer");
  const gambar = ["kertas", "gunting", "batu"];
  const timeBegin = new Date().getTime();
  let i = 0;
  setInterval(function () {
    if (new Date().getTime() - timeBegin > 1000) {
      clearInterval;
      return;
    }
    imgComputer.setAttribute("src", "assets/icon/" + gambar[i++] + ".png");
    if (i == gambar.length) i = 0;
  }, 100);
}

const choice = document.querySelectorAll("li img");
choice.forEach(function (params) {
  params.addEventListener(
    "click",
    function () {
      console.log(params);
      const resultComputer = computer();
      const resultPlayer = params.className;
      const resultFinal = getResult(resultComputer, resultPlayer);

      loadingCom();

      setTimeout(function () {
        const imgComputer = document.querySelector(".img-computer");
        imgComputer.setAttribute(
          "src",
          "assets/icon/" + resultComputer + ".png"
        );

        setTimeout(function () {
          const info = document.querySelector(".info");
          info.innerHTML = resultFinal;
        });
      }, 1100);
    },
    1000
  );
});

// const pKertas = document.querySelector(".kertas");
// pKertas.addEventListener("click", function () {

// const g = Math.round(Math.random() * 255 + 1);
// const r = Math.round(Math.random() * 2+1 );
// const b = Math.round(Math.random() * 255 + 1);
// console.log(r);
