import Constantes from "../constantes";

export default class Nivel1 extends Phaser.Scene
{

    private width: number;
    private height: number;
    private vidas:number;
    private puntuacion: number;

    constructor ()
    {
        super(Constantes.ESCENAS.NIVEL1);
    }


    init(){
        this.width=this.cameras.main.width;
        this.height=this.cameras.main.height;
        this.vidas=3;
        this.puntuacion=0;
    }

    create ()
    {
        const logo = this.add.image(400, 70, 'logo');

        const JugarTxt: Phaser.GameObjects.Text=this.add.text(50, this.height/2, Constantes.ESCENAS.NIVEL1, 
        {fontSize:'32px', color:'#FFFFFF'});

        const vidasTxt: Phaser.GameObjects.Text=this.add.text(this.width/2, this.height/2, 'VIDAS -', 
        {fontSize:'32px', color:'#FFFFFF'}).setInteractive();


        const puntuacionTxt: Phaser.GameObjects.Text  = this.add.text(this.width/2  , this.height/2 + 100 , Constantes.EVENTOS.PUNTUACIÓN,  { fontSize: '32px', color: '#FFFFFF' })
                                                .setInteractive();         


        vidasTxt.on('pointerdown', ()=>{
            this.vidas--;
            this.registry.set(Constantes.HUD.VIDAS, this.vidas);
            this.events.emit(Constantes.EVENTOS.VIDAS);
        });                                         
                                                        
        puntuacionTxt.on('pointerdown', () => {                                                                    
            this.puntuacion++;
            this.registry.set(Constantes.REGISTRO.PUNTUACION, this.puntuacion);
            this.events.emit(Constantes.EVENTOS.PUNTUACIÓN);
        });


    }
}