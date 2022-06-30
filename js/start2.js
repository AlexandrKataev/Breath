// Задание сложности
let zad1 = 5;
let zad10 = 10;
let zad5;
let zad6;
let zad3;
let zad2;
let zad4;
let zad8;
let zad7;
let zad9;

let zad;

let savedLevel = localStorage.getItem("savedLevel1");
let level;

window.onload = function () {
  let output = document.getElementById("range");
  if (savedLevel == undefined) {
    output.setAttribute("value", "10");
    level = 10;
    document.getElementById("rangeValue").innerHTML = level;
  } else {
    output.setAttribute("value", savedLevel);
    level = Number(savedLevel);
    document.getElementById("rangeValue").innerHTML = level;
  }
};

function changeLevel() {
  let input = document.getElementById("range");
  level = Number(input.value);
  localStorage.setItem("savedLevel1", level);
  newZadLevel();
}

// Очистить данные
// localStorage.clear();

const newZadLevel = () => {
  zad1 = Math.floor(level / 4) + 5;
  zad10 = zad1 * 2;
  zad5 = Math.floor((zad10 + zad1) / 2 - 1);
  zad6 = Math.floor((zad10 + zad1) / 2);
  zad3 = Math.ceil((zad1 + zad5) / 2);
  zad2 = Math.floor((zad1 + zad3) / 2);
  zad4 = Math.floor((zad3 + zad5) / 2);
  zad8 = Math.floor((zad6 + zad10) / 2);
  zad7 = Math.floor((zad6 + zad8) / 2);
  zad9 = Math.floor((zad8 + zad10) / 2);
  zad = [zad1, zad2, zad3, zad4, zad5, zad6, zad7, zad8, zad9, zad10];
};
newZadLevel();

let zadc = [10, 12, 14, 16, 20, 23, 39, 39, 39, 20, 29];
let vdoh;
let vidoh;
let zadTime;
let vdohTime;
let vidohTime;

// Старт упражнения

let povtorenie = 0;

const start = () => {
  vdohTime = Number(5 + Math.floor(level / 4));

  document.getElementById("comment").classList.add("show");
  document.getElementById("comment").innerHTML = "Вдох";
  document.getElementById("time").innerHTML = vdohTime;
  document.getElementById("time").classList.add("timer2");
  document.getElementById("comment").classList.add("comment2");
  document.getElementById("comment").classList.add("colorActive");
  document.getElementById("time").classList.add("colorActive");

  console.log(zad);
  document.getElementById("myContainer2").style.animationDuration =
    vdohTime + "s";
  document.getElementById("myContainer2").classList.add("animStart");
  document.getElementById("myContainer2").classList.remove("animReverse");

  const cycle = setInterval(() => {
    if (povtorenie > 9) {
      clearInterval(cycle);
      document.getElementById("comment").innerHTML = "Конец";
      povtorenie = 0;
    } else if (vdohTime > 2) {
      vdohTime--;
      document.getElementById("time").innerHTML = vdohTime;
      document.getElementById("comment").innerHTML = "Вдох";
      document.getElementById("time").classList.add("timer2");
      document.getElementById("comment").classList.add("comment2");
    } else {
      vdohTime--;
      document.getElementById("comment").innerHTML = "Приготовьтесь...";
      document.getElementById("time").innerHTML = "1";
      povtorenie++;
      clearInterval(cycle);
      setTimeout(zadStartIf, 1000);
    }
  }, 1000);
};

const zadStartIf = () => {
  if (povtorenie == 1) {
    zadTime = zad[0];
    zadStart();
  } else if (povtorenie == 2) {
    zadTime = zad[1];
    zadStart();
  } else if (povtorenie == 3) {
    zadTime = zad[2];
    zadStart();
  } else if (povtorenie == 4) {
    zadTime = zad[3];
    zadStart();
  } else if (povtorenie == 5) {
    zadTime = zad[4];
    zadStart();
  } else if (povtorenie == 6) {
    zadTime = zad[5];
    zadStart();
  } else if (povtorenie == 7) {
    zadTime = zad[6];
    zadStart();
  } else if (povtorenie == 8) {
    zadTime = zad[7];
    zadStart();
  } else if (povtorenie == 9) {
    zadTime = zad[8];
    zadStart();
  } else if (povtorenie == 10) {
    zadTime = zad[9];
    zadStart();
  }
};

const zadStart = () => {
  document.getElementById("time").innerHTML = zadTime;
  document.getElementById("comment").innerHTML = "Задержка";

  const cycle = setInterval(() => {
    if (zadTime > 2) {
      zadTime--;
      document.getElementById("time").innerHTML = zadTime;
      document.getElementById("comment").innerHTML = "Задержка";
    } else {
      zadTime--;
      document.getElementById("comment").innerHTML = "Приготовьтесь...";
      document.getElementById("time").innerHTML = "1";
      clearInterval(cycle);

      setTimeout(vidohStart, 1000);
    }
  }, 1000);
};

const vidohStart = () => {
  vidohTime = Number(5 + Math.floor(level / 4));
  document.getElementById("time").innerHTML = vidohTime;
  document.getElementById("comment").innerHTML = "Выдох";

  document.getElementById("myContainer2").classList.add("animReverse");
  document.getElementById("myContainer2").classList.remove("animStart");
  const cycle = setInterval(() => {
    if (vidohTime > 2) {
      vidohTime--;
      document.getElementById("time").innerHTML = vidohTime;
      document.getElementById("comment").innerHTML = "Выдох";
    } else {
      vidohTime--;
      document.getElementById("comment").innerHTML = "Приготовьтесь...";
      document.getElementById("time").innerHTML = "1";
      clearInterval(cycle);
      setTimeout(start, 1000);
    }
  }, 1000);
};

// Видимость остальных объектов

const hideObject = () => {
  document.getElementById("time").setAttribute("onclick", "location.reload()");
  document.getElementById("range").classList.add("hide");
  document.getElementById("rangeValue").classList.add("hide");
  document.getElementById("menu1").classList.add("hide");
  document.getElementById("menu2").classList.add("hide");
};
