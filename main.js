var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/Santa.png");

var c = null;

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	var character = new santa(gameEngine, 300, 350); 

	c = character;
	
	character.loadAnimations();

	gameEngine.addEntity(character);


	gameEngine.init(ctx);

	gameEngine.start();
});
