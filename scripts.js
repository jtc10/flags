const nigeria = document.getElementById('nigeria');
const us = document.getElementById('us');
const colombia = document.getElementById('colombia');
const container = document.getElementById('container');
// const flagDiv = document.createElement('div').classList.add('flag-container');
// const imageDiv = document.createElement('div').classList.add('image');
// const textDiv = document.createElement('div').classList.add('text-div');
// const p = document.createElement('p').classList.add('text');

console.log(countries);

for (let i = 0; i < countries.length; i++) {
  const flagDiv = document.createElement('div');
  const imageDiv = document.createElement('div');
  const textDiv = document.createElement('div');
  const p = document.createElement('p');

  container.appendChild(flagDiv);
  flagDiv.classList.add('flag-container');
  flagDiv.appendChild(imageDiv);
  imageDiv.classList.add('image');
  flagDiv.appendChild(textDiv);
  textDiv.classList.add('text-div');
  textDiv.appendChild(p);
  p.classList.add('text');

  console.log(p.parentNode);

}

container.addEventListener('mouseover', () => {

});





// container.addEventListener('mouseover', (e) => {
//   if (e.target === nigeria.children[0]) {
//     nigeria.children[1].children[0].textContent = 'Nigeria';
//   }  else if (e.target === us.children[0])  {
//     us.children[1].children[0].textContent = 'United States';
//   }  else if (e.target === colombia.children[0])  {
//     colombia.children[1].children[0].textContent = 'Colombia';
//   }
// });
//
// container.addEventListener('mouseout', (e) => {
//   if (e.target === nigeria.children[0]) {
//     nigeria.children[1].children[0].textContent = '';
//   }  else if (e.target === us.children[0])  {
//     us.children[1].children[0].textContent = '';
//   }  else if (e.target === colombia.children[0])  {
//     colombia.children[1].children[0].textContent = '';
//   }
// });
