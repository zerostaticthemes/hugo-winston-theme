const generateButton = document.getElementById('generate');
const themeNameLabel = document.getElementById('theme-name');

const themeCssVars = ['--background-color','--text-color','--highlight','--heading-color','--edge'];
let themeColorsArray = []; // [[22,19,234],[213,219,10],[213,219,10],[213,219,10],[213,219,10]] 5 RGB colors
let themeColorsObject = {};
let themeName = ""

generateButton.addEventListener('click', generateTheme);

function handleThemeUpdate(e) {
  var themeName = e.target.value;

  // remove any existing themes
  var styleSheets = document.querySelectorAll('[data-theme]');
  styleSheets.forEach(match => {
    match.parentNode.removeChild(match);
  });

  if (themeName === 'reset') {
    localStorage.removeItem('theme');
    console.log('test');
  } else {
    addCss(themeName);
    localStorage.setItem('theme', themeName);
  }
}

function addCss(themeName) {
  var head = document.head;
  var link = document.createElement('link');

  link.dataset.theme = themeName;
  link.type = 'text/css';
  link.rel = 'stylesheet';
  link.href = `/css/${themeName}.css`;

  head.appendChild(link);
}

async function generateTheme() {
  console.log("Generating theme...")
  await getColorScheme();
  applyColorScheme();
  generateThemeName();
  displayThemeName();
}

async function getColorScheme() {
  console.log("get color scheme")
  fetch('http://colormind.io/api/', {
    method: 'POST',
    body: JSON.stringify({
      model : "ui",
      input: ["N","N","N","N","N"]
      // input: [[0,0,0],"N",[123, 22, 255],"N","N"]
    })
  })
  .then(response => response.json())
  .then(data => {
    themeColorsArray = data.result;
  })
  
}

function applyColorScheme() {
  console.log("apply color scheme")
  themeCssVars.forEach((property,index) => {
    const value = rgbToHex(...themeColorsArray[index]);
    document.documentElement.style.setProperty(property, value);
  });
}


function downloadColorScheme() {
  let text = `// ${themeName}\n`;
  text += ":root {\n"
  themeCssVars.forEach((property,index) => {
    text += `  ${property}: ${rgbToHex(...themeColorsArray[index])};\n`;
  })
  text += "}"
  console.log(text);
  const name = 'obj.css'
  const a = document.createElement('a');
  const type = name.split(".").pop();
  a.href = URL.createObjectURL( new Blob([text], { type:`text/${type === "txt" ? "plain" : type}` }) );
  a.download = name;
  a.click();
}

const rgbToHex = (r, g, b) => '#' + [r, g, b].map(x => {
  const hex = x.toString(16)
  return hex.length === 1 ? '0' + hex : hex
}).join('')

function hexToRgbArray(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? [
    parseInt(result[1], 16),
    parseInt(result[2], 16),
    parseInt(result[3], 16)
  ] : null;
}

function generateThemeName() {
  console.log("Generate theme name:", themeColorsArray)
  console.log(themeColorsArray[0]);
  const hexColor1 = rgbToHex(...themeColorsArray[0])
  const hexColor3 = rgbToHex(...themeColorsArray[2])
  const hexColor5 = rgbToHex(...themeColorsArray[4])
  let name1 = ntc.name(hexColor1);
  let name3 = ntc.name(hexColor3);
  let name5 = ntc.name(hexColor5)
  console.log(name1)
  console.log(name3)
  console.log(name5)
  themeName = `${name1[1]} ${name3[1]}`
  console.log("Theme Name:", themeName)
}

function displayThemeName() {
  themeNameLabel.innerHTML = themeName;
}

function getCssVarsFromDocument() {
  console.log("Reading CSS variables from stylesheet");
  themeCssVars.forEach((property, index) => {
    let value = getComputedStyle(document.documentElement).getPropertyValue(property).trim(); 
    value = hexToRgbArray(value);
    // property: --background-color
    // value: #ffffff
    console.log(`${property}: ${value};`)
    if (value) {
      themeColorsArray.push(value)
    } else {
      themeColorsArray.push(null)
    }
  });
  console.log("themeColorsArray", themeColorsArray);
}

// const savedTheme = localStorage.getItem('theme');
// addCss(savedTheme);
getCssVarsFromDocument();
generateThemeName(themeColorsArray)
displayThemeName(themeName)

// document.documentElement.style.setProperty('--background-color', 'rgb(0,0,0)')
// document.documentElement.style.setProperty('--highlight', 'rgb(90,83,82)')
// document.documentElement.style.setProperty('--text-color', 'rgb(0,0,0)')
// document.documentElement.style.setProperty('--heading-color', 'rgb(0,0,0)')

function toggleBodyClass(bodyClass) {
  const body = document.querySelector('body');
  console.log(body)
  console.log(body.classList)
  body.classList.toggle(bodyClass);
}

function bodyClasses() {
  const bodyClasses = [ ...document.querySelector('body').classList ];
  console.log(bodyClasses);
  bodyClasses.forEach((item) => {
    if (item === "paper") {
      const paper = document.querySelector('button[data-switch="paper"]')
      paper.classList.toggle('selected');
      paper.addEventListener('click', () => toggleBodyClass("paper"));
    } 
    if (item === "frame") {
      const frame = document.querySelector('button[data-switch="frame"]')
      frame.classList.toggle('selected');
      frame.addEventListener('click', () => toggleBodyClass("frame"));
    } 
  })  
}

bodyClasses();