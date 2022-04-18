'use strict';
//VARIÁVEIS
let somaMussarela = 0;
let somaMista = 0;
let somaCalabresa
let vendaMussarela= 0.00;
let vendaMista= 0.00;
let vendaCalabresa= 0.00;

//BOTÕES
let btnVendas = document.getElementById("vendas")
let btnEstorno = document.getElementById("estorno")
let btnPlanilha = document.getElementById("export")

//EVENTOS
btnVendas.addEventListener('click', venda, false);
btnEstorno.addEventListener('click', estorno, false);
btnPlanilha.addEventListener('click', planilha, false);

//FUNÇÕES
function venda(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela+1;
        vendaMussarela = vendaMussarela + 25.00;
        //MANDANDO AS INFORMAÇÕES PARA O HTML - MANIPULAÇÃO DO DOM
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    } else if(document.getElementById('mista')){
        somaMista = somaMista+1;
        vendaMista = vendaMista + 25.00;
        //MANDANDO AS INFORMAÇÕES PARA O HTML - MANIPULAÇÃO DO DOM
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    } else if(document.getElementById('calabresa')){
        somaCalabresa = somaCalabresa+1;
        vendaCalabresa = vendaCalabresa + 25.00;
        //MANDANDO AS INFORMAÇÕES PARA O HTML - MANIPULAÇÃO DO DOM
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

function estorno(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela = somaMussarela-1;
        vendaMussarela = vendaMussarela - 25.00;
        if(somaMussarela<0){
            somaMussarela=0;
            vendaMussarela=0.00;
        }
        //MANDANDO AS INFORMAÇÕES PARA O HTML - MANIPULAÇÃO DO DOM
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    } else if(document.getElementById('mista')){
        somaMista = somaMista-1;
        vendaMista = vendaMista - 25.00;
        if(somaMista<0){
            somaMista=0;
            vendaMista=0.00;
        }
        //MANDANDO AS INFORMAÇÕES PARA O HTML - MANIPULAÇÃO DO DOM
        document.getElementById('resultadoMista').innerHTML = somaMista;
        document.getElementById('vendaMista').innerHTML = vendaMista.toFixed(2);
    } else if(document.getElementById('calabresa')){
        somaCalabresa = somaCalabresa-1;
        vendaCalabresa = vendaCalabresa - 25.00;
        if(somaCalabresa<0){
            somaCalabresa=0;
            vendaCalabresa=0.00;
        }
        //MANDANDO AS INFORMAÇÕES PARA O HTML - MANIPULAÇÃO DO DOM
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    }
}

    function planilha(e){
        //TableToExcel.convert(documet.getElementById('table'));
        TableToExcel.convert(document.getElementById("table"));
    }