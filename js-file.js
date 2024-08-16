const para      = document.createElement('p');
const diva      = document.createElement('div');
const hOne      = document.createElement('h1');
const hThree    = document.createElement('h3');
const newPara   = document.createElement('p');


const btn       = document.querySelector('#btn');

/*btn.addEventListener ('click', function (e){
 console.log(e.target.style.background = "blue");
}
);*/

btn.addEventListener('click', () => {
    alert('Hello World!');
});


/*function alertFunction(){
    alert('YAY, YOU DID IT!!');
};*/

//btn.onclick = alertFunction

//btn.addEventListener('click', alertFunction)



para.textContent = "hi, im red";
para.style.color = 'red';




hThree.textContent = "hi i'm a blue h3";
hThree.style.color = 'blue';
diva.style.cssText = " border: 3px solid black ;background: pink"



hOne.textContent    = "i'm in div";
newPara.textContent = "Me too";

document.body.appendChild(para);
document.body.appendChild(diva);
document.body.appendChild(hThree);

diva.appendChild(hOne);
diva.appendChild(newPara);