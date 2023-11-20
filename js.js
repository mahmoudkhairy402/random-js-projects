let header = document.getElementById("header");
let changecolor = document.getElementById("changecolor");
let changecolorul = document.getElementById("ul");
let headerbg = document.getElementById("headerbg");
let buttonsbg = document.getElementById("buttonsbg");
let headercolor = document.getElementById("headercolor");
let li = document.querySelectorAll(".li");
console.log(li);

let suitColors = [
  "#331D2C",
  "#A78295",
  "#867070",
  "#41644A",
  "#D14D72",
  "#5C8984",
  "#FF6666",
];

let randomRgb = function () {
  return Math.round(Math.random() * 255);
};
let randomIndex = function (array) {
  let random = Math.round(Math.random() * array.length);
  random < array.length ? true : (random = array.length - 1);
  return random;
};
let randomHexa = function () {
  return `#${Math.random().toString(16).slice(2, 8)}`;
};

// menu bar displaying
changecolor.addEventListener("click", function (ele) {
  changecolorul.classList.toggle("display");
  console.log("clicked");
});

/////////////////////////
headerbg.addEventListener("click", function (e) {
  header.style.background = suitColors[randomIndex(suitColors)];
});

/////////////////
buttonsbg.addEventListener("click", function (e) {
  changecolor.style.background = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
  li.forEach((ele) => {
    ele.style.background = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
  });
});

headercolor.addEventListener("click", function (ele) {
  header.style.color = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
  header.style.color = `rgb(${randomRgb()},${randomRgb()},${randomRgb()})`;
});

/// ************************************** */

let myName = document.getElementById("myName");
let myNameSpan = document.getElementById("myNameSpan");
let string = "محمود خيري ويبسايت يرحب بالساده الزائرين";

let i = 1;

//autoewiting function , take 2 parameters,and need olly glopal counter (i)
let autoWriting = function (string, htmlEle) {
  let newstring = string.slice(0, i);
  htmlEle.innerText = newstring;

  i++;
  if (i % 5 == 0) {
    htmlEle.style.color = randomHexa();
  }

  //+4 to prevent it to disappear for (4-1) unit of my time
  i == string.length + 4 ? (i = 1) : false;
};

setInterval(autoWriting, 300, string, myName);

/********************************************888// */
/*********************click for random video***********************888// */

let videoContainer = document.getElementById("videoContainer");
let randomVideo = document.getElementById("randomVideo");
let quateContainer = document.getElementById("quateContainer");
let randomQuate = document.getElementById("randomQuate");

let videosArray = [
  `  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/ROjN0bSKwIc"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    ></iframe>`,
  `  <iframe
  width="560"
    height="315"
    src="https://www.youtube.com/embed/YPOiNF0riyA"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    ></iframe>`,
  ` <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/jQsv11lT0y8"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>`,
  `  <iframe
    width="560"
    height="315"
    src="https://www.youtube.com/embed/WuzcWpnEZYg"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
  ></iframe>`,
  `<iframe 
    width="560"
    height="315"
    src="https://www.youtube.com/embed/W_y2Bwx94Qo"
    title="YouTube video player"
    frameborder="0"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
    allowfullscreen
    ></iframe>`,
];
let quateArray = [
  `  <div class="quateBody">
    <div class="quate">the monkey in his mother eye is an antelope</div>
    <div class="quateAuther">Mahmoud Khairy</div>
    </div>`,
  `  <div class="quateBody">
    <div class="quate" dir="rtl">اقلب القدره علي فمها تطلع البت لاختها</div>
  <div class="quateAuther" dir="rtl">ستي</div>
</div>`,
  `  <div class="quateBody">
  <div class="quate" dir="rtl">النادي الاهلي يقولكو هيهي, كتفم ابوكو كلكو هيهي</div>
  <div class="quateAuther" dir="rtl">اهلاوي التراس</div>
  </div>`,
  ` <div class="quateBody">
  <div class="quate" dir="rtl">التالته شمال ,مصنع الرجال</div>
  <div class="quateAuther" dir="rtl">التراس اهلاوي</div>
  </div>`,
  `  <div class="quateBody">
  <div class="quate" dir="rtl"> لو جالك حاسبات في التنسيق اهرب دا كمين </div>
  <div class="quateAuther" dir="rtl">طالب حاسبات</div>
  </div>`,
];

randomVideo.addEventListener("click", function () {
  let i = Math.floor(Math.random() * videosArray.length);
  videoContainer.innerHTML = videosArray[i];
  videoContainer.firstElementChild.classList.add("video-animation");
});

/********************************************/
/*********************click for random Quate***********************888// */
randomQuate.addEventListener("click", function () {
  let i = Math.floor(Math.random() * quateArray.length);
  quateContainer.innerHTML = quateArray[i];
});

/******************Celebration********************/

let flowerBtn = document.getElementById("flowerBtn");
let flowersContainer = document.getElementById("flowersContainer");
let flowersArray = [
  `&#127799`,
  `&#127800`,
  `&#127801`,
  `&#127802`,
  `&#127803`,
  `&#127803`,
];

let makeFlowers = function () {
  let stopCelebration = setInterval(() => {
    let flower = document.createElement("div");

    flower.classList.add("flower");

    flower.innerHTML = flowersArray[randomIndex(flowersArray)];

    flower.style.left = `${Math.random() * 100}%`;

    // flowersParent.append(flower);
    flowersContainer.append(flower);
    // console.log(flowersContainer);
  }, 100);

  setTimeout(() => {
    clearInterval(stopCelebration);
  }, 3000);

  setTimeout(() => {
    flowersContainer.innerHTML = "";
  }, 10000);
};

flowerBtn.addEventListener("click", () => {
  makeFlowers();
});

/**********************Question System*********************** */
let showsIcons = document.querySelectorAll(".show");
let descriptions = document.querySelectorAll(".descrebtion");

showsIcons.forEach((ele) => {
  let i = false;
  ele.addEventListener("click", function () {
    if (i == false) {
      ele.innerHTML = "-";
      ele.nextElementSibling.style.opacity = "1";
      ele.nextElementSibling.style.marginTop = "10px";
      ele.nextElementSibling.style.height = "auto";
      ele.nextElementSibling.style.padding = "10px";
      // ele.parentElement.style.padding = "30px";
      // ele.parentElement.style.height = `${ele.parentElement.scrollHeight}px`;

      i = true;
    } else {
      ele.innerHTML = "+";
      ele.nextElementSibling.style.height = "0";
      ele.nextElementSibling.style.opacity = "0";
      ele.nextElementSibling.style.marginTop = "0";
      ele.nextElementSibling.style.padding = "0";
      // ele.parentElement.style.height = "76.82px";

      i = false;
    }
    console.log(ele);
    console.log(ele.nextElementSibling);
  });
});

// ***************************************************//

{
  let fullDate = document.getElementById("date");
  let hours = document.getElementById("hours");
  let minutes = document.getElementById("minutes");
  let seconds = document.getElementById("seconds");
  let state = document.getElementById("state");

  setInterval(() => {
    let time = new Date();
    let d = time.toDateString();
    let h = time.getHours();
    let m = time.getMinutes();
    let s = time.getSeconds();

    if (h > 12) {
      h = h - 12;
      if (h < 10) {
        hours.innerText = `0${h}`;
      }
      hours.innerText = `${h}`;

      state.innerText = "Pm";
    } else {
      hours.innerText = `${h}`;
      state.innerText = "Am";
    }

    if (h < 10) {
      hours.innerText = `0${h}`;
    } else {
      hours.innerText = `${h}`;
    }

    if (m < 10) {
      minutes.innerText = `0${m}`;
    } else {
      minutes.innerText = `${m}`;
    }
    if (s < 10) {
      seconds.innerText = `0${s}`;
    } else {
      seconds.innerText = `${s}`;
    }
    fullDate.innerText = `${d}`;
  }, 1000);
}
// ***************************************************//
// ***************************************************//
// ***************************************************//

let next = document.getElementById("next");
let previous = document.getElementById("previous");
let imageContainer = document.getElementById("imageContainer");
let img = document.getElementById("img");
let myImages = [
  `images/shuffle-01.jpg`,
  `images/shuffle-02.jpg`,
  `images/shuffle-03.jpg`,
  `images/shuffle-04.jpg`,
  `images/shuffle-05.jpg`,
  `images/shuffle-06.jpg`,
  `images/shuffle-07.jpg`,
  `images/shuffle-08.jpg`,
];

let c = 0;
next.addEventListener("click", function () {
  c++;
  if (c >= myImages.length) {
    c = 0;
  }

  img.setAttribute("src", myImages[c]);
  img.style.animation = "slideIn .3s";
  console.log(img);
});

previous.addEventListener("click", function () {
  c--;

  if (c < 0) {
    console.log(c);
    c = myImages.length - 1;
  }

  img.setAttribute("src", myImages[c]);
  img.style.animation = "slideIn .3s";
  console.log(img);
});

setTimeout(() => {
  console.log("kjkh");
}, 0);

let an = ["a", "as"];
an.shift();
console.log(an.pop());
