import Nivel1 from "./nivel1";

export default class Carga extends Phaser.Scene{

    //barra de carga
    private barraCarga: Phaser.GameObjects.Graphics;
    private barraProgreso: Phaser.GameObjects.Graphics;

    constructor(){
        super('Carga');
    }

    preload(): void{
        this.cameras.main.setBackgroundColor(0x000000);
        this.creaBarras();

        //Listener mientras se cargan los assets
        this.load.on(
            'progress',
            function(value:number){
                this.barraProgreso.clear();
                this.barraCarga.fillStyle(0x88e453, 1);
                this.barraCarga.fillRect(
                    this.cameras.main.width /4,
                    this.cameras.main.height /2 - 16,
                    (this.cameras.main.width /2) * value,  
                    16
                );
            }, this
        );
    
        //Listener cuando se haya todo completado
        this.load.on(
            'complete',
            function(){
                this.scene.start('Menu');
            },
            this
        );
        
        for (let i=1; i<=1000;i++)
            this.load.image('logo' + i, 'assets/logo.png');
    }

    //metode que crea les barres de progres

    private creaBarras():void{
        this.barraCarga=this.add.graphics();
        this.barraCarga.fillStyle(0xffffff, 1);
        this.barraCarga.fillRect(
            this.cameras.main.width /4 - 2,
            this.cameras.main.height /2 - 18,
            this.cameras.main.width /2 + 4, 
            20
        );
        this.barraProgreso=this.add.graphics();

    }
}