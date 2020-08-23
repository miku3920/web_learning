<?php
$data = [
	[
		'name' => 'Taro',
		'mail' => 'taro@yamada',
		'tel' => '090-999-999'
	], [
		'name' => 'Hanako',
		'mail' => 'hanako@flower',
		'tel' => '080-888-888'
	], [
		'name' => 'Sachiko',
		'mail' => 'sachiko@happy',
		'tel' => '070-777-777'
	]
];

$id = intval($_GET['id']);
if ($id < count($data)) {
	$result = $data[$id];
} else {
	$result = $data[0];
}
header('Content-type:application/json; charset=utf8');
echo json_encode($result);