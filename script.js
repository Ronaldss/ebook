function gerarInicial(){
            var aqui = document.querySelector("p#casa")
            var obj = document.createElement("img")
            obj.setAttribute(`src`,`1000.png`)
            obj.setAttribute('alt','Erro no carregamento...')
            obj.setAttribute('id','idImg')
            obj.style.height = '200px'
            obj.style.borderRadius = '5%'
            aqui.appendChild(obj)
        }
        
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
            aqui.appendChild(obj)
            delet()
        }
        function avancar(){
            exibirImg()
            x++
            if (x>=8){
                x = 0
            }
        }
        function voltar(){
            if (x<=-1){
                x = 2
            }
            exibirImg()
            x--  
        }
        function delet(){
            var node = document.getElementById("idImg")
            if (node.parentNode) {
            node.parentNode.removeChild(node)
            }else{console.log("Não havia nada aqui!")}
        }