const DOMelement = (selector) => {
	return document.querySelector(selector);
};

const result = DOMelement("#res");
const btn0 = DOMelement("#btn0");
const btn1 = DOMelement("#btn1");
const btnClr = DOMelement("#btnClr");
const btnEql = DOMelement("#btnEql");
const btnSum = DOMelement("#btnSum");
const btnSub = DOMelement("#btnSub");
const btnMul = DOMelement("#btnMul");
const btnDiv = DOMelement("#btnDiv");

btn0.addEventListener("click", () => {
	result.innerHTML += btn0.innerText;
});

btn1.addEventListener("click", () => {
	result.innerHTML += btn1.innerText;
});

btnClr.addEventListener("click", () => {
	result.innerHTML = "";
});

btnEql.addEventListener("click", () => {
	const exprArr = result.innerText.split(/\D/);
	const operator = result.innerText.match(/\D+/)[0];
	const expr = parseInt(exprArr[0], 2) + operator + parseInt(exprArr[1], 2);
	result.innerHTML = eval(expr).toString(2);
});

btnSum.addEventListener("click", () => {
	result.innerHTML += btnSum.innerText;
});

btnSub.addEventListener("click", () => {
	result.innerHTML += btnSub.innerText;
});

btnMul.addEventListener("click", () => {
	result.innerHTML += btnMul.innerText;
});

btnDiv.addEventListener("click", () => {
	result.innerHTML += btnDiv.innerText;
});
