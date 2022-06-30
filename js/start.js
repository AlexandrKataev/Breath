const level = {
  vdohTime: 5,
  zadTime: 5,
  vidohTime: 5,
};

let povtorenie = 0;

let clicked = 0;

//Изменение сложности

const changeLevel = () => {
  let input = document.getElementById("range");
  let inputLevel = Number(input.value);
  level.zadTime = 4 + inputLevel;
};

// Старт
const vdoh = () => {
  let { vdohTime } = level;
  document.getElementById("comment").classList.add("show");
  document.getElementById("comment").innerHTML = "Вдох";
  document.getElementById("time").innerHTML = vdohTime;
  document.getElementById("time").classList.add("timer2");
  document.getElementById("comment").classList.add("comment2");
  document.getElementById("comment").classList.add("colorActive");
  document.getElementById("time").classList.add("colorActive");

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
      setTimeout(zad, 1000);
    }
  }, 1000);
};

const zad = () => {
  let { zadTime } = level;
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
      level.zadTime++;
      setTimeout(vidoh, 1000);
    }
  }, 1000);
};

const vidoh = () => {
  let { vidohTime } = level;
  document.getElementById("time").innerHTML = vidohTime;
  document.getElementById("comment").innerHTML = "Выдох";
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
      setTimeout(vdoh, 1000);
    }
  }, 1000);
};

// Анимация

function myMove() {
  const elem = document.getElementById("myAnimation");
  let pos = 400;
  const v = level.vdohTime * 2.5;
  const z = level.zadTime * 2.5;
  const vi = level.vidohTime * 2.5;

  const id = setInterval(frame, v);

  const pauseAnim = () => {
    const id2 = setInterval(frame2, vi);
    function frame2() {
      if (pos == 400) {
        clearInterval(id2);
        myMove();
      } else {
        pos++;
        elem.style.top = pos + "px";
      }
    }
  };

  function frame() {
    if (pos == 0) {
      const pauseHold = setTimeout(pauseAnim, z * 400);
      clearInterval(id);
      pauseHold();
    } else {
      pos--;
      elem.style.top = pos + "px";
    }
  }
}

// Видимость остальных объектов

const hideObject = () => {
  document.getElementById("range").classList.add("hide");
  document.getElementById("rangeValue").classList.add("hide");
  document.getElementById("menu1").classList.add("hide");
  document.getElementById("menu2").classList.add("hide");
};
