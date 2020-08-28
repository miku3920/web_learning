function printm(n: number, f: (_: number) => number): string {
	var re: number = f(n)
	return '<p>結果：' + re + '</p>'
}

function doClick(): void {
	let val: number = +((<HTMLInputElement>document.querySelector('#text1')).value)
	let msg: Element = document.querySelector('#msg')

	let a = (n: number): number => n * n
	let b = (n: number): number => {
		let total: number = 0;
		for (let i: number = 1; i <= n; i++) {
			total += i
		}
		return total
	}
	msg.innerHTML = printm(val, b)
}