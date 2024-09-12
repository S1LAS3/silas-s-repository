var nome =prompt("qual o seu nome??");

function somar() {
    try{
    const minhaImagem = document.getElementById("img");
    var ret =parseInt(document.getElementById ("azul").value);

    var rat =parseInt(document.getElementById ("azul2").value);
    var x = ret+rat;    
    if(isNaN(x)){
        throw"O campo de texto esta vaziu";
    }
    document.getElementById("msg").innerHTML= nome+" o resultado dessa soma é = "+x;
    document.getElementById("resposta").innerHTML= "ORGLHO DE WESLEY ??";    
    minhaImagem.src="./imgs/lara2.png";
    }catch(err){
        document.getElementById("msg").innerHTML=err;
        document.getElementById("resposta").innerHTML= "ACHO QUE HOUVE UM ERRO";  

    }
}
function subtração() {
    try{
    const minhaImagem = document.getElementById("img");
    var ret =parseInt(document.getElementById ("azul").value);
    var rat =parseInt(document.getElementById ("azul2").value);
    var x = ret-rat;
    if(isNaN(x)){
        throw"O campo de texto esta vaziu";
    }
    document.getElementById("msg").innerHTML= nome+" o resultado dessa subtração é = "+x;
    document.getElementById("resposta").innerHTML= "TA CERTO ISSO???";
    minhaImagem.src="./imgs/lara3.png";
    }catch(err){
    document.getElementById("msg").innerHTML=err;
    document.getElementById("resposta").innerHTML= "ACHO QUE HOUVE UM ERRO";  

    }
}
function divisão() {
    try{
    const minhaImagem = document.getElementById("img");
    var ret =parseInt(document.getElementById ("azul").value);
    var rat =parseInt(document.getElementById ("azul2").value);
    var x = ret/rat;
    if(isNaN(x)){
        throw"O campo de texto esta vaziu";
    }
    document.getElementById("msg").innerHTML= nome+" o resultado dessa divisão é = "+x;
    document.getElementById("resposta").innerHTML= "QUE ISSO MEUS AMORES???";
    minhaImagem.src="./imgs/lara4.png";
    }catch(err){
    document.getElementById("msg").innerHTML=err;
    document.getElementById("resposta").innerHTML= "ACHO QUE HOUVE UM ERRO";  

    }
}
function multiplicação() {
    try{
    const minhaImagem = document.getElementById("img");
    var ret =parseInt(document.getElementById ("azul").value);
    var rat =parseInt(document.getElementById ("azul2").value);
    var x = ret*rat;
    if(isNaN(x)){
        throw"O campo de texto esta vaziu";
    }
    document.getElementById("msg").innerHTML= nome+" o resultado dessa multiplicação é = "+x;
    document.getElementById("resposta").innerHTML= "FACIL EXTREMAMENTE FACIL";
    minhaImagem.src="./imgs/lara5.png";
    }catch(err){
    document.getElementById("msg").innerHTML=err;
    document.getElementById("resposta").innerHTML= "ACHO QUE HOUVE UM ERRO";  

    }
}
