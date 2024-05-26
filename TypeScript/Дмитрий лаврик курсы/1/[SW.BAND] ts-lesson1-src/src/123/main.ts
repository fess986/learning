export default {}

const app = document.querySelector('#app')!;

app.innerHTML = 'Hello, world!';

/* if(app){
	app.innerHTML = 'Hello, world!';
} */

/* const a = document.getElementsByTagName('a')![0];
a.href = '1' */

const a = document.querySelector('a');

if(a instanceof HTMLAnchorElement){
	a
}