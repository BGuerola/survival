import { GameObjects } from "phaser";

export class Menu extends Phaser.Scene{

    private width: number;
    private height: number;

    constructor(){
        super('Menu');
    }

    init(){
        this.width=this.cameras.main.width;
        this.height=this.cameras.main.height;
    }

    create(){
        const logo = this.add.image(this.width/2, 70, 'logo1');

        const JugarTxt: Phaser.GameObjects.Text=this.add.text(50, this.height/2, 'JUGAR', 
            {fontSize:'32px', color:'#FFFFFF'}).setInteractive();
        
        this.cambiarEscena(JugarTxt, 'Nivel1');
    }

    //Quan se polse s'anirà a l'escena indicada
    cambiarEscena(jugarTxt: GameObjects.Text, escena: string) {
        jugarTxt.on('pointerdown', ()=>{
            this.scene.start(escena);
            this.scene.start('HUD');
            this.scene.bringToTop('HUD');
        })
    }
}