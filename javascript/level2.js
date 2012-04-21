(function() {
  var charSprite, char_hor_acc, char_hor_speed, char_ver_acc, char_ver_speed, char_x, char_y, charmask, charsize, counter, display, draw, gamejs, key_down, key_left, key_right, key_up, main, wallmask;

  gamejs = require('gamejs');

  gamejs.preload(["images/char.png", "images/wall.png", "images/level1_mapmask.png", "images/ldsizes/char63.png", "images/ldsizes/char62.png", "images/ldsizes/char61.png", "images/ldsizes/char60.png", "images/ldsizes/char59.png", "images/ldsizes/char50.png"]);

  counter = 0;

  key_down = 0;

  key_up = 0;

  key_left = 0;

  key_right = 0;

  charmask = 0;

  wallmask = 0;

  charsize = 50;

  char_x = 100;

  char_y = 268;

  char_ver_acc = 0;

  char_ver_speed = 0;

  char_hor_acc = 0;

  char_hor_speed = 0;

  charSprite = new gamejs.sprite.Sprite();

  charSprite.rect = new gamejs.Rect([250, 500]);

  display = gamejs.display.setMode([800, 650]);

  draw = function() {
    var event, _i, _len, _ref;
    _ref = gamejs.event.get();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      event = _ref[_i];
      handleEvent(event);
    }
    counter += 1;
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([32, 32], [736, 536]), 0);
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([768, 200], [32, 200]), 0);
    charSprite.image = gamejs.image.load("images/ldsizes/char" + charsize + ".png");
    charSprite.rect = new gamejs.Rect([char_x, char_y]);
    return charSprite.draw(display);
  };

  main = function() {
    charSprite.image = gamejs.image.load("images/char.png");
    return gamejs.time.fpsCallback(draw, this, 30);
  };

  gamejs.ready(main);

}).call(this);