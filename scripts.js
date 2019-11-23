
const container = document.getElementById('container');

console.log(countries);

for (let i = 0; i < countries.length; i++) {
  const flagDiv = document.createElement('div');
  const imageDiv = document.createElement('div');
  const textDiv = document.createElement('div');
  const p = document.createElement('p');

  container.appendChild(flagDiv);
  flagDiv.classList.add('flag-container');
  flagDiv.id = countries[i].name;

  flagDiv.appendChild(imageDiv);
  imageDiv.classList.add('image');
  imageDiv.style.background = 'url(' + countries[i].flagUrl + ') center no-repeat';
  imageDiv.style.backgroundSize = 'cover';

  flagDiv.appendChild(textDiv);
  textDiv.classList.add('text-div');
  textDiv.appendChild(p);
  p.classList.add('text');

}

container.addEventListener('mouseover', (e) => {
  if (e.target.className === 'image') {
    e.target.nextElementSibling.children[0].textContent = e.target.parentNode.id;
  }
});

container.addEventListener('mouseout', (e) => {
  if (e.target.className === 'image') {
    e.target.nextElementSibling.children[0].textContent = '';
  }
});
