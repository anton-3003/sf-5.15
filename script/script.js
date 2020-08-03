let text = `
	Жили-были var1 да var2.
	Была у них var3.
	Снесла var3 var4,
	не простое - золотое,
	- var1 бил, бил - не разбил,
	- var2 била, била - не разбила.
	var5 бежала, var6 задела, var4 упало и разбилось.
	var1 плачет, var2 плачет, а var3 кудахчет: 
	"- speach".
			`;

const message = document.getElementById("text"); //позиция текста на странице

// очищение инпутов( в mozilla)

form = document.getElementById('ryaba');
form.var1.value = "";
form.var2.value = "";
form.var3.value = "";
form.var4.value = "";
form.var5.value = "";
form.var6.value = "";
form.speach.value = "";

// вывод оригинального текста, вызывается по клику на кнопку "создать текст"

function createText() {
	
    message.innerHTML = '<pre>' + text + '</pre>';
    
}

// по клику на кнопку с id="change" - меняем значения на новые

$('#change').click(function(){
let newstr = text.replace(/var1/gi, $('#var1').val());
newstr = newstr.replace(/var2/gi, $('#var2').val());
newstr = newstr.replace(/var3/gi, $('#var3').val());
newstr = newstr.replace(/var4/gi, $('#var4').val());
newstr = newstr.replace(/var5/gi, $('#var5').val());
newstr = newstr.replace(/var6/gi, $('#var6').val());
newstr = newstr.replace(/speach/gi, $('#speach').val());

message.innerHTML = '<pre>' + newstr + '</pre>';
});


