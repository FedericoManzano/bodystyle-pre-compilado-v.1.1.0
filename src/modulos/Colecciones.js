class Coleccion {
   

    acordeon(c){
        $(c.contexto + " .l-colapso .lista-item").each(function() {
            if(!$(this).hasClass("desactivado") && $($(this)).data("target") !== undefined){
                $(this).append("<i class='f-derecha'></i>");
                $(this).append("<i class='f-abajo'></i>");

                $(this).children(".f-derecha").css("border-left", "5px solid " + c.colorFlechas)
                $(this).children(".f-derecha").css("border-bottom", "5px solid transparent")
                $(this).children(".f-derecha").css("border-top", "5px solid transparent")


                $(this).children(".f-abajo").css("border-top", "5px solid " + c.colorFlechas)
                $(this).children(".f-abajo").css("border-left", "5px solid transparent")
                $(this).children(".f-abajo").css("border-right", "5px solid transparent")


                $(this).children(".f-derecha").css("top", 13);
                $(this).children(".f-abajo").css("top", 13);

                $(this).children(".f-abajo").hide();
                $(c.contexto + " .l-colapso > .desplegable").hide();
            }
        })
    }


    desplegable(c) {

        var cerrarTodos =  () => {
            $(c.contexto + " .l-colapso .lista-item").each(function(){
                $(($(this)).data("target")).slideUp(300)
                $(this).children(".f-abajo").hide()
                $(this).children(".f-derecha").show()
            })
        }

        $(c.contexto + " .l-colapso .lista-item").click(function(){
            if($(this).hasClass("desactivado"))
                return
            cerrarTodos(c)
            var desplegable = $($(this).data("target"))
            if($(desplegable).is(":visible")){
                $(this).children(".f-abajo").hide()
                $(this).children(".f-derecha").show()
                $(desplegable).slideUp(300)
            }else {
                $(this).children(".f-derecha").hide()
                $(this).children(".f-abajo").show()
                $(desplegable).slideDown(300)
            }
        })
    }

    cargarConfiguracion(c){

        $(c.contexto + " .lista-contenedor").addClass(c.colorFondo)
        $(c.contexto + " a").addClass(c.colorTexto)
        $(c.contexto + " p").addClass(c.colorTexto)
        $(c.contexto + " b").addClass(c.colorTexto)
        $(c.contexto + " i").addClass(c.colorTexto)
        $(c.contexto + " .lista-cabecera").addClass(c.colorTexto)
        $(c.contexto + " .lista-pie").addClass(c.colorTexto)
        $(c.contexto + " .lista-contenedor .desplegable ul li a").addClass(c.colorTexto)
    }


    iniciar({contexto,colorFondo, colorTexto, colorFlechas} = {
        contexto: "SinContexto",
        colorFondo: "fd-blanco",
        colorTexto: "c-negro",
        colorFlechas: "#000"
    }){
        var c = {
            contexto: contexto,
            colorFondo: colorFondo,
            colorTexto: colorTexto,
            colorFlechas: colorFlechas
        }

        this.cargarConfiguracion(c)
        this.acordeon(c)
        this.desplegable(c)
    }
}

export default Coleccion