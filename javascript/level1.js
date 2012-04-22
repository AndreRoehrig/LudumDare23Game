(function() {
  var charSprite, char_hor_acc, char_hor_speed, char_ver_acc, char_ver_speed, char_x, char_y, charmask, display, gamejs, handleEvent, key_down, key_left, key_right, key_up, level1, level1draw, makeWall, wallmask;

  gamejs = require('gamejs');

  gamejs.preload(["images/char.png", "images/wall.png", "images/level1_mapmask.png"]);

  key_down = 0;

  key_up = 0;

  key_left = 0;

  key_right = 0;

  charmask = 0;

  wallmask = 0;

  char_x = 100;

  char_y = 268;

  char_ver_acc = 0;

  char_ver_speed = 0;

  char_hor_acc = 0;

  char_hor_speed = 0;

  charSprite = new gamejs.sprite.Sprite();

  charSprite.rect = new gamejs.Rect([250, 500]);

  display = gamejs.display.setMode([800, 650]);

  level1draw = function() {
    var event, hasMaskOverlap, relativeOffset, _i, _len, _ref;
    if (key_up === 1) char_ver_acc -= 0.3;
    if (key_down === 1) char_ver_acc += 0.3;
    if (key_right === 1) char_hor_acc += 0.3;
    if (key_left === 1) char_hor_acc -= 0.3;
    _ref = gamejs.event.get();
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      event = _ref[_i];
      handleEvent(event);
    }
    char_ver_acc = char_ver_acc / 1.3;
    char_hor_acc = char_hor_acc / 1.3;
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([32, 32], [736, 536]), 0);
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([768, 200], [32, 200]), 0);
    char_ver_speed += char_ver_acc;
    char_ver_speed = char_ver_speed / 1.3;
    char_x += char_hor_speed;
    char_hor_speed += char_hor_acc;
    char_hor_speed = char_hor_speed / 1.3;
    char_y += char_ver_speed;
    relativeOffset = gamejs.utils.vectors.subtract([0, 0], [char_x, char_y]);
    hasMaskOverlap = charmask.overlap(wallmask, relativeOffset);
    if (hasMaskOverlap) alert("Kollision!!!!111!");
    charSprite.rect = new gamejs.Rect([char_x, char_y]);
    return charSprite.draw(display);
  };

  charSprite = new gamejs.sprite.Sprite();

  charSprite.rect = 0;

  handleEvent = function(event) {
    if (event.key === gamejs.event.K_UP && event.type === gamejs.event.KEY_DOWN) {
      key_up = 1;
    }
    if (event.key === gamejs.event.K_DOWN && event.type === gamejs.event.KEY_DOWN) {
      key_down = 1;
    }
    if (event.key === gamejs.event.K_RIGHT && event.type === gamejs.event.KEY_DOWN) {
      key_right = 1;
    }
    if (event.key === gamejs.event.K_LEFT && event.type === gamejs.event.KEY_DOWN) {
      key_left = 1;
    }
    if (event.key === gamejs.event.K_UP && event.type === gamejs.event.KEY_UP) {
      key_up = 0;
    }
    if (event.key === gamejs.event.K_DOWN && event.type === gamejs.event.KEY_UP) {
      key_down = 0;
    }
    if (event.key === gamejs.event.K_RIGHT && event.type === gamejs.event.KEY_UP) {
      key_right = 0;
    }
    if (event.key === gamejs.event.K_LEFT && event.type === gamejs.event.KEY_UP) {
      return key_left = 0;
    }
  };

  makeWall = function() {
    var i, _results;
    i = 0;
    _results = [];
    while (i < 32) {
      display.blit(gamejs.image.load("images/wall.png"), [i * 32, 0]);
      display.blit(gamejs.image.load("images/wall.png"), [i * 32, 568]);
      i += 1;
      if (i < 19) display.blit(gamejs.image.load("images/wall.png"), [0, i * 32]);
      if (i < 19) {
        _results.push(display.blit(gamejs.image.load("images/wall.png"), [768, i * 32]));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  level1 = function() {
    var charimg, level1maskimg;
    charimg = gamejs.image.load('images/char.png');
    level1maskimg = gamejs.image.load('images/level1_mapmask.png');
    charmask = gamejs.mask.fromSurface(charimg);
    wallmask = gamejs.mask.fromSurface(level1maskimg);
    makeWall();
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([32, 32], [736, 536]), 0);
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([768, 200], [32, 200]), 0);
    charSprite.image = gamejs.image.load("images/char.png");
    return gamejs.time.fpsCallback(level1draw, this, 30);
  };

  gamejs.ready(level1);

}).call(this);
