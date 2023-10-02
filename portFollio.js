const moonSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" id="moon">
<g>
  <g>
    <path
      fill="#ffe500"
      d="M40.8 28.4C43.5 18 38.1 7 28.2 2.7c-2.6-1.1-5.4-1.7-8-1.8-.9 0-1.4 1-.8 1.7 4.5 4.7 6.8 11 5.8 17.8-.9 3.6-6.2 2.7-8 4.4-1.9 1.8 4.2 5.1 4.2 5.1-3.3 4.7-8.5 8.2-14.1 9.4-.9.2-1.1 1.3-.3 1.8 1.7 1.2 3.6 2.1 5.6 2.8 12 3.9 24.9-3.1 28.2-15.5z"
    />
    <ellipse
      cx="24"
      cy="45.6"
      fill="#45413c"
      opacity=".15"
      rx="11.5"
      ry="1.5"
    />
    <g>
      <path
        fill="#fff48c"
        d="M18.1 27.6c2.3-.7 5.7-.8 6.4-3.6.1-.9.2-1.7.2-2.6-1.6 2.4-5.9 1.8-7.6 3.4-.8.8-.1 1.9 1 2.8zM28.2 2.7c-2.6-1.1-5.4-1.7-8-1.8-.9 0-1.4 1-.8 1.7.6.7 1.2 1.3 1.7 2 9.4 1 17.2 8 19.2 17.4.5 2.3.6 4.6.3 6.8 0-.1.1-.3.1-.4C43.5 18 38.1 7 28.2 2.7zM7 41.1c.6.4 1.3.8 2 1.2 3.4-1.1 8.1-5.3 10.4-7.4.7-.6.6-1.7-.2-2.2-3.2 3.3-7.3 5.8-11.8 6.7-.9 0-1.2 1.2-.4 1.7z"
      />
    </g>
    <path
      fill="none"
      stroke="#45413c"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      d="M40.8 28.4C43.5 18 38.1 7 28.2 2.7c-2.6-1.1-5.4-1.7-8-1.8-.9 0-1.4 1-.8 1.7 4.5 4.7 6.8 11 5.8 17.8-.9 3.6-6.2 2.7-8 4.4-1.9 1.8 4.2 5.1 4.2 5.1-3.3 4.7-8.5 8.2-14.1 9.4-.9.2-1.1 1.3-.3 1.8 1.7 1.2 3.6 2.1 5.6 2.8 12 3.9 24.9-3.1 28.2-15.5zM21.4 29.9c1.9 1.1 3.4 1.4 3.8-.4"
    />
    <circle
      cx="30.3"
      cy="23.5"
      r="1.1"
      fill="#45413c"
      stroke="#45413c"
      stroke-miterlimit="10"
      transform="rotate(-71.893 30.32 23.481)"
    />
    <circle
      cx="32.1"
      cy="33.6"
      r="1.3"
      fill="#fffacf"
      transform="rotate(-71.899 32.132 33.616)"
    />
    <path
      fill="none"
      stroke="#45413c"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-miterlimit="10"
      d="M17.9 33.9s3.4 3.6 8.3 2.3M26.9 33.9s-1 1-.7 2.2c.4 1.5 1.9 1.7 1.9 1.7"
    />
  </g>
