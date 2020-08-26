function total(...item: number[]): string{
	let re: number = 0
	for (let i: number = 0; i < item.length; i++){
		re += item[i];
	}
	return String(re);
}

function doClick(): void {
	let msg: Element = document.querySelector('#msg')
	msg.innerHTML = total(1,2,3,4,5)
}