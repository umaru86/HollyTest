//var test;
//test = 810;
//
//document.write("<p>============ここから実行結果============</p>");
//document.write("<p>" + (5 % 3) + "</p>");
//document.write("<p>============ここまで実行結果============</p>");
//

//--------------------------------------------------------------

var inputData1 = document.getElementById('input1');
var inputData2 = document.getElementById('input2');
//var result = document.getElementById('result');
var checkButton = button1.addEventListener('click', submitClick);

function submitClick() {
	result1.innerText = "たし算した結果：" + (parseInt(inputData1.value) + parseInt(inputData2.value));
	result2.innerText = "引き算した結果：" + (inputData1.value - inputData2.value);
	result3.innerText = "かけ算した結果：" + (inputData1.value * inputData2.value);
	result4.innerText = "割り算した結果：" + (inputData1.value / inputData2.value);
	result5.innerText = "そのまま出力：" + (inputData1.value) +  " " + (inputData2.value);
}
