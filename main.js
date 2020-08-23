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
// window.onload = function () {
// 	document.querySelector('#btn1').addEventListener('click', function () {
// 		var sel = document.querySelector('#sell');
// 		var opts = sel.getElementsByTagName('option');
// 		var msg = 'selected: ';
// 		for (var i = 0; i < opts.length; i++){
// 			if (opts[i].selected) {
// 				msg += opts[i].value + ' ';
// 			}
// 		}
// 		document.querySelector('#msg').textContent = msg;
// 	});
// }

// 2-21 css
// $(function () {
// 	$('#btn1').click(function () {
// 		$('li').css('color', 'white').css('background','red');
// 	});
// });

// 2-24 class
// var flg = false;
// $(function () {
// 	$('#btn1').click(function () {
// 		if (flg) {
// 			$('li[name=a]').addClass('A').removeClass('B');
// 			$('li[name=b]').addClass('B').removeClass('A');
// 		} else {
// 			$('li[name=a]').addClass('B').removeClass('A');
// 			$('li[name=b]').addClass('A').removeClass('B');
// 		}
// 		flg = !flg;
// 	});
// });

// 2-27 create element
// $(function () {
// 	$('#btn1').click(function () { 
// 		var obj = $('<p>' + $('#text1').val() + '</p>');
// 		$('#msg').append(obj);
// 	});
// });

// 2-30 wrap
// $(function () {
// 	$('#btn1').click(function () {
// 		$('p[name=msg]').wrap('<div></div>');
// 	});
// });

// 2-31 wrapAll
// $(function () {
// 	$('#btn1').click(function () { 
// 		$('p[name=msg]').wrapAll('<div></div>');
// 	});
// });

// 2-33 Ajax load
// $(function () {
// 	$('#btn1').click(function () {
// 		$('#msg').load('data.txt');
// 	});
// });

// 2-33 Ajax get
// $(function () {
// 	$('#btn1').click(function () {
// 		$.get('data.txt', function (response, status, xhr) {
// 			var ol = $('<ol></ol>');
// 			var arr = response.split('\n');
// 			for (var item in arr) {
// 				ol.append('<li>' + arr[item] + '</li>')
// 			}
// 			$('#msg').append(ol);
// 		});
// 	});
// });

// 2-37 Ajax getJSON
// $(function () {
// 	$('#btn1').click(function () {
// 		var id = $('#text1').val();
// 		$.getJSON("data.php", { 'id': id }, function (response, status, xhr) {
// 			var ol = $('<ul></ul>');
// 			ol.append('<li>姓名：' + response.name + '</li>');
// 			ol.append('<li>電郵信箱：' + response.mail + '</li>');
// 			ol.append('<li>電話號碼：' + response.tel + '</li>');
// 			$('#msg').empty().append(ol);
// 		});
// 	});
// });

// 2-39 hide & show
$(function () {
	var flg = false;
	$('#btn1').click(function () {
		if (flg) {
			$('#image').show(500);
		} else {
			$('#image').hide(500);
		}
		flg = !flg;
	});
});