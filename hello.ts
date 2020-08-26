enum Season { spring, summer, autumn, winter }

let s: Season = Season.summer

switch (+s) {
	case Season.spring:
		document.write('<h1>Spring</h1>')
		break
	case Season.summer:
		document.write('<h1>Summer</h1>')
		break
	case Season.autumn:
		document.write('<h1>Autumn</h1>')
		break
	case Season.winter:
		document.write('<h1>Winter</h1>')
		break
}

document.write('<p>此頁面會顯示目前季節。</p>')