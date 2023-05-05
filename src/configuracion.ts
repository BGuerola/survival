import Nivel1 from './escenas/nivel1';
import Carga from './escenas/carga';
import { Menu } from './escenas/menu';
import HUD from './escenas/hud';


const Configuracion = {
    type: Phaser.AUTO, //Puede escoger o Canvas o GL, pero con AUTO escoge el más óptimo.
    backgroundColor: '#125555', //color del fons
    width: screen.width, //ample i alt del joc 800
    height: screen.height, //600,
    scene: [Carga, Menu, Nivel1, HUD] //escena inicial
};

export default Configuracion;