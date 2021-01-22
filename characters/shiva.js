class Fayere {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Shiva.png");

        this.scale = 2.5;

        this.velocity = { x : 0, y : 0};

        this.animationidle;
        this.animationburningkick;
    }

    loadAnimations() {


    }

    update() {
        
     }

    draw(ctx) {

    }
};