function validarIngreso(texto){
    
    if (texto == ''){
        return false;
    } else { 
        return true;
    };

};

function mostrarResultado(resultado){
    var mostrar=resultado
    
    visibilidadElementos();
    
    document.getElementById("resultado").innerHTML = mostrar;
    
};

function visibilidadElementos(booleano){
    var ocultar = booleano
    if (ocultar){
        document.getElementById("imagen-muñeco").style.visibility="hidden";
        document.getElementById("caja-info-resultados").style.visibility="hidden";
    } else {
        document.getElementById("texto-resultado").style.visibility="hidden";
    };

};

function encriptar (){
    var texto=document.getElementById("campo-texto").value;
    var validacion = validarIngreso(texto);
    
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
    
    }else{
        
    };

};

function desencriptar(){
    
};



var botonEncriptar = document.getElementById("boton-encriptar");
var botonDesencriptar = document.getElementById("boton-desencriptar");

botonEncriptar.onclick= function() {encriptar()};
botonDesencriptar.onclick= function() {validarIngreso()};