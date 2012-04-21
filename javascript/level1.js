(function() {
  var charSprite, display, draw, gamejs, main;

  gamejs = require("gamejs");

  gamejs.preload(["images/char.png", "images/runner.png"]);

  display = gamejs.display.setMode([800, 600]);

  draw = function() {
    var runner;
    display.clear();
    runner = gamejs.image.load("images/char.png");
    return charSprite.draw(display);
  };

  charSprite = new gamejs.sprite.Sprite();

  charSprite.rect = new gamejs.Rect([250, 500]);

  main = function() {
    charSprite.image = gamejs.image.load("images/runner.png");
    return gamejs.time.fpsCallback(draw, this, 30);
  };

  gamejs.ready(main);

}).call(this);
