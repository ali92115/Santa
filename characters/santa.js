class santa {
    constructor(game, x, y) {
        Object.assign(this, { game, x, y });
        this.spritesheet = ASSET_MANAGER.getAsset("./sprites/Santa.png");

        this.scale = 5;

        this.animationtype = 0;

        this.animationwalk = null;
        this.animationkick = null;

        this.animations = [];
    }

    loadAnimations() {
        this.animationwalk = new Animator(this.spritesheet, 1, 128, 28, 32, 8, 0.1, 68, false, true);
        this.animationkick = new Animator(this.spritesheet, 1, 511, 33, 50, 8, 0.1, 65, false, true);
        this.animations[0] = this.animationwalk;
        this.animations[1] = this.animationkick;
    }

    update() {
    
     }

    draw(ctx) {
        this.animations[this.animationtype].drawFrame(this.game.clockTick, ctx, this.x, this.y, this.scale);
    }

    changeAnimation() {
        if(this.animationtype == 0) {
            this.animationtype = 1;
        } else {
            this.animationtype = 0;
        }
    }
};