import Constantes from "../constantes";

export default class HUD extends Phaser.Scene{

private vidasTxt : Phaser.GameObjects.Text;
private puntuacionTxt : Phaser.GameObjects.Text;

private width: number;
private height: number;

constructor(){
    super('HUD');
}

init(){
    this.width = this.cameras.main.width;
    this.height = this.cameras.main.height;
}

create(): void {

    const nivel1: Phaser.Scene=this.scene.get(Constantes.ESCENAS.NIVEL1);
    nivel1.events.on(Constantes.EVENTOS.VIDAS, this.actualizavidas, this);
    nivel1.events.on(Constantes.EVENTOS.PUNTUACIÓN, this.actualizaPuntuacion, this);

    this.vidasTxt=this.add.text(20, 20, Constantes.HUD.VIDAS+': 3', 
    {fontSize:'32px', color:'#FFFFFF'});

    this.puntuacionTxt = this.add.text(5*(this.width/6), 20, '000', {fontSize: '20px', color: '#FFFFFF'});


}
    private actualizavidas(): void {
        this.vidasTxt.text = Constantes.HUD.VIDAS+": "+this.registry.get(Constantes.HUD.VIDAS);
    }

    private actualizaPuntuacion():void{
        this.puntuacionTxt.text = Phaser.Utils.String.Pad(this.registry.get(Constantes.REGISTRO.PUNTUACION), 3, '0',1);
    }


}