let arr = [];

let a = new Audio('a.wav');
arr.push(a);
let b = new Audio('b.wav');
arr.push(b);
let c = new Audio('c.wav');
arr.push(c);
let d = new Audio('d.wav');
arr.push(d);
let e = new Audio('e.wav');
arr.push(e);
let f = new Audio('f.wav');
arr.push(f);
let g = new Audio('g.wav');
arr.push(g);

function fun() {
	for (let i = 0; i < arr.length; i++) {
		arr[i].play();
	}
}