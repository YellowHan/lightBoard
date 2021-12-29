let str = "새해에는 부지런해질거야-!!";
let result = "";
let count = 0;
let active = false;

document.getElementById("step").onclick = function () {
  if (active) {
    clearInterval(timeoutId);
    active = false;
  }
  if (str.length < count) {
    reset();
  } else {
    check();
    play();
  }
};

document.getElementById("play").onclick = function () {
  if (!active) {
    timeoutId = setInterval(function () {
      if (str.length < count) {
        reset();
      }
      active = true;
      check()
      play();
    }, 200);
  }
};

document.getElementById("stop").onclick = function () {
  if (active) {
    clearInterval(timeoutId);
    active = false;
  }
};

document.getElementById("write").onclick = function () {
  document.getElementById("text").style.display = "none";
  document.getElementById("userText").style.display = "block";
  document.getElementById("write").style.display = "none";
  document.getElementById("save").style.display = "inline-block";
  document.getElementById("userText").value = "";
};

document.getElementById("save").onclick = function () {
  result = "";
  document.getElementById("text").innerText = result;
  if (document.getElementById("userText").value != "") {
    str = document.getElementById("userText").value;
  }
  document.getElementById("save").style.display = "none";
  document.getElementById("write").style.display = "inline-block";
  document.getElementById("text").style.display = "block";
  document.getElementById("userText").style.display = "none";
};

function play() {
  result += str.charAt(count);
  document.getElementById("text").innerText = result;
  count++;
}

function reset() {
  document.getElementById("text").innerText = "";
  result = "";
  count = 0;
}

function check() {
  if (document.getElementById("text").offsetWidth >= document.getElementById("board").offsetWidth) {
    let gap = document.getElementById("text").offsetWidth - document.getElementById("board").offsetWidth;
    document.getElementById("text").style.left = "-" + gap + "px";
  }
  else {
    document.getElementById("text").style.left = "0px";
  }
}
