function reverse(str){
	var rev=str.split("").reverse().join("");
	console.log(str,"rev is "+rev);
	var r=document.getElementById("reverse");
	r.value=rev;
}
function updateRotated(s){
	var rotateVal=document.getElementById("rotateval").value;
	if(s){
		rotateVal=(rotateVal<1?-1:1)*rotateVal%s.length;
		if(rotateVal>0){
			s=s.substr(s.length-rotateVal,s.length)+s.substr(0,s.length-rotateVal);
		}else if(rotateVal<0){
			s=s.substr(s.length+rotateVal,s.length)+s.substr(0,s.length+rotateVal);
		}
		document.getElementById("rotate").value=s;
	}
}
function updateRotatedText(){
	updateRotated(document.getElementById("input").value);
}
function addRotateVal(){
	var rotateVal=document.getElementById("rotateval");
	var val=parseInt(rotateVal.value?rotateVal.value:0);
	rotateVal.value=++val;
}
function subtractRotateVal(){
	var rotateVal=document.getElementById("rotateval");
	var val=parseInt(rotateVal.value?rotateVal.value:0);
	rotateVal.value=--val;
}
function updateAll(){
	var input=document.getElementById("input");
	var str=input.value;
	reverse(str);
	updateRotated(str);
	document.getElementById("count").innerHTML=str.length;
	var words=str.trim().split(/[\s]+/);
	document.getElementById("words").innerHTML=words.length;
	document.getElementById("revWords").value=words.reverse().join(" ");
	document.getElementById("upper").value=str.toUpperCase();
	document.getElementById("lower").value=str.toLowerCase();
	var binary="", rotated="", charcode=0;
	for (i=0; i < str.length; i++) {
		charcode=str[i].charCodeAt(0);
        binary +=charcode.toString(2);
    }
	document.getElementById("binary").value=binary;
	document.getElementById("md5").innerHTML=md5(str);
}