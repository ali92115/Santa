var gameEngine = new GameEngine();

var ASSET_MANAGER = new AssetManager();

ASSET_MANAGER.queueDownload("./sprites/rutherford-main.png");

var c = null;

ASSET_MANAGER.downloadAll(function () {
	var canvas = document.getElementById('gameWorld');
	var ctx = canvas.getContext('2d');

	var character = new Shiva(gameEngine, 350, 350); 

	c = character;
	
	character.loadAnimations();

	gameEngine.addEntity(character);


	gameEngine.init(ctx);

	gameEngine.start();
});
