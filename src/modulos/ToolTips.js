(function(){

    // Elemento tips
    var elemento = null;

    // Separación del tips respecto al origen
    const margin = 10


    const posicionamientoInicialX = (origen)=> {
        var x = $(origen).offset().left
        $(elemento).css("left", x)
        return x
    }

    const posicionamientoInicialY = (origen)=> {
        var y = $(origen).offset().top
        $(elemento).css("top", y)
        return y
    }




    /**
     * Validación del espacio encima del elemento origen 
     * respecto al elemento toolTips 
     * @param {Elemento origen del efecto hover} origen 
     * @return true / false
     */
    const arriba = (origen) => {
        const offsetTopOrigen = $(origen).offset().top
        const wScrollTop = $(window).scrollTop() 
        const tipsHeight = $(elemento).outerHeight()
        return offsetTopOrigen - wScrollTop >  tipsHeight + margin
    }


    /**
     * Validación del espacio debajo del elemento origen 
     * respecto al elemento toolTips 
     * @param {Elemento origen del efecto hover} origen 
     * @return true / false
     */
    const abajo = (origen) => {
        const windowHeight = $(window).height()
        const wScrollTop = $(window).scrollTop() 
        const origenOffsetTop = $(origen).offset().top
        const origenHeight = $(origen).outerHeight()
        const tipsHeight = $(elemento).outerHeight()
        return windowHeight + wScrollTop - 
                (origenOffsetTop + origenHeight)  
                                > tipsHeight + margin
    }


    /**
     * Validación del espacio derecha del elemento origen 
     * respecto al elemento toolTips 
     * @param {Elemento origen del efecto hover} origen 
     * @return true / false
     */
    const derecha = (origen) => {
        const windowWidth = $(window).width()
        const origenOffsetLeft = $(origen).offset().left
        const origenWidth = $(origen).width()
        const tipsWidth = $(".tips").width()
        return windowWidth - origenOffsetLeft - origenWidth - 80 > tipsWidth + 5
    }


    /**
     * Validación del espacio izquierda del elemento origen 
     * respecto al elemento toolTips 
     * @param {Elemento origen del efecto hover} origen 
     * @return true / false
     */
    const izquierda = (boton) => {
        return $(boton).offset().left > $(".tips").width() + 5
    }


    /**
     * Validar los datos de entrada posición e información
     * @param {Posición del tips } posicion 
     * @param {Info a mostrar por el tips} info 
     */
    const validarTips = (posicion, info) => {
        if( posicion !== "arriba"       && 
            posicion !== "abajo"        &&
            posicion !== "izquierda"    && 
            posicion !== "derecha" )
                return false
        if(info === "" || info === undefined)
            return false
        return true
    }


    var dameMueca = (clase, pos1, valor1, pos2, valor2) => {
        var mueca = $("<span class='"+ clase +"'></span>")
        mueca.css(pos1, valor1)
        mueca.css(pos2, valor2)
        return mueca
    }

    var reacomodamientoHorizontal = (origen)=> {
        var corr = ($(origen).outerWidth() ) - $(elemento).outerWidth()
        return posicionamientoInicialX(origen) +  Math.round(corr / 2)
    }

    var reacomodamientoVertical = (origen)=> {
        var corr = ($(origen).outerHeight() ) - $(elemento).outerHeight()
        return posicionamientoInicialY(origen) + Math.round(corr / 2)
    }

    var topeIzquierda = ()=> {
        const despIzq = $(elemento).offset().left
        return despIzq <= 0 ? despIzq*-1 : 0
    }

    var topeArriba = ()=> {
        const despArr = $(elemento).offset().top - $(window).scrollTop()
        return despArr <= 0 ? (despArr - margin)*-1 : 0
    }

    var topeDerecha = ()=> {
        const despDer = $(window).width() - $(elemento).offset().left - $(elemento).outerWidth()
        return despDer <= 0 ? Math.round((despDer - margin)) : 0
    }


    var posicionamientoArriba = (origen) => {

        /** Coloacar el elemento por encima del origen */
        elemento.css("top", reacomodamientoVertical(origen) - $(elemento).outerHeight() - 5)
        elemento.append(dameMueca("mueca-aba","bottom", -5, "left", "calc(50% - 2.5px)"))

        // Calculo del offset respecto a la derecha y a la izquierda 
        // del elemento
        var di = topeIzquierda()
        var td = topeDerecha() 

        if(di !== 0){
            elemento.css("left",  reacomodamientoHorizontal(origen) + di)
            td=0
        }
        if(td !== 0)
            $(elemento).css("left",  reacomodamientoHorizontal(origen) + td )
        
        // efecto traslate
        $(".tips").css({transform: 'translateY(-12px)'})
    }

    var posicionamientoAbajo = (origen) => {
        elemento.css("top", reacomodamientoVertical(origen) + $(origen).outerHeight() + 5)
        elemento.append(dameMueca("mueca-arr","top", -5, "left", "calc(50% - 2.5px)"))
        var di = topeIzquierda()
        var td = topeDerecha() 
        if(di !== 0){
            elemento.css("left",  reacomodamientoHorizontal(origen) + di)
            td=0
        }
        if(td !== 0)
            $(elemento).css("left",  reacomodamientoHorizontal(origen) + td )
        $(".tips").css({transform: 'translateY(12px)'})
    }


    var posicionamientoIzquierda = (origen) => {
        elemento.css("left", reacomodamientoHorizontal(origen) - $(elemento).width() - 20)
        elemento.append(dameMueca("mueca-der","right", -5, "top", "calc(50% - 3.5px)"))
        var da = topeArriba()
        if(da !== 0)
            $(elemento).css("top", reacomodamientoVertical(origen) + da)
        $(".tips").css({transform: 'translateX(-12px)'})
    }


    var posicionamientoDerecha = (origen) => {
        elemento.css("left", reacomodamientoHorizontal(origen) + $(elemento).width() + 20)
        elemento.append(dameMueca("mueca-izq","left", -5, "top", "calc(50% - 3.5px)"))
        var da = topeArriba()
        if(da !== 0)
            $(elemento).css("top", reacomodamientoVertical(origen) + da)
        $(".tips").css({transform: 'translateX(12px)'})
    } 



    const inicializar = () => {

        /** Efecto hover  */
        $(".tips-ele").hover(function() {
            var posicion = $(this).data("posicion");
            var contenido = $(this).data("tips");

            // Validar campos de entrada
            if(!validarTips(posicion, contenido))
                return 

            // Crear elemento tips de manera dinámica
            elemento = $("<div class='tips'></div>")
            elemento.html(contenido)
            elemento.css("min-width", $(this).outerWidth())
            elemento.appendTo("body")


            /**
             * Selección de la ubicación del tips donde 
             * está el elemento origen
             */
            elemento.css("left",reacomodamientoHorizontal(this))
            elemento.css("top",reacomodamientoVertical(this))
            switch (posicion) {
                case "arriba":
                    if(arriba(this)){
                        posicionamientoArriba(this)
                    }else if(abajo(this)){
                        posicionamientoAbajo(this)
                    }else if(izquierda(this)){
                        posicionamientoIzquierda(this)
                    }else if(derecha(this)){
                        posicionamientoDerecha(this)
                    }
                  break;
                case "abajo":
                    if(abajo(this)){
                        posicionamientoAbajo(this)
                    }else if(arriba(this)){
                        posicionamientoArriba(this)
                    }else if(izquierda(this)){
                        posicionamientoIzquierda(this)
                    }else if(derecha(this)){
                        posicionamientoDerecha(this)
                    }
                  break;
                case "izquierda":
                    if(izquierda(this)){
                        posicionamientoIzquierda(this)
                    }else if(derecha(this)){
                        posicionamientoDerecha(this)
                    }else if(arriba(this)){
                        posicionamientoArriba(this)
                    }else if(abajo(this)){
                        posicionamientoAbajo(this)
                    }
                  break;
                case "derecha":
                    if(derecha(this)){
                        posicionamientoDerecha(this)
                    }else if(izquierda(this)){
                        posicionamientoIzquierda(this)
                    }else if(arriba(this)){
                        posicionamientoArriba(this)
                    }else if(abajo(this)){
                        posicionamientoAbajo(this)
                    }
                  break;
            }

            
        }, function() {
            if(elemento === null)
                return
            elemento.remove() // Destrucción del tips
            elemento = null;
        })
    }

    var ToolTips = {
        iniciar: () => {
            inicializar()
        }
    }

    window.ToolTips = ToolTips;
})()

export default ToolTips;