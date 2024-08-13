const para = document.createElement('p');
const diva = document.createElement('div');
const hOne = document.createElement('h1');
const hThree = document.createElement('h3');
const newPara = document.createElement('p');
para.textContent = "hi, im red";
para.style.color = 'red';
document.body.appendChild(para);
hThree.textContent = "hi i'm a blue h3";
hThree.style.color ='blue';
document.body.appendChild(hThree);
diva.style.cssText = " border: 3px solid black ;background: pink"
document.body.appendChild(diva)
hOne.textContent = "i'm in div";
newPara.textContent = "Me too";
diva.appendChild(hOne);
diva.appendChild(newPara);