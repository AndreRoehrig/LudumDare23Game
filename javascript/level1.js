(function() {
  var charSprite, char_hor_acc, char_hor_speed, char_ver_acc, char_ver_speed, char_x, char_y, display, draw, gamejs, handleEvent, main;

  gamejs = require("gamejs");

  gamejs.preload(["images/char.png", "images/wall.png"]);

  char_x = 0;

  char_y = 0;

  char_ver_acc = 0;

  char_ver_speed = 0;

  char_hor_acc = 0;

  char_hor_speed = 0;

  charSprite = new gamejs.sprite.Sprite();

  charSprite.rect = new gamejs.Rect([250, 500]);

  display = gamejs.display.setMode([800, 600]);

  draw = function() {
    display.clear();
    return charSprite.draw(display);
  };

  charSprite = new gamejs.sprite.Sprite();

  charSprite.rect = new gamejs.Rect([250, 500]);

  handleEvent = function(event) {
    if (event.key === gamejs.event.K_UP && event.type === gamejs.event.KEY_DOWN) {
      char_ver_acc += 1;
    }
    if (event.key === gamejs.event.K_DOWN && event.type === gamejs.event.KEY_DOWN) {
      char_ver_acc -= 1;
    }
    if (event.key === gamejs.event.K_RIGHT && event.type === gamejs.event.KEY_DOWN) {
      char_hor_acc += 1;
    }
    if (event.key === gamejs.event.K_LEFT && event.type === gamejs.event.KEY_DOWN) {
      return char_hor_acc -= 1;
    }
  };

  main = function() {
    charSprite.image = gamejs.image.load("images/char.png");
    return gamejs.time.fpsCallback(draw, this, 30);
  };

  gamejs.ready(main);

}).call(this);