</g>
</svg>`;
const sunSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 47.5 47.5" id="sun">
<defs>
  <clipPath id="a">
    <path d="M0 38h38V0H0v38Z" />
  </clipPath>
</defs>
<g clip-path="url(#a)" transform="matrix(1.25 0 0 -1.25 0 47.5)">
  <path
    fill="#ffac33"
    d="M15 35s0 2 2 2 2-2 2-2v-2s0-2-2-2-2 2-2 2v2zM31 23s2 0 2-2-2-2-2-2h-2s-2 0-2 2 2 2 2 2h2zM5 23s2 0 2-2-2-2-2-2H3s-2 0-2 2 2 2 2 2h2zM8.872 30.956s1.414-1.414 0-2.828-2.828 0-2.828 0l-1.415 1.414s-1.414 1.414 0 2.829c1.415 1.414 2.829 0 2.829 0l1.414-1.415ZM27.957 28.129s-1.414-1.414-2.828 0 0 2.828 0 2.828l1.414 1.414s1.414 1.414 2.828 0 0-2.828 0-2.828l-1.414-1.414ZM26 21a9 9 0 0 1-9 9 9 9 0 1 1 9-9"
  />
  <path
    fill="#b4c3cc"
    d="M29 17c-.825 0-1.62-.125-2.369-.357A6.498 6.498 0 0 1 20.5 21c-3.044 0-5.592-2.096-6.299-4.921A4.459 4.459 0 0 1 11.5 17 4.5 4.5 0 0 1 7 12.5c0-.604.123-1.178.339-1.704A4.98 4.98 0 0 1 6 11a5 5 0 0 1-5-5 5 5 0 0 1 5-5h23a8 8 0 1 1 0 16"
  />
</g>
</svg>`;
function changeTheme() {
  const lightNodes = document.getElementsByClassName("theme-light");
  const darkNodes = document.getElementsByClassName("theme-dark");
  const toggleSwitch = document.getElementById("toggle-switch");
  const toggleSwitch2 = document.getElementById("toggle-switch2");

  const childNode = toggleSwitch.children[0].children[0];
  const childNode2 = toggleSwitch2.children[0].children[0];

  let nodeArr = [];
  if (lightNodes.length > 0) {
    nodeArr = Array.from(lightNodes);
    childNode.innerHTML = sunSvg;
    childNode2.innerHTML = sunSvg;
  } else {
    nodeArr = Array.from(darkNodes);
    childNode.innerHTML = moonSvg;
    childNode2.innerHTML = moonSvg;
  }

  for (let i = 0; i < nodeArr.length; i++) {
    if (nodeArr[i].classList.contains("theme-light")) {
      nodeArr[i].classList.remove("theme-light");
      nodeArr[i].classList.add("theme-dark");
    } else {
      nodeArr[i].classList.remove("theme-dark");
      nodeArr[i].classList.add("theme-light");
    }
  }
}

function showSideBar() {
  const sideBar = document.getElementById("header-sideBar");
  const backGround = document.getElementById("transparent-background");
  sideBar.classList.remove("header-sideBar-collapse");
  backGround.classList.remove("transparent-background-collapse");
  sideBar.classList.add("header-sideBar-expand");
  backGround.classList.add("transparent-background-expand");
}
function hideSideBar() {
  const sideBar = document.getElementById("header-sideBar");
  const backGround = document.getElementById("transparent-background");
  sideBar.classList.remove("header-sideBar-expand");
  backGround.classList.remove("transparent-background-expand");
  sideBar.classList.add("header-sideBar-collapse");
  backGround.classList.add("transparent-background-collapse");
  console.log(sideBar);
  console.log(backGround);
}
const emailContainer = document.getElementById("lottie-email");
const messageContainer = document.getElementById("lottie-message");
const whatsappContainer = document.getElementById("lottie-whatsapp");
const linkedinContainer = document.getElementById("lottie-linkedin");
const skillsContainer = document.getElementById("skills-image");
const experienceContainer = document.getElementById("experience-animation");
const educationContainer = document.getElementById("education-animation");

const emailAnimation = {
  container: emailContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./images/emailAnimation.json",
};

const messageAnimation = {
  container: messageContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./images/messageAnimation.json",
};
const whatsappAnimation = {
  container: whatsappContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./images/whatsappAnimation.json",
};
const linkedinAnimation = {
  container: linkedinContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./images/linkedinAnimation.json",
};

const skillsAnimation = {
  container: skillsContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./images/skillsAnimation.json",
};

const experienceAnimation = {
  container: experienceContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./images/experienceAnimation.json",
};

const educationAnimation = {
  container: educationContainer,
  renderer: "svg",
  loop: true,
  autoplay: true,
  path: "./images/educationAnimation.json",
};

// Load and play the Lottie animation
lottie.loadAnimation(messageAnimation);
lottie.loadAnimation(emailAnimation);
lottie.loadAnimation(whatsappAnimation);
lottie.loadAnimation(linkedinAnimation);
lottie.loadAnimation(skillsAnimation);
lottie.loadAnimation(experienceAnimation);
lottie.loadAnimation(educationAnimation);
