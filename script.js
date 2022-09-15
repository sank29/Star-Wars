let input = document.querySelector('input');
let output = document.querySelector('#output');
output.style.backgroundColor = 'black';
let info = document.querySelector('#info');
info.style.display = 'none';

async function main() {
  let inputValue = input.value;
  let data = await takeInputAndGetData(inputValue);
  appendDown(data, inputValue);
}

async function takeInputAndGetData(inputValue) {
  let url = `https://swapi.dev/api/people/?search=${inputValue}`;
  let data = await fetch(url);
  data = await data.json();
  return data.results;
}

function appendDown(data, inputValue) {
  if (!data) {
    return;
  }

  output.innerHTML = '';

  data.forEach(function (elements, index) {
    let div = document.createElement('div');
    div.setAttribute('class', 'allData');

    let p = document.createElement('p');
    p.innerText = elements.name;
    p.style.color = 'white';
    p.style.marginTop = '30px';
    p.style.marginBottom = '5px';
    p.setAttribute('class', 'name');

    let p1 = document.createElement('p');
    p1.innerText = elements.birth_year;
    p1.style.color = 'rgba(181, 171, 171, 0.714)';
    p1.style.display = 'inline';

    let p2 = document.createElement('p');
    p2.innerText = elements.gender;
    p2.style.color = 'rgba(181, 171, 171, 0.714)';
    p2.style.marginLeft = '487px';
    p2.style.marginTop = '-30px';

    div.append(p, p1, p2);
    output.append(div);

    let allDiv = document.querySelectorAll('.allData');

    clicking(allDiv, index, data);
  });

  if (inputValue === '') {
    output.innerHTML = '';
    output.style.backgroundColor = 'black';

    input.style.borderBottomLeftRadius = '20px';
    input.style.borderBottomRightRadius = '20px';
  } else {
    output.style.backgroundColor = '#2d2f30';
    output.style.borderBottomLeftRadius = '20px';
    output.style.borderBottomRightRadius = '20px';

    input.style.borderBottomLeftRadius = '0px';
    input.style.borderBottomRightRadius = '0px';
  }

  if (data.length === 0) {
    input.style.borderBottomLeftRadius = '20px';
    input.style.borderBottomRightRadius = '20px';
    output.innerHTML = '';
    output.style.backgroundColor = 'black';
  }
}

//Clicking on title

function clicking(allDiv, index, data) {
  if (!allDiv) {
    return;
  }
  console.log(allDiv[index]);
  allDiv[index].addEventListener('click', function () {
    info.innerHTML = '';
    let main = document.querySelector('#main');
    info.style.display = 'block';
    main.style.display = 'none';
    data = data[index];

    let h1 = document.createElement('h1');
    h1.innerText = data.name;
    h1.style.cursor = 'pointer';

    let personalInfo = document.createElement('div');
    personalInfo.setAttribute('id', 'personalInfo');
    let personlTitle = document.createElement('h2');
    personlTitle.innerText = 'Personal Info';

    let birthYear = document.createElement('h3');
    birthYear.innerText = `Birth Year : ${data.birth_year}`;

    let gender = document.createElement('h3');
    gender.innerText = `Gender : ${data.gender}`;

    let height = document.createElement('h3');
    height.innerText = `Height : ${data.height}`;

    personalInfo.append(personlTitle, birthYear, gender, height);

    //////////////////////////
    let anatomy = document.createElement('div');
    anatomy.setAttribute('id', 'anatomy');
    let anatomyTitle = document.createElement('h2');
    anatomyTitle.innerText = 'Anatomy';

    let eyeColor = document.createElement('h3');
    eyeColor.innerText = `Birth Year : ${data.eye_color}`;

    let mass = document.createElement('h3');
    mass.innerText = `Gender : ${data.mass}`;

    let hairColor = document.createElement('h3');
    hairColor.innerText = `Height : ${data.hair_color}`;

    anatomy.append(anatomyTitle, eyeColor, mass, hairColor);
    /////////////////////////

    let twoDivs = document.createElement('div');
    twoDivs.setAttribute('id', 'twoDivs');
    twoDivs.append(personalInfo, anatomy);

    //goBack button

    let button = document.createElement('button');
    button.setAttribute('id', 'goBack');
    button.innerText = 'Go Back';

    button.addEventListener('click', function () {
      info.style.display = 'none';
      window.location.reload();
    });

    info.append(h1, twoDivs, button);
  });
}

// debouncing
let id;

function debounce(func, delay) {
  console.log(id);
  if (id) {
    clearTimeout(id);
  }
  id = setTimeout(function () {
    func();
  }, delay);
}

let sound = document.querySelector('#sound');

sound.addEventListener('click', function (event) {});
