const nigeria = document.getElementById('nigeria');
const us = document.getElementById('us');
const colombia = document.getElementById('colombia');
const container = document.getElementById('container');


container.addEventListener('mouseover', (e) => {
  if (e.target === nigeria.children[0]) {
    nigeria.children[1].children[0].textContent = 'Nigeria';
  }  else if (e.target === us.children[0])  {
    us.children[1].children[0].textContent = 'United States';
  }  else if (e.target === colombia.children[0])  {
    colombia.children[1].children[0].textContent = 'Colombia';
  }
});

container.addEventListener('mouseout', (e) => {
  if (e.target === nigeria.children[0]) {
    nigeria.children[1].children[0].textContent = '';
  }  else if (e.target === us.children[0])  {
    us.children[1].children[0].textContent = '';
  }  else if (e.target === colombia.children[0])  {
    colombia.children[1].children[0].textContent = '';
  }

});
