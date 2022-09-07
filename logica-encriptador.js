function validarIngreso(texto){
    
    if (texto == ''){
        return false;
    } else { 
        return true;
    };

};

function mostrarResultado(resultado){
    var mostrar=resultado;
    document.getElementById("resultado").innerHTML = mostrar;
    
};

function visibilidadElementos(booleano){
    if (booleano){
        document.getElementById("resultado-1").style.visibility="hidden";
        document.getElementById("resultado-2").style.visibility="visible";
    } else {
        document.getElementById("resultado-1").style.visibility="visible";
        document.getElementById("resultado-2").style.visibility="hidden";
    };

};

function encriptar (){
    var texto=document.getElementById("campo-texto").value;
    var validacion = validarIngreso(texto);
    visibilidadElementos(validacion)
    if (validacion){
        var mensaje = ''
        for(var posicion=0; posicion<texto.length; posicion++ ){
            var letra=texto[posicion];
            
            if (letra=='a'){
                mensaje+='ai';
            }
            else if(letra=='e'){
                mensaje+='enter';
            }
            else if(letra=='i'){
                mensaje+='imes';
            }
            else if(letra=='o'){
                mensaje+='ober';
            }
            else if(letra=='u'){
                mensaje+='ufat';
            }
            else if(letra != 'a','e','i','o','u'){
                mensaje+=letra;
            }else{
                mensaje+=''
            };

        }

    mostrarResultado(mensaje);
    };

};

function desencriptar(){
    var texto=document.getElementById("campo-texto").value;
    var validacion = validarIngreso(texto);
    visibilidadElementos(validacion);

    if(validacion){
        var mensaje = '';
        for(var posicion=0; posicion<texto.length; posicion++ ){
            var letra=texto[posicion];
            
            if(letra=="a"){
                mensaje+='a';
                posicion+=1;

            }else if(letra=='e'){
                mensaje+='e';
                posicion+=4;

            }else if( letra=='i'){
                mensaje+='i';
                posicion+=3;

            }else if(letra=='o'){
                mensaje+='o';
                posicion+=3;

            }else if (letra=='u'){
                mensaje+='u';
                posicion+=3;

            } else if(letra!='a','e','i','o','u') {
                mensaje+=letra;

            } else{
                mensaje+='';
            };
        };

    
    };
    mostrarResultado(mensaje);
};


function copiar(){
    var texto = document.getElementById("resultado").value;
    navigator.clipboard.writeText(texto);
};

var botonEncriptar = document.getElementById("boton-encriptar");
var botonDesencriptar = document.getElementById("boton-desencriptar");
var botonCopiar = document.getElementById("boton-copiar");

botonEncriptar.onclick= function() {encriptar()};
botonDesencriptar.onclick= function() {desencriptar()};
botonCopiar.onclick = function() {copiar()};

