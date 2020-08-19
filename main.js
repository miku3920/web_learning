// 2-8
// window.onload = function () {
// 	document.querySelector('#msg').textContent='此為未使用 jQuery 的畫面。'
// }

// 2-9
// $(function () {
// 	$('#msg').text('此為使用 jQuery 顯示的文字');
// });

// 2-10
$(function () {
	$('#msg').html('這是<a href="http://google.com">Link</a>的範例。');
});