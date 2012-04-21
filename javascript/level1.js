(function() {
  var display, gamejs, main;

  gamejs = require("gamejs");

  gamejs.preload([]);

  display = gamejs.display.setMode([800, 600]);

  main = function() {
    return display.blit(gamejs.draw.line(display, "#ff00cc", [0, 0], [100, 100], 30));
  };

  gamejs.ready(main);

}).call(this);
