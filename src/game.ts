import 'phaser';
import Configuracion from './configuracion';

export class Juego extends Phaser.Game{
    constructor(configuracion: Phaser.Types.Core.GameConfig){
        super(configuracion);
    }
}



//llança el joc
window.addEventListener('load', ()=>{
    const juego = new Juego(Configuracion); 
})

