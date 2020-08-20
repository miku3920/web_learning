// 2-8
// window.onload = function () {
// 	document.querySelector('#msg').textContent='此為未使用 jQuery 的畫面。'
// }

// 2-9
// $(function () {
// 	$('#msg').text('此為使用 jQuery 顯示的文字');
// });

// 2-10
// $(function () {
// 	$('#msg').html('這是<a href="http://google.com">Link</a>的範例。');
// });

// 2-12
// $(function () {
// 	$('#btn1').click(function () {
// 		var str = $('#text1').val();
// 		$('#msg').text('you typed: ' + str + '.');
// 	});
// });

// 2-15
$(function () {
	$('#btn1').click(function () {
		var val = $('input[name=radio1]:checked').val();
		$('#msg').text('checked: ' + val);
	});
});