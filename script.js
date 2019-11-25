function gerarInicial(){
            var aqui = document.querySelector("p#casa")
            var obj = document.createElement("img")
            obj.setAttribute(`src`,`1000.png`)
            obj.setAttribute('alt','Erro no carregamento...')
            obj.setAttribute('id','idImg')
            obj.style.height = '200px'
            obj.style.borderRadius = '5%'
            console.log('Nada')
            aqui.appendChild(obj)
        }
        y = 0
        x = 0
        var pag = [] 
        pag[0] = "0.gif"
        pag[1] = "1.png"
        pag[2] = "2.gif"
        pag[3]= "3.jpeg"
        pag[4]= "4.jpg"
        pag[5]= "5.jpg"
        pag[6]= "6.jpg"
        pag[7]= "7.png"
        function exibirImg(){
            var aqui = document.querySelector("p#casa")
            var obj = document.createElement("img")
            obj.setAttribute(`src`,`${pag[x]}`)
            obj.setAttribute('id','idImg')
            obj.style.height = '200px'
            console.log(`Página: ${pag[x]}.`)
            aqui.appendChild(obj)
            delet()
        }

        function avancar(){
        
            x = x + 1
            if (x>=8){
                x = 0
            }
            if(y == 0){
                y += 1 
                x = 0;
            }
            exibirImg()

        }
        function voltar(){
            if (x<=0){
                x = 7
            }
            x = x - 1
            exibirImg()
        }
        function delet(){
            var node = document.getElementById("idImg")
            if (node.parentNode) {
            node.parentNode.removeChild(node)
            }else{console.log("Nada aqui!")}
        }
//--------------------------------------------------------------------
var corpo = document.querySelector("p#bt")
var bt = document.createElement("input")
bt.setAttributes('type','button')
bt.setAttributes('value','Mudar')
corpo.appendChild(bt)
