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
// $(function () {
// 	$('#btn1').click(function () {
// 		var val = $('input[name=radio1]:checked').val();
// 		$('#msg').text('checked: ' + val);
// 	});
// });

// 2-16
// window.onload = function () {
// 	document.querySelector('#btn1').addEventListener('click', function () {
// 		var radios = document.getElementsByName('radio1');
// 		var str = '';
// 		console.log(radios);
// 		for (var i = 0; i < radios.length; i++) {
// 			if (radios[i].checked) {
// 				str = radios[i].value;
// 				break;
// 			}
// 		}
// 		document.querySelector('#msg').textContent = 'checked: ' + str
// 	});
// }

// 2-18 each
// $(function () {
// 	$('#btn1').click(function () {
// 		var msg = 'selected: ';
// 		$('#sell option:selected').each(function () {
// 			msg += $(this).val() + ' ';
// 		});
// 		$('#msg').text(msg);
// 	});
// });

// 2-19 without jQuery
window.onload = function () {
	document.querySelector('#btn1').addEventListener('click', function () {
		var sel = document.querySelector('#sell');
		var opts = sel.getElementsByTagName('option');
		var msg = 'selected: ';
		for (var i = 0; i < opts.length; i++){
			if (opts[i].selected) {
				msg += opts[i].value + ' ';
			}
		}
		document.querySelector('#msg').textContent = msg;
	});
}