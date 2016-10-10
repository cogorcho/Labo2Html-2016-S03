var codigoq = [
{"codigo":"QRA","texto":"Mi estación se llama...","itexto":"¿Como se llama su estación?"},
{"codigo":"QRG","texto":"Mi frecuencia es...","itexto":"¿Cuál es su frecuencia?"},
{"codigo":"QRK","texto":"Su señal es ininteligible.","itexto":"¿Es mi señal inteligible?"},
{"codigo":"QRL","texto":"Esta frecuencia está ocupada.","itexto":"¿Esta frecuencia está ocupada?"},
{"codigo":"QRM","texto":"Interferencia artificial.","itexto":"¿Tiene interferencias?"},
{"codigo":"QRN","texto":"Ruido de electricidad estática o atmosférica.","itexto":"¿Tiene problemas de estática?"},
{"codigo":"QRO","texto":"Aumentar potencia de emisión.","itexto":"¿Puede aumentar la potencia de emisión?"},
{"codigo":"QRP","texto":"Bajar potencia de emisión.","itexto":"¿Puede bajar la potencia de emisión?"},
{"codigo":"QRQ","texto":"Aumento la velocidad de transmisión.","itexto":"¿Puede aumentar la velocidad de transmisión?"},
{"codigo":"QRS","texto":"Envío el código Morse más despacio.","itexto":"¿Puede enviar el código Morse más despacio?"},
{"codigo":"QRT","texto":"Ceso la transmisión.","itexto":"¿Puede cesar su transmisión?"},
{"codigo":"QRV","texto":"Listo para recibir.","itexto":"¿Está Ud. listo para recibir?"},
{"codigo":"QRX","texto":"Esperar un momento, lo llamaré nuevamente.","itexto":"¿Puede Ud. esperar a ser llamado nuevamente?"},
{"codigo":"QRY","texto":"Turno.","itexto":"¿Cuándo es su turno?"},
{"codigo":"QRZ","texto":"Identificación.","itexto":"¿Quién me llama?"},
{"codigo":"QSA","texto":"Intensidad de señal.","itexto":"¿Cual es su intensidad de señal?"},
{"codigo":"QSB","texto":"La señal se desvanece.","itexto":"¿La señal se desvanece?"},
{"codigo":"QSL","texto":"Acuse de recibo.","itexto":"¿Acusa Ud. recibo?"},
{"codigo":"QSO","texto":"Establecer conversación con...","itexto":"¿Puede Ud. establecer comunicación con...?"},
{"codigo":"QSY","texto":"Cambio de frecuencia a...","itexto":"¿Podemos cambiar de frecuencia a...?"},
{"codigo":"QTC","texto":"Tengo mensaje para terceros","itexto":"¿Tiene mensaje para terceros?"},
{"codigo":"QTH","texto":"Posición geográfica o Ubicación","itexto":"¿Cuál es su posición o ubicación?"},
{"codigo":"QTR","texto":"Hora exacta.","itexto":"¿Cuál es la hora exacta?"},
{"codigo":"QRU","texto":"Estado","itexto":"¿Cuál es su estado?"}]

var cuantos = codigoq.length;

function check() {
    console.log(cuantos);
}

check();

function listar() {
    for(var i = 0; i < cuantos; i++) {
       console.log(codigoq[i]); 
    }
}

//listar();

function armarTabla() {
    var tabla = document.createElement('table');
    var encabezado, cuerpo, fila, codigo, declarativa, interrogativa;

    encabezado = tabla.createTHead();
    fila = encabezado.insertRow(0); 
    codigo = fila.insertCell(0);
    declarativa = fila.insertCell(1);
    interrogativa = fila.insertCell(2);
    codigo.innerHTML = 'Codigo';
    declarativa.innerHTML = 'Declarativa';
    interrogativa.innerHTML = 'Interrogativa';
    
    cuerpo = tabla.createTBody();
    for(var i = 0; i < cuantos; i++) {
        fila = cuerpo.insertRow(0); 
        codigo = fila.insertCell(0);
        declarativa = fila.insertCell(1);
        interrogativa = fila.insertCell(2);
        codigo.innerHTML = codigoq[i].codigo;
        declarativa.innerHTML = codigoq[i].texto;
        interrogativa.innerHTML = codigoq[i].itexto;
    }
    document.getElementById("principal").appendChild(tabla);

    tabla.addEventListener('click', rowSelected);
}

armarTabla();    

function rowSelected(ev) {
    var fila = ev.srcElement.parentElement;
    var obj = {}
    obj.codigo = fila.childNodes[0].innerHTML;
    obj.declarativa = fila.childNodes[1].innerHTML;
    obj.interrogativa = fila.childNodes[2].innerHTML;

    var cq =    "Codigo: " + obj.codigo + 
                "\nDeclarativa: " +  obj.declarativa +
                "\nInterrogativa: " + obj.interrogativa;
    alert(cq);
}