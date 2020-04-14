/*!
 * BodyStyle v1.0.0
 * Copyright Federico Manzano
 * Licencia MIT
 * Repositorio (https://github.com/FedericoManzano/BodyStyle---Librer-a-de-estilos)
 */

 
import MenuResp from "./modulos/MenuSuperior"
import Modal from "./modulos/Modal"
import Waves from  "./modulos/Waves"
import DropDown from "./modulos/Dropdown"
import BotonFlotante from "./modulos/BotonFlotante"
import Toast from "./modulos/Toast"
import SidebarBarra from "./modulos/Sidebar-barra"
import SidebarLateral from "./modulos/Sidebar-lateral"
import SidebarFija from "./modulos/SidebarFija"
import MenuColapso from "./modulos/Menu-colapso"
import ScrollSpy from "./modulos/ScrollSpy"
import ToolTips from "./modulos/ToolTips"
import Imagenes from "./modulos/Imagenes"
import Range from "./modulos/Range"
import Slider from "./modulos/Slider"
import Paralax from "./modulos/Paralax"
import InputFile from "./modulos/InputFile"
import BotonInicio from "./modulos/BotonInicio"
import Alerta from "./modulos/Alerta"
import Template from "./modulos/Template"
import Tab from "./modulos/Tabs"
import GruposInput from "./modulos/GruposInput"
import EfectoScroll from "./modulos/EfectoScroll"
import Desactivado from "./modulos/Desactivado"
import Coleccion from "./modulos/Colecciones"
import ColeccionFlotante from "./modulos/ColeccionFlotante"
import EfectoHoverBorde from "./modulos/EfectoHoverBorde"


(function(){
    Waves.iniciar()
    MenuColapso.iniciar()
    Range.iniciar()
    InputFile.iniciar()
    Alerta.iniciar()
    Template.iniciar()
    GruposInput.iniciar()
    Desactivado.iniciar();


    var focusInput = () => {
        $(".input-icon input").focus(function() {
            $(this).parent().css("border", "1px solid rgba(135, 217, 255)")
            $(this).parent().children(".elemento").css("color", "#212121")
        })

        $(".input-icon input").blur(function() {
            $(this).parent().css("border", "1px solid rgb(163, 163, 163)")
            if($(this).val() === "")
                $(this).parent().children(".elemento").css("color", "rgb(131, 131, 131)")
            else 
                $(this).parent().children(".elemento").css("color", "#212121")
        })
    }
    var MenuSuperior = (config)=> MenuResp.iniciar(config)

    var ColeccionInit = () => {
        return new Coleccion
    } 

    /**
     * Sidebar fija 
     */
    
    var SidebarFijaInit = () => SidebarFija.iniciar()


    var DesplegarSidebarFija = ()=> {
        return SidebarFija
    }
    
    var ParalaxInit = () => Paralax.iniciar()
    
    /**
     * Sidebar movil 
     */
    var SidebarInit = () => {
        SidebarBarra.iniciar()
        SidebarLateral.iniciar()
    }


    var BotonFlotanteInit = (config) => {
        BotonFlotante.iniciar(config)
    }

    /**
     * 
     * ScrollSpy 
     */
    var ScrollSpyInit = (config) => ScrollSpy.iniciar(config)



    var ModalInit = function(conf){
        Modal.iniciar(conf)
    }

    var ImagenesInit = ()=> {
        Imagenes.iniciar()
    }


    var BotonInicioInit = () => {
        BotonInicio.iniciar()
    }

    var TabInit = () => {
        return new Tab
    }

    var EfectoScrollInit = () => {
        return new EfectoScroll
    }

    var ColeccionFlotanteInit = () => {
        return new ColeccionFlotante
    }

    var EfectoHoverBordeInit = () => {
        return new EfectoHoverBorde
    }

    var AutoInit = ()=> {
        MenuSuperior()
        SidebarInit() // Sidebar Movil
        ModalInit()
        DropDownInit({})
        SidebarFijaInit() // Sidebar fija
        ScrollSpyInit()
        BotonFlotanteInit()
        ImagenesInit()
        focusInput()
        SliderInit()
        ParalaxInit()
        ToolTipsInit()
    }


    var SliderInit = (config) => {
        Slider.iniciar(config)
    }

    var Deshabilitar = () => {
        desactivar(".deshabilitado")
        desactivar(".input-cargando")
        desactivar(".input-cargando input")
        desactivar(".b-rojo-cargando")
        desactivar(".b-verde-cargando")
        desactivar(".b-azul-cargando")
        desactivar(".b-gris-cargando")
        desactivar(".b-negro-cargando")
        desactivar(".b-blanco-cargando")
    }
    
    var DropDownInit = (config) => {
        DropDown.iniciar(config)
    }

    var ToolTipsInit = () => {
        ToolTips.iniciar()
    }


    var BS = {
        MenuSuperior: (config) => MenuSuperior(config),
        ModalInit: (config) => ModalInit(config),
        DropDownInit: (config) => DropDownInit(config),
        SidebarFijaInit: ()=> SidebarFijaInit() , //Sidebar fija
        AutoInit: () => AutoInit(),
        Toast: (html, clases, tiempo) => Toast.ejecutar(html, clases, tiempo),
        SidebarInit: () => SidebarInit(), /// Sidebar movil
        ScrollSpyInit: (config) => ScrollSpyInit(config),
        BotonFlotanteInit: (config)=> BotonFlotanteInit(config),
        ImagenesInit: () => ImagenesInit(),
        Deshabilitar: () => Deshabilitar(),
        FocusInput: () => focusInput(),
        SliderInit: (config) => SliderInit(config),
        ParalaxInit: () => ParalaxInit(),
        BotonInicioInit: () => BotonInicioInit(),
        TabInit: () => TabInit(),
        ToolTipsInit: () =>  ToolTipsInit(),
        EfectoScrollInit: () => EfectoScrollInit(),
        DesplegarSidebarFija: () => DesplegarSidebarFija(),
        ColeccionInit: () => ColeccionInit(),
        ColeccionFlotanteInit: () => ColeccionFlotanteInit(),
        EfectoHoverBordeInit: () => EfectoHoverBordeInit()
    }

    window.BS = BS
})()

export default BS;