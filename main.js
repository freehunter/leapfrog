//Frog
//Testing an infinite runner with random ground
//v0.4

var game = new Phaser.Game(400, 490, Phaser.CANVAS, 'gameDiv');

if (localStorage.high) {
	localStorage.high = Number(localStorage.high) + 0;
} else {
	localStorage.high = 0;
}

if (localStorage.player) {
	localStorage.player = localStorage.player;
} else {
	localStorage.player = "yo";
}

if (localStorage.buyspider) {
	localStorage.buyspider = localStorage.buyspider;
} else {
	localStorage.buyspider = "no";
}

if (localStorage.jump) {
	localStorage.jump = localStorage.jump;
} else {         
	localStorage.jump = Number(-175);
}

var High = localStorage.high;

//var High = 0;



var menuState = {
	
preload: function() {
	// Load the player sprite
    game.load.spritesheet('player', 'assets/player.png', 32, 48);
	//load the font
	//game.load.bitmapFont('font', 'assets/carrier_command.png', 'assets/carrier_command.xml');
},

create: function() {
	var High = localStorage.high;
	// Display the player on the screen
    this.player = this.game.add.sprite(100, 100, 'player');
	console.log("we will load " + localStorage.player);
	
    if (localStorage.player == 'yo')
	{
	this.player.animations.add('right', [5, 6, 7, 8], 10, true);
	console.log("we loaded the sprite yo")
	}
	else if (localStorage.player == 'chicken')
	{
	this.player.animations.add('right', [0, 1, 2, 3], 10, true);
	console.log("we loaded the sprite chicken")
	}
    
    // Add gravity to the player to make it fall
    game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 400; 

    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;    
    game.scale.setShowAll();
    game.scale.refresh();
    game.scale.setScreenSize(true);

	game.stage.backgroundColor = '#71c5cf';
 
	//game.load.bitmapFont('font', 'assets/carrier_command.png', 'assets/carrier_command.xml');
    this.labelTitle = this.game.add.text(190, 70, "Leap Frog", { font: "60px Arial Black"});
	this.labelTitle.fontWeight = 'bold';
	this.labelTitle.fontSize = 50;
	this.labelTitle.stroke = '#000000';
	this.labelTitle.strokeThickness = 6;
	this.labelTitle.fill = '#ffffff';
	twist = 1;
	this.labelTitle.anchor.set(0.5);
	
	//this.labelTitle = this.game.add.bitmapText(100, 100, 'carrier_command','Drag me around !',34);
	this.labelCharacters = this.game.add.text(150, 120, "Characters", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelCharacters.fontWeight = 'bold';
	this.labelCharacters.stroke = '#000000';
	this.labelCharacters.strokeThickness = 6;
	this.labelCharacters.fill = '#ffffff';
	this.labelShop = this.game.add.text(150, 170, "Upgrades", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelShop.fontWeight = 'bold';
	this.labelShop.stroke = '#000000';
	this.labelShop.strokeThickness = 6;
	this.labelShop.fill = '#ffffff';
	this.labelSettings = this.game.add.text(150, 220, "Settings", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelSettings.fontWeight = 'bold';
	this.labelSettings.stroke = '#000000';
	this.labelSettings.strokeThickness = 6;
	this.labelSettings.fill = '#ffffff';
	this.labelStart = this.game.add.text(150, 300, "Start", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelStart.fontWeight = 'bold';
	this.labelStart.stroke = '#000000';
	this.labelStart.strokeThickness = 6;
	this.labelStart.fill = '#ffffff';
	this.labelScore = this.game.add.text(150, 440, ("Coins: " +  localStorage.high) , { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelScore.fontWeight = 'bold';
	this.labelScore.stroke = '#000000';
	this.labelScore.strokeThickness = 6;
	this.labelScore.fill = '#ffffff';
	
	
	//game.input.onDown.addOnce(this.startGame);
	this.labelSettings.inputEnabled = true;
	this.labelSettings.events.onInputDown.add(this.clickpop, this);
	
	this.labelShop.inputEnabled = true;
	this.labelShop.events.onInputDown.add(this.shopMenu, this);
	
	this.labelStart.inputEnabled = true;
	this.labelStart.events.onInputDown.add(this.startGame, this);
	
	this.labelCharacters.inputEnabled = true;
	this.labelCharacters.events.onInputDown.add(this.characterMenu, this);
	
},

update: function(){
	if (this.player.y > 430) {
		this.player.body.velocity.y = -450;
	}
	this.player.animations.play('right');
	
	if (this.labelTitle.angle < -10)
	{
		twist = 1;
	}
	
	if (this.labelTitle.angle > 10)
	{
		twist = 0;
	}
	if (twist == 1)
	{
		this.labelTitle.rotateSpeed = .5;
		this.labelTitle.anchor.set(0.5);
		this.labelTitle.angle += this.labelTitle.rotateSpeed;
	}
	if (twist == 0)
	{
		this.labelTitle.rotateSpeed = -.5;
		this.labelTitle.anchor.set(0.5);
		this.labelTitle.angle += this.labelTitle.rotateSpeed;
	}
	//console.log(this.labelTitle.angle);
},

startGame: function() {
	game.state.start('main');
},

clickpop: function(item) {
	game.state.start('settings');
},

characterMenu: function(item) {
	game.state.start('character');
},

shopMenu: function(item) {
	game.state.start('shop');
},

}

var settingsState = {
	
create: function() {


    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;    
    game.scale.setShowAll();
    game.scale.refresh();
    game.scale.setScreenSize(true);

	game.stage.backgroundColor = '#71c5cf';
       
    this.labelTitle = this.game.add.text(190, 70, "Leap Frog", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelTitle.fontWeight = 'bold';
	this.labelTitle.fontSize = 50;
	this.labelTitle.stroke = '#000000';
	this.labelTitle.strokeThickness = 6;
	this.labelTitle.fill = '#ffffff';
	this.labelTitle.anchor.set(0.5);
	this.labelClear = this.game.add.text(150, 170, "Clear Scores", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelClear.fontWeight = 'bold';
	this.labelClear.stroke = '#000000';
	this.labelClear.strokeThickness = 6;
	this.labelClear.fill = '#ffffff';
	this.labelMenu = this.game.add.text(150, 400, "Menu", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelMenu.fontWeight = 'bold';
	this.labelMenu.stroke = '#000000';
	this.labelMenu.strokeThickness = 6;
	this.labelMenu.fill = '#ffffff';
	this.labelScore = this.game.add.text(150, 440, ("Coins: " +  localStorage.high) , { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelScore.fontWeight = 'bold';
	this.labelScore.stroke = '#000000';
	this.labelScore.strokeThickness = 6;
	this.labelScore.fill = '#ffffff';
	this.labelScore.inputEnabled = true;
	this.labelScore.events.onInputDown.add(this.clearScore, this);
	this.labelMenu.inputEnabled = true;
	this.labelMenu.events.onInputDown.add(this.returnMenu, this);
},

returnMenu: function() {
	game.state.start('menu');
},

clearScore: function() {
	localStorage.high = 0;
	if (localStorage.high) {
		localStorage.high = Number(localStorage.high) + 0;
	} else {
		localStorage.high = 0;
	}
	this.labelScore.text = "Score: " + localStorage.high;
},

update: function() {
	if (this.labelTitle.angle < -10)
	{
		twist = 1;
	}
	
	if (this.labelTitle.angle > 10)
	{
		twist = 0;
	}
	if (twist == 1)
	{
		this.labelTitle.rotateSpeed = .5;
		this.labelTitle.anchor.set(0.5);
		this.labelTitle.angle += this.labelTitle.rotateSpeed;
	}
	if (twist == 0)
	{
		this.labelTitle.rotateSpeed = -.5;
		this.labelTitle.anchor.set(0.5);
		this.labelTitle.angle += this.labelTitle.rotateSpeed;
	}
}

}

var characterState = {
	preload: function() {
	// Load the player sprite
    game.load.spritesheet('player', 'assets/player.png', 32, 48);
},
create: function() {
	
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;    
    game.scale.setShowAll();
    game.scale.refresh();
    game.scale.setScreenSize(true);

	game.stage.backgroundColor = '#71c5cf';
       
    this.labelTitle = this.game.add.text(190, 70, "Leap Frog", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelTitle.fontWeight = 'bold';
	this.labelTitle.fontSize = 50;
	this.labelTitle.stroke = '#000000';
	this.labelTitle.strokeThickness = 6;
	this.labelTitle.fill = '#ffffff';
	this.labelTitle.anchor.set(0.5);
	this.labelPlayer = this.game.add.text(150, 120, "0c Player", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelPlayer.fontWeight = 'bold';
	this.labelPlayer.stroke = '#000000';
	this.labelPlayer.strokeThickness = 6;
	this.labelPlayer.fill = '#ffffff';
	this.labelPlayer.inputEnabled = true;
	this.labelChicken = this.game.add.text(150, 170, "5c Spiderchicken", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelChicken.fontWeight = 'bold';
	this.labelChicken.stroke = '#000000';
	this.labelChicken.strokeThickness = 6;
	this.labelChicken.fill = '#ffffff';
	this.labelChicken.inputEnabled = true;
	this.labelMenu = this.game.add.text(150, 400, "Menu", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelMenu.fontWeight = 'bold';
	this.labelMenu.stroke = '#000000';
	this.labelMenu.strokeThickness = 6;
	this.labelMenu.fill = '#ffffff';
	this.labelMenu.inputEnabled = true;
	this.labelScore = this.game.add.text(150, 440, ("Coins: " +  localStorage.high) , { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelScore.fontWeight = 'bold';
	this.labelScore.stroke = '#000000';
	this.labelScore.strokeThickness = 6;
	this.labelScore.fill = '#ffffff';
	this.labelScore.inputEnabled = true;
	
	this.labelChicken.inputEnabled = true;
	this.labelChicken.events.onInputDown.add(this.makeChicken, this);
	this.labelMenu.inputEnabled = true;
	this.labelMenu.events.onInputDown.add(this.returnMenu, this);
	this.labelPlayer.inputEnabled = true;
	this.labelPlayer.events.onInputDown.add(this.makePlayer, this);
	
	// Display the player on the screen
    this.player = this.game.add.sprite(100, 100, 'player');
	console.log("we will load " + localStorage.player);
	
    if (localStorage.player == 'yo')
	{
	this.player.animations.add('right', [5, 6, 7, 8], 10, true);
	console.log("we loaded the sprite yo")
	}
	else if (localStorage.player == 'chicken')
	{
	this.player.animations.add('right', [0, 1, 2, 3], 10, true);
	console.log("we loaded the sprite chicken")
	}
	// Add gravity to the player to make it fall
    game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 400; 
},

update: function(){
	if (this.player.y > 430) {
		this.player.body.velocity.y = -450;
	}
	this.player.animations.play('right');
	
	if (this.labelTitle.angle < -10)
	{
		twist = 1;
	}
	
	if (this.labelTitle.angle > 10)
	{
		twist = 0;
	}
	if (twist == 1)
	{
		this.labelTitle.rotateSpeed = .5;
		this.labelTitle.anchor.set(0.5);
		this.labelTitle.angle += this.labelTitle.rotateSpeed;
	}
	if (twist == 0)
	{
		this.labelTitle.rotateSpeed = -.5;
		this.labelTitle.anchor.set(0.5);
		this.labelTitle.angle += this.labelTitle.rotateSpeed;
	}
},

returnMenu: function() {
	game.state.start('menu');
},

makeChicken: function() {
	delete localStorage.player;
	localStorage.player = "chicken";
	console.log(localStorage.player);
	this.player.animations.add('right', [0, 1, 2, 3], 10, true);
},

makePlayer: function() {
	delete localStorage.player;
	localStorage.player = "yo";
	console.log(localStorage.player);
	this.player.animations.add('right', [5, 6, 7, 8], 10, true);
}

}

var shopState = {
	preload: function() {
	// Load the player sprite
    game.load.spritesheet('player', 'assets/player.png', 32, 48);
},
create: function() {
	
    game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;    
    game.scale.setShowAll();
    game.scale.refresh();
    game.scale.setScreenSize(true);

	game.stage.backgroundColor = '#71c5cf';
       
    this.labelTitle = this.game.add.text(190, 70, "Leap Frog", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelTitle.fontWeight = 'bold';
	this.labelTitle.fontSize = 50;
	this.labelTitle.stroke = '#000000';
	this.labelTitle.strokeThickness = 6;
	this.labelTitle.fill = '#ffffff';
	this.labelTitle.anchor.set(0.5);
	this.labelBigJump = this.game.add.text(150, 120, "10c Big Jump", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelBigJump.fontWeight = 'bold';
	this.labelBigJump.stroke = '#000000';
	this.labelBigJump.strokeThickness = 6;
	this.labelBigJump.fill = '#ffffff';
	this.labelBigJump.inputEnabled = true;
	this.labelNothing1 = this.game.add.text(150, 170, "0c Nothing", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelNothing1.fontWeight = 'bold';
	this.labelNothing1.stroke = '#000000';
	this.labelNothing1.strokeThickness = 6;
	this.labelNothing1.fill = '#ffffff';
	this.labelNothing1.inputEnabled = true;
	this.labelNothing2 = this.game.add.text(150, 220, "0c Nothing", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelNothing2.fontWeight = 'bold';
	this.labelNothing2.stroke = '#000000';
	this.labelNothing2.strokeThickness = 6;
	this.labelNothing2.fill = '#ffffff';
	this.labelNothing2.inputEnabled = true;
	this.labelMenu = this.game.add.text(150, 400, "Menu", { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelMenu.fontWeight = 'bold';
	this.labelMenu.stroke = '#000000';
	this.labelMenu.strokeThickness = 6;
	this.labelMenu.fill = '#ffffff';
	this.labelMenu.inputEnabled = true;
	this.labelScore = this.game.add.text(150, 440, ("Coins: " +  localStorage.high) , { font: "30px Arial", fill: "#ffffff", align: "center" }); 
	this.labelScore.fontWeight = 'bold';
	this.labelScore.stroke = '#000000';
	this.labelScore.strokeThickness = 6;
	this.labelScore.fill = '#ffffff';
	this.labelScore.inputEnabled = true;
	
	this.labelBigJump.inputEnabled = true;
	this.labelBigJump.events.onInputDown.add(this.makeBigJump, this);
	this.labelMenu.inputEnabled = true;
	this.labelMenu.events.onInputDown.add(this.returnMenu, this);

	
	// Display the player on the screen
    this.player = this.game.add.sprite(100, 100, 'player');
	console.log("we will load " + localStorage.player);
	
    if (localStorage.player == 'yo')
	{
	this.player.animations.add('right', [5, 6, 7, 8], 10, true);
	console.log("we loaded the sprite yo")
	}
	else if (localStorage.player == 'chicken')
	{
	this.player.animations.add('right', [0, 1, 2, 3], 10, true);
	console.log("we loaded the sprite chicken")
	}
	// Add gravity to the player to make it fall
    game.physics.arcade.enable(this.player);
    this.player.body.gravity.y = 400; 
},

update: function(){
	if (this.player.y > 430) {
		this.player.body.velocity.y = -450;
	}
	this.player.animations.play('right');
	
	if (this.labelTitle.angle < -10)
	{
		twist = 1;
	}
	
	if (this.labelTitle.angle > 10)
	{
		twist = 0;
	}
	if (twist == 1)
	{
		this.labelTitle.rotateSpeed = .5;
		this.labelTitle.anchor.set(0.5);
		this.labelTitle.angle += this.labelTitle.rotateSpeed;
	}
	if (twist == 0)
	{
		this.labelTitle.rotateSpeed = -.5;
		this.labelTitle.anchor.set(0.5);
		this.labelTitle.angle += this.labelTitle.rotateSpeed;
	}
	
		if (localStorage.jump < -176)
	{
		this.labelBigJump.text = "SOLD OUT";
		this.labelBigJump.inputEnabled = false;
	}
},

returnMenu: function() {
	game.state.start('menu');
},

makeBigJump: function() {
	console.log(localStorage.jump);
	localStorage.jump = Number(-250);
	console.log(localStorage.jump);
	jump_height = localStorage.jump;
},

makePlayer: function() {
	delete localStorage.player;
	localStorage.player = "yo";
	console.log(localStorage.player);
	this.player.animations.add('right', [5, 6, 7, 8], 10, true);
}

}

// Creates a new 'main' state that will contain the game
var mainState = {
    
    // Function called first to load all the assets
    preload: function() { 
        
        //set double jump
        this.jump_set = 3;
        // Change the background color of the game
        game.stage.backgroundColor = '#71c5cf';

       
		// Load the player sprite
		game.load.spritesheet('player', 'assets/player.png', 32, 48);

        // Load the platform sprite
        game.load.image('platform', 'assets/platform.png');    
		
		// Load the cloud sprite
        game.load.image('cloud', 'assets/cloud.png'); 
        
        //load the lava
        game.load.image('coin', 'assets/coin.png');
        
    },

    // Function called after 'preload' to setup the game 
    create: function() { 
        var High = localStorage.high;
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;    
        game.scale.setShowAll();
        game.scale.setScreenSize(true);
        game.scale.refresh();
        
        // Set the physics system
        game.physics.startSystem(Phaser.Physics.ARCADE);
        
        //this works for clicking mouse and touching a screen
        this.input.onDown.add(this.jump, this);

        // Create a group of 20 platforms
        this.platforms = game.add.group();
        this.platforms.enableBody = true;
        this.platforms.createMultiple(6, 'platform');

	// Create a group of clouds
        this.clouds = game.add.group();
        this.clouds.enableBody = true;
        this.clouds.createMultiple(4, 'cloud');	

	// Create coins
        this.coin = game.add.group();
        this.coin.enableBody = true;
        this.coin.createMultiple(2, 'coin');		
        
        //create the starting platform
        //this.starting = this.platforms.create(50, 400, 'platform')
        //this.starting.body.immovable = true;

        // Timer that calls 'addRowOfplatforms' every x milliseconds
        this.timer = this.game.time.events.loop(550, this.addRowOfplatforms, this);  
		
	// Timer that calls 'addRowOfclouds' every x milliseconds
        this.timer = this.game.time.events.loop(1300, this.addRowOfclouds, this); 

	// Timer that calls 'addRowOfcoin' every x milliseconds
        this.timer = this.game.time.events.loop(5000, this.addacoin, this);
		
	// Timer that calls 'visiblecoin' every x milliseconds
        //this.timer = this.game.time.events.loop(2000, this.visiblecoin, this); 
        
        // Add a score label on the top left of the screen
        this.score = 0;
        this.labelScoretxt = this.game.add.text(20, 10, "Score", { font: "30px Arial", fill: "#ffffff" });  
        this.labelScore = this.game.add.text(50, 40, "0", { font: "30px Arial", fill: "#ffffff" });  
        this.labelScore.anchor.setTo(0.1, 0.1);
		this.labelScore.fontWeight = 'bold';
		this.labelScore.stroke = '#000000';
		this.labelScore.strokeThickness = 3;
		this.labelScore.fill = '#ffffff';
		this.labelScore.inputEnabled = true;
		this.labelScoretxt.fontWeight = 'bold';
		this.labelScoretxt.stroke = '#000000';
		this.labelScoretxt.strokeThickness = 3;
		this.labelScoretxt.fill = '#ffffff';


        // high scores
        this.labelHightxt = this.game.add.text(175, 10, "Top", { font: "30px Arial", fill: "#ffffff" });  
        this.labelHigh = this.game.add.text(193, 40, "0", { font: "30px Arial", fill: "#ffffff" });  
        this.labelHigh.anchor.setTo(0.1, 0.1);
		this.labelHightxt.fontWeight = 'bold';
		this.labelHightxt.stroke = '#000000';
		this.labelHightxt.strokeThickness = 3;
		this.labelHightxt.fill = '#ffffff';
		this.labelHigh.fontWeight = 'bold';
		this.labelHigh.stroke = '#000000';
		this.labelHigh.strokeThickness = 3;
		this.labelHigh.fill = '#ffffff';
        
        //show number of jumps left in top right of the screen
        this.labelJumps = this.game.add.text(340, 40, "0", { font: "30px Arial", fill: "#ffffff" }); 
        this.labelJumpstxt = this.game.add.text(300, 10, "Jumps", { font: "30px Arial", fill: "#ffffff" });  
		this.labelJumps.fontWeight = 'bold';
		this.labelJumps.stroke = '#000000';
		this.labelJumps.strokeThickness = 3;
		this.labelJumps.fill = '#ffffff';
		this.labelJumps.fill = '#ffffff';
		this.labelJumpstxt.fontWeight = 'bold';
		this.labelJumpstxt.stroke = '#000000';
		this.labelJumpstxt.strokeThickness = 3;
		this.labelJumpstxt.fill = '#ffffff';
        this.labelJumps.text = this.jump_set;
		
	// Display the player on the screen
        this.player = this.game.add.sprite(100, 100, 'player');
		console.log("we will load " + localStorage.player);
	
		if (localStorage.player == 'yo')
		{
			this.player.animations.add('right', [5, 6, 7, 8], 10, true);
			console.log("we loaded the sprite yo")
		}
		else if (localStorage.player == 'chicken')
		{
			this.player.animations.add('right', [0, 1, 2, 3], 10, true);
			console.log("we loaded the sprite chicken")
		}
        
        // Add gravity to the player to make it fall
        game.physics.arcade.enable(this.player);
        this.player.body.gravity.y = 400; 
		//jump_height = Number(localStorage.jump);
    },

    // This function is called 60 times per second
    update: function() {
	//set high score
	var High = localStorage.high;
	this.labelHigh.text = High;
	
	if (High > 9)
	{
		this.labelHigh.destroy();
		this.labelHigh = this.game.add.text(180, 40, High, { font: "30px Arial", fill: "#ffffff" });  
	}

    // If the player is out of the world (too high or too low), call the 'restartGame' function
     if (this.player.inWorld == false)
        this.restartGame(); 
		
     
    game.physics.arcade.collide(this.player, this.platforms);
    game.physics.arcade.collide(this.player, this.starting);
	game.physics.arcade.overlap(this.player, this.coin, this.platfall, null, this);
            

    //animate the player
    this.player.animations.play('right');
    
    //debug to find height of player
    //console.log(this.player.y)
    },
       

    // Make the player jump 
    jump: function() {
        // Add a vertical velocity to the player
		
        if (this.player.body.touching.down || this.jump_set > 0)
        {
			jump_height = Number(localStorage.jump);
            this.player.body.velocity.y = jump_height;
            this.player.body.velocity.x = 7;
            this.jump_set -= 1;
            this.labelJumps.text = this.jump_set;
            
        }
        
        //if the player touches a block, add one to the score
        //reset the double jump
        if (this.player.body.touching.down && this.player.y < 352)
        {
            //scoring based on height of platform (not used)
            //this.score += parseInt(1 * (this.player.body.y / 100));
            //scoring based on how many platforms jumped
            this.score += 0;
            this.jump_set = 3;
            this.labelJumps.text = this.jump_set;
            this.labelScore.text = this.score;
            //if the score is double digits, move the counter over
            if (this.score > 9)
            {
                this.labelScore.destroy();
                this.labelScore = this.game.add.text(40, 40, this.score, { font: "30px Arial", fill: "#ffffff" });
            }
	    //high scores
	    if (this.score > localStorage.high)
	  	{
			localStorage.high = this.score;
			this.labelHigh.text = localStorage.high;
			//localStorage.high = Number(localStorage.high) + 1;
		}
        }
    },

    // Restart the game
    restartGame: function() {
        // Start the 'main' state, which restarts the game
        game.state.start('menu');
    },
    
    platfall: function() {
		this.score = this.score + 1;
		this.jump_set = 3;
		this.labelJumps.text = this.jump_set;
        this.labelScore.text = this.score;
		if (this.score >localStorage.high)
	  	{
			localStorage.high = this.score;
			this.labelHigh.text = localStorage.high;
			//localStorage.high = Number(localStorage.high) + 1;
		}
		this.coin.kill();
    },

    // Add a platform on the screen
    addOneplatform: function(x, y) {
        // Get the first dead platform of our group
        var platform = this.platforms.getFirstDead();

        // Set the new position of the platform
        platform.reset(x, y);

        // Add velocity to the platform to make it move left
        platform.body.velocity.x = (-250 - (this.score * 1.5)); 
		platform.body.immovable = true;
               
        // Kill the platform when it's no longer visible 
        platform.checkWorldBounds = true;
        platform.outOfBoundsKill = true;
    },

    // Add a platform at a random height
    addRowOfplatforms: function() {
        this.addOneplatform(400, (Math.random()*(350-250) + 250));
    },
	
	// Add a cloud on the screen
    addOneCloud: function(x, y) {
        // Get the first dead cloud of our group
        var clouds = this.clouds.getFirstDead();

        // Set the new position of the platform
        clouds.reset(x, y);

        // Add velocity to the cloud to make it move left
        clouds.body.velocity.x = (-200); 
               
        // Kill the cloud when it's no longer visible 
        clouds.checkWorldBounds = true;
        clouds.outOfBoundsKill = true;
    },

    // Add a cloud at a random height
    addRowOfclouds: function() {
        this.addOneCloud(400, (Math.random()*(150-10) + 10));
    },

	// Add a random coin
    addacoin: function() {
	    this.coin = this.game.add.sprite(400, 100, 'coin');
		game.physics.arcade.enable(this.coin);
		// Add velocity to the coin to make it move left
		this.coin.body.velocity.x = (-250); 
		this.coin.body.immovable = true;
               
        // Kill the coin when it's no longer visible 
        this.coin.checkWorldBounds = true;
        this.coin.outOfBoundsKill = true;
    },
};

// Add and start the 'main' state to start the game
game.state.add('main', mainState);  
game.state.add('menu', menuState);
game.state.add('settings', settingsState);
game.state.add('character', characterState);
game.state.add('shop', shopState);
game.state.start('menu'); 
