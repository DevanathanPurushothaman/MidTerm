var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
// MENU SCENE
var scenes;
(function (scenes) {
    var SlotMachine = (function (_super) {
        __extends(SlotMachine, _super);
        // CONSTRUCTOR ++++++++++++++++++++++
        function SlotMachine() {
            _super.call(this);
       
        }
        // PUBLIC METHODS +++++++++++++++++++++
        // Start Method
        SlotMachine.prototype.start = function () {
            // Reset the Game to initial values 
            this._resetAll();
            // add background image to the scene
            this._backgroundImage = new createjs.Bitmap(assets.getResult("SlotMachine"));
            this.addChild(this._backgroundImage);

            // add SpinButton to the scene
            this._spinButton = new objects.Button("SpinButton", 250, 377, false);
            this.addChild(this._spinButton);
            this._spinButton.on("click", this._spinButtonClick, this);
 
            // add Credits Text to the scene
            this._creditsText = new objects.Label(this.PlayerCredit.toString(), "20px Consolas", "#ff0000", 230, 303, false);
            this._creditsText.textAlign = "right";
            this.addChild(this._creditsText);
            // add Bet Text to the scene
            
            // add Result Text to the scene
            this._resultText = new objects.Label(this.WonAmount.toString(), "20px Consolas", "#ff0000", 450, 303, false);
            this._resultText.textAlign = "right";
            this.addChild(this._resultText);
            // Initialize Array of Bitmaps 
            this._initializeBitmapArray();
            // Setup Background
            this._setupBackground("WhiteBackground");
            // FadeIn
            this._fadeIn(500);
            // add this scene to the global stage container
            stage.addChild(this);
        };
        // SLOT_MACHINE Scene updates here
        SlotMachine.prototype.update = function () {
        };
        //PRIVATE METHODS
        /* Utility function to check if a value falls within a range of bounds */
        SlotMachine.prototype._checkRange = function (value, lowerBounds, upperBounds) {
            return (value >= lowerBounds && value <= upperBounds) ? value : -1;
        };
        SlotMachine.prototype._resetAll = function () {
            this.PlayerCredit = 0;
            this.WonAmount = 0;
          
        };
        /* When this function is called it determines the betLine results.
        e.g. Bar - Orange - Banana */
        SlotMachine.prototype._spinReels = function () {
		var betLine = [" ", " "];
            //var outCome = [0, 0, 0];
            for (var spin = 0; spin < 2; spin++) {
              
				var value = Math.floor((Math.random() * 62) + 1);
                 switch (value) {
                    case this._checkRange(value, 1, 27):
                        betLine[spin] = "Grapes";
                       
						if(spin == 0){
							this._creditsText.text = "1";
						}
						if(spin == 1)
						{
							this._resultText.text = "1";
						}
							
                        break;
                    case this._checkRange(value, 28, 37):
                        betLine[spin] = "Banana";
                        
						if(spin == 0){
							this._creditsText.text = "2";
						}if(spin == 1)
						{
							this._resultText.text = "2";
						}
                        break;
                    case this._checkRange(value, 38, 46):
                        betLine[spin] = "Orange";
                       
						if(spin == 0){
							this._creditsText.text = "4";
						}if(spin == 1)
						{
							this._resultText.text = "4";
						}
                        break;
                    case this._checkRange(value, 47, 54):
                        betLine[spin] = "Cherry";
                       
						if(spin == 0){
							this._creditsText.text = "3";
						}if(spin == 1)
						{
							this._resultText.text = "3";
						}
                        break;
                    case this._checkRange(value, 55, 59):
                        betLine[spin] = "Bar";
                       
						if(spin == 0){
							this._creditsText.text = "5";
						}if(spin == 1)
						{
							this._resultText.text = "5";
						}
                        break;
                    case this._checkRange(value, 60, 62):
                        betLine[spin] = "Bell";
                        
						if(spin == 0){
							this._creditsText.text = "6";
						}if(spin == 1)
						{
							this._resultText.text = "6";
						}
                        break;
                }		
            }
			
            return betLine;
        };
        /* This function calculates the player's WonAmount, if any */
 

        SlotMachine.prototype._initializeBitmapArray = function () {
            this._reels = new Array();
            for (var reel = 0; reel < 2; reel++) {
                this._reels[reel] = new createjs.Bitmap(assets.getResult("Blank"));
                this._reels[reel].x = 100 + (reel * 250);
                this._reels[reel].y = 100;
                this.addChild(this._reels[reel]);
                console.log("reel" + reel + " " + this._reels[reel]);
            }
        };
        SlotMachine.prototype._placeBet = function (BetAmount) {
          
			
        };
        //EVENT HANDLERS ++++++++++++++++++++
   
        SlotMachine.prototype._spinButtonClick = function (event) {
       
                var bitmap = this._spinReels();
                for (var reel = 0; reel < 2; reel++) {
                    this._reels[reel].image = assets.getResult(bitmap[reel]);
                   
            }
        };
        return SlotMachine;
    }(objects.Scene));
    scenes.SlotMachine = SlotMachine;
})(scenes || (scenes = {}));
//# sourceMappingURL=slotmachine.js.map