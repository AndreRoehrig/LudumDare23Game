(function() {
  var charSprite, char_hor_acc, char_hor_speed, char_ver_acc, char_ver_speed, char_x, char_y, chargrowth, charmask, charsize, charstate, counter, display, draw, gamejs, handleEvent, key_down, key_left, key_right, key_up, level2, makeWall, pilledown_pos1, pilledown_pos2, pilledown_pos3, pilleup_pos1, pilleup_pos2, pilleup_pos3, pillmask, wallmask;

  gamejs = require('gamejs');

  gamejs.preload(["images/char.png", "images/wall.png", "images/level1_mapmask.png", "images/level2_mapmask.png", "images/ldsizes/char64.png", "images/ldsizes/char63.png", "images/ldsizes/char62.png", "images/ldsizes/char61.png", "images/ldsizes/char60.png", "images/ldsizes/char59.png", "images/ldsizes/char58.png", "images/ldsizes/char57.png", "images/ldsizes/char56.png", "images/ldsizes/char55.png", "images/ldsizes/char54.png", "images/ldsizes/char53.png", "images/ldsizes/char52.png", "images/ldsizes/char51.png", "images/ldsizes/char50.png", "images/ldsizes/char49.png", "images/ldsizes/char48.png", "images/ldsizes/char47.png", "images/ldsizes/char46.png", "images/ldsizes/char45.png", "images/ldsizes/char44.png", "images/ldsizes/char43.png", "images/ldsizes/char42.png", "images/ldsizes/char41.png", "images/ldsizes/char40.png", "images/ldsizes/char39.png", "images/ldsizes/char38.png", "images/ldsizes/char37.png", "images/ldsizes/char36.png", "images/ldsizes/char35.png", "images/ldsizes/char34.png", "images/ldsizes/char33.png", "images/ldsizes/char32.png", "images/ldsizes/char31.png", "images/ldsizes/char30.png", "images/ldsizes/char29.png", "images/ldsizes/char28.png", "images/ldsizes/char27.png", "images/ldsizes/char26.png", "images/ldsizes/char25.png", "images/ldsizes/char24.png", "images/ldsizes/char23.png", "images/ldsizes/char22.png", "images/ldsizes/char21.png", "images/ldsizes/char20.png", "images/ldsizes/char19.png", "images/ldsizes/char18.png", "images/ldsizes/char17.png", "images/ldsizes/char16.png", "images/ldsizes/char15.png", "images/ldsizes/char14.png", "images/ldsizes/char13.png", "images/ldsizes/char12.png", "images/ldsizes/char11.png", "images/ldsizes/char10.png", "images/ldsizes/char9.png", "images/ldsizes/char8.png", "images/ldsizes/char7.png", "images/ldsizes/char6.png", "images/ldsizes/char5.png", "images/ldsizes/char4.png", "images/ldsizes/char3.png", "images/ldsizes/char2.png", "images/ldsizes/char1.png", "images/pill_up.png", "images/pill_down.png", "images/ldsizes/char65.png", "images/ldsizes/char66.png", "images/ldsizes/char67.png", "images/ldsizes/char68.png", "images/ldsizes/char69.png", "images/ldsizes/char70.png", "images/ldsizes/char71.png", "images/ldsizes/char72.png", "images/ldsizes/char73.png", "images/ldsizes/char74.png", "images/ldsizes/char75.png", "images/ldsizes/char76.png", "images/ldsizes/char77.png", "images/ldsizes/char78.png", "images/ldsizes/char79.png", "images/ldsizes/char80.png", "images/ldsizes/char81.png", "images/ldsizes/char82.png", "images/ldsizes/char83.png", "images/ldsizes/char84.png", "images/ldsizes/char85.png", "images/ldsizes/char86.png", "images/ldsizes/char87.png", "images/ldsizes/char88.png", "images/ldsizes/char89.png", "images/ldsizes/char90.png", "images/ldsizes/char91.png", "images/ldsizes/char92.png", "images/ldsizes/char93.png", "images/ldsizes/char94.png", "images/ldsizes/char95.png", "images/ldsizes/char96.png", "images/ldsizes/char97.png", "images/ldsizes/char98.png", "images/ldsizes/char99.png", "images/ldsizes/char100.png", "images/ldsizes/char101.png", "images/ldsizes/char102.png", "images/ldsizes/char103.png", "images/ldsizes/char104.png", "images/ldsizes/char105.png", "images/ldsizes/char106.png", "images/ldsizes/char107.png", "images/ldsizes/char108.png", "images/ldsizes/char109.png", "images/ldsizes/char110.png", "images/ldsizes/char111.png", "images/ldsizes/char112.png", "images/ldsizes/char113.png", "images/ldsizes/char114.png", "images/ldsizes/char115.png", "images/ldsizes/char116.png", "images/ldsizes/char117.png", "images/ldsizes/char118.png", "images/ldsizes/char119.png", "images/ldsizes/char120.png", "images/ldsizes/char121.png", "images/ldsizes/char122.png", "images/ldsizes/char123.png", "images/ldsizes/char124.png", "images/ldsizes/char125.png", "images/ldsizes/char126.png", "images/ldsizes/char127.png", "images/ldsizes/char128.png", "images/ldsizes/char129.png", "images/ldsizes/char130.png", "images/ldsizes/char131.png", "images/ldsizes/char132.png", "images/ldsizes/char133.png", "images/ldsizes/char134.png", "images/ldsizes/char135.png", "images/ldsizes/char136.png", "images/ldsizes/char137.png", "images/ldsizes/char138.png", "images/ldsizes/char139.png", "images/ldsizes/char140.png", "images/ldsizes/char141.png", "images/ldsizes/char142.png", "images/ldsizes/char143.png", "images/ldsizes/char144.png", "images/ldsizes/char145.png", "images/ldsizes/char146.png", "images/ldsizes/char147.png", "images/ldsizes/char148.png", "images/ldsizes/char149.png", "images/ldsizes/char150.png", "images/ldsizes/char151.png", "images/ldsizes/char152.png", "images/ldsizes/char153.png", "images/ldsizes/char154.png", "images/ldsizes/char155.png", "images/ldsizes/char156.png", "images/ldsizes/char157.png", "images/ldsizes/char158.png", "images/ldsizes/char159.png", "images/ldsizes/char160.png", "images/ldsizes/char161.png", "images/ldsizes/char162.png", "images/ldsizes/char163.png", "images/ldsizes/char164.png", "images/ldsizes/char165.png", "images/ldsizes/char166.png", "images/ldsizes/char167.png", "images/ldsizes/char168.png", "images/ldsizes/char169.png", "images/ldsizes/char170.png", "images/ldsizes/char171.png", "images/ldsizes/char172.png", "images/ldsizes/char173.png", "images/ldsizes/char174.png", "images/ldsizes/char175.png", "images/ldsizes/char176.png", "images/ldsizes/char177.png", "images/ldsizes/char178.png", "images/ldsizes/char179.png", "images/ldsizes/char180.png", "images/ldsizes/char181.png", "images/ldsizes/char182.png", "images/ldsizes/char183.png", "images/ldsizes/char184.png", "images/ldsizes/char185.png", "images/ldsizes/char186.png", "images/ldsizes/char187.png", "images/ldsizes/char188.png", "images/ldsizes/char189.png", "images/ldsizes/char190.png", "images/ldsizes/char191.png", "images/ldsizes/char192.png", "images/ldsizes/char193.png", "images/ldsizes/char194.png", "images/ldsizes/char195.png", "images/ldsizes/char196.png", "images/ldsizes/char197.png", "images/ldsizes/char198.png", "images/ldsizes/char199.png", "images/ldsizes/char200.png", "images/ldsizes/char201.png", "images/ldsizes/char202.png", "images/ldsizes/char203.png", "images/ldsizes/char204.png", "images/ldsizes/char205.png", "images/ldsizes/char206.png", "images/ldsizes/char207.png", "images/ldsizes/char208.png", "images/ldsizes/char209.png", "images/ldsizes/char210.png", "images/ldsizes/char211.png", "images/ldsizes/char212.png", "images/ldsizes/char213.png", "images/ldsizes/char214.png", "images/ldsizes/char215.png", "images/ldsizes/char216.png", "images/ldsizes/char217.png", "images/ldsizes/char218.png", "images/ldsizes/char219.png", "images/ldsizes/char220.png", "images/ldsizes/char221.png", "images/ldsizes/char222.png", "images/ldsizes/char223.png", "images/ldsizes/char224.png", "images/ldsizes/char225.png", "images/ldsizes/char226.png", "images/ldsizes/char227.png", "images/ldsizes/char228.png", "images/ldsizes/char229.png", "images/ldsizes/char230.png", "images/ldsizes/char231.png", "images/ldsizes/char232.png", "images/ldsizes/char233.png", "images/ldsizes/char234.png", "images/ldsizes/char235.png", "images/ldsizes/char236.png", "images/ldsizes/char237.png", "images/ldsizes/char238.png", "images/ldsizes/char239.png", "images/ldsizes/char240.png", "images/ldsizes/char241.png", "images/ldsizes/char242.png", "images/ldsizes/char243.png", "images/ldsizes/char244.png", "images/ldsizes/char245.png", "images/ldsizes/char246.png", "images/ldsizes/char247.png", "images/ldsizes/char248.png", "images/ldsizes/char249.png", "images/ldsizes/char250.png", "images/ldsizes/char251.png", "images/ldsizes/char252.png", "images/ldsizes/char253.png", "images/ldsizes/char254.png", "images/ldsizes/char255.png", "images/ldsizes/char256.png", "images/ldsizes/char257.png", "images/ldsizes/char258.png", "images/ldsizes/char259.png", "images/ldsizes/char260.png", "images/ldsizes/char261.png", "images/ldsizes/char262.png", "images/ldsizes/char263.png", "images/ldsizes/char264.png", "images/ldsizes/char265.png", "images/ldsizes/char266.png", "images/ldsizes/char267.png", "images/ldsizes/char268.png", "images/ldsizes/char269.png", "images/ldsizes/char270.png", "images/ldsizes/char271.png", "images/ldsizes/char272.png", "images/ldsizes/char273.png", "images/ldsizes/char274.png", "images/ldsizes/char275.png", "images/ldsizes/char276.png", "images/ldsizes/char277.png", "images/ldsizes/char278.png", "images/ldsizes/char279.png", "images/ldsizes/char280.png", "images/ldsizes/char281.png", "images/ldsizes/char282.png", "images/ldsizes/char283.png", "images/ldsizes/char284.png", "images/ldsizes/char285.png", "images/ldsizes/char286.png", "images/ldsizes/char287.png", "images/ldsizes/char288.png", "images/ldsizes/char289.png", "images/ldsizes/char290.png", "images/ldsizes/char291.png", "images/ldsizes/char292.png", "images/ldsizes/char293.png", "images/ldsizes/char294.png", "images/ldsizes/char295.png", "images/ldsizes/char296.png", "images/ldsizes/char297.png", "images/ldsizes/char298.png", "images/ldsizes/char299.png", "images/ldsizes/char300.png", "images/ldsizes/char301.png", "images/ldsizes/char302.png", "images/ldsizes/char303.png", "images/ldsizes/char304.png", "images/ldsizes/char305.png", "images/ldsizes/char306.png", "images/ldsizes/char307.png", "images/ldsizes/char308.png", "images/ldsizes/char309.png", "images/ldsizes/char310.png", "images/ldsizes/char311.png", "images/ldsizes/char312.png", "images/ldsizes/char313.png", "images/ldsizes/char314.png", "images/ldsizes/char315.png", "images/ldsizes/char316.png", "images/ldsizes/char317.png", "images/ldsizes/char318.png", "images/ldsizes/char319.png", "images/ldsizes/char320.png", "images/ldsizes/char321.png", "images/ldsizes/char322.png", "images/ldsizes/char323.png", "images/ldsizes/char324.png", "images/ldsizes/char325.png", "images/ldsizes/char326.png", "images/ldsizes/char327.png", "images/ldsizes/char328.png", "images/ldsizes/char329.png", "images/ldsizes/char330.png", "images/ldsizes/char331.png", "images/ldsizes/char332.png", "images/ldsizes/char333.png", "images/ldsizes/char334.png", "images/ldsizes/char335.png", "images/ldsizes/char336.png", "images/ldsizes/char337.png", "images/ldsizes/char338.png", "images/ldsizes/char339.png", "images/ldsizes/char340.png", "images/ldsizes/char341.png", "images/ldsizes/char342.png", "images/ldsizes/char343.png", "images/ldsizes/char344.png", "images/ldsizes/char345.png", "images/ldsizes/char346.png", "images/ldsizes/char347.png", "images/ldsizes/char348.png", "images/ldsizes/char349.png", "images/ldsizes/char350.png", "images/ldsizes/char351.png", "images/ldsizes/char352.png", "images/ldsizes/char353.png", "images/ldsizes/char354.png", "images/ldsizes/char355.png", "images/ldsizes/char356.png", "images/ldsizes/char357.png", "images/ldsizes/char358.png", "images/ldsizes/char359.png", "images/ldsizes/char360.png", "images/ldsizes/char361.png", "images/ldsizes/char362.png", "images/ldsizes/char363.png", "images/ldsizes/char364.png", "images/ldsizes/char365.png", "images/ldsizes/char366.png", "images/ldsizes/char367.png", "images/ldsizes/char368.png", "images/ldsizes/char369.png", "images/ldsizes/char370.png", "images/ldsizes/char371.png", "images/ldsizes/char372.png", "images/ldsizes/char373.png", "images/ldsizes/char374.png", "images/ldsizes/char375.png", "images/ldsizes/char376.png", "images/ldsizes/char377.png", "images/ldsizes/char378.png", "images/ldsizes/char379.png", "images/ldsizes/char380.png", "images/ldsizes/char381.png", "images/ldsizes/char382.png", "images/ldsizes/char383.png", "images/ldsizes/char384.png", "images/ldsizes/char385.png", "images/ldsizes/char386.png", "images/ldsizes/char387.png", "images/ldsizes/char388.png", "images/ldsizes/char389.png", "images/ldsizes/char390.png", "images/ldsizes/char391.png", "images/ldsizes/char392.png", "images/ldsizes/char393.png", "images/ldsizes/char394.png", "images/ldsizes/char395.png", "images/ldsizes/char396.png", "images/ldsizes/char397.png", "images/ldsizes/char398.png", "images/ldsizes/char399.png", "images/ldsizes/char400.png", "images/ldsizes/char401.png", "images/ldsizes/char402.png", "images/ldsizes/char403.png", "images/ldsizes/char404.png", "images/ldsizes/char405.png", "images/ldsizes/char406.png", "images/ldsizes/char407.png", "images/ldsizes/char408.png", "images/ldsizes/char409.png", "images/ldsizes/char410.png", "images/ldsizes/char411.png", "images/ldsizes/char412.png", "images/ldsizes/char413.png", "images/ldsizes/char414.png", "images/ldsizes/char415.png", "images/ldsizes/char416.png", "images/ldsizes/char417.png", "images/ldsizes/char418.png", "images/ldsizes/char419.png", "images/ldsizes/char420.png", "images/ldsizes/char421.png", "images/ldsizes/char422.png", "images/ldsizes/char423.png", "images/ldsizes/char424.png", "images/ldsizes/char425.png", "images/ldsizes/char426.png", "images/ldsizes/char427.png", "images/ldsizes/char428.png", "images/ldsizes/char429.png", "images/ldsizes/char430.png", "images/ldsizes/char431.png", "images/ldsizes/char432.png", "images/ldsizes/char433.png", "images/ldsizes/char434.png", "images/ldsizes/char435.png", "images/ldsizes/char436.png", "images/ldsizes/char437.png", "images/ldsizes/char438.png", "images/ldsizes/char439.png", "images/ldsizes/char440.png", "images/ldsizes/char441.png", "images/ldsizes/char442.png", "images/ldsizes/char443.png", "images/ldsizes/char444.png", "images/ldsizes/char445.png", "images/ldsizes/char446.png", "images/ldsizes/char447.png", "images/ldsizes/char448.png", "images/ldsizes/char449.png", "images/ldsizes/char450.png", "images/ldsizes/char451.png", "images/ldsizes/char452.png", "images/ldsizes/char453.png", "images/ldsizes/char454.png", "images/ldsizes/char455.png", "images/ldsizes/char456.png", "images/ldsizes/char457.png", "images/ldsizes/char458.png", "images/ldsizes/char459.png", "images/ldsizes/char460.png", "images/ldsizes/char461.png", "images/ldsizes/char462.png", "images/ldsizes/char463.png", "images/ldsizes/char464.png", "images/ldsizes/char465.png", "images/ldsizes/char466.png", "images/ldsizes/char467.png", "images/ldsizes/char468.png", "images/ldsizes/char469.png", "images/ldsizes/char470.png", "images/ldsizes/char471.png", "images/ldsizes/char472.png", "images/ldsizes/char473.png", "images/ldsizes/char474.png", "images/ldsizes/char475.png", "images/ldsizes/char476.png", "images/ldsizes/char477.png", "images/ldsizes/char478.png", "images/ldsizes/char479.png", "images/ldsizes/char480.png", "images/ldsizes/char481.png", "images/ldsizes/char482.png", "images/ldsizes/char483.png", "images/ldsizes/char484.png", "images/ldsizes/char485.png", "images/ldsizes/char486.png", "images/ldsizes/char487.png", "images/ldsizes/char488.png", "images/ldsizes/char489.png", "images/ldsizes/char490.png", "images/ldsizes/char491.png", "images/ldsizes/char492.png", "images/ldsizes/char493.png", "images/ldsizes/char494.png", "images/ldsizes/char495.png", "images/ldsizes/char496.png", "images/ldsizes/char497.png", "images/ldsizes/char498.png", "images/ldsizes/char499.png", "images/ldsizes/char500.png"]);

  counter = 0;

  key_down = 0;

  key_up = 0;

  key_left = 0;

  key_right = 0;

  charmask = 0;

  wallmask = 0;

  pillmask = 0;

  chargrowth = 0;

  charsize = 100;

  charstate = 1;

  char_x = 300;

  char_y = 268;

  char_ver_acc = 0;

  char_ver_speed = 0;

  char_hor_acc = 0;

  char_hor_speed = 0;

  charSprite = new gamejs.sprite.Sprite();

  charSprite.rect = new gamejs.Rect([250, 500]);

  pilledown_pos1 = [200, 100];

  pilledown_pos2 = [400, 100];

  pilledown_pos3 = [600, 100];

  pilleup_pos1 = [200, 500];

  pilleup_pos2 = [400, 500];

  pilleup_pos3 = [600, 500];

  display = gamejs.display.setMode([800, 650]);

  draw = function() {
    var event, pilleMaskOverlap_1, pilleMaskOverlap_2, pilleMaskOverlap_3, relativeOffset_level2, relativeOffset_pilledown_1, relativeOffset_pilledown_2, relativeOffset_pilledown_3, relativeOffset_pilleup_1, relativeOffset_pilleup_2, relativeOffset_pilleup_3, wallMaskOverlap, _i, _len, _ref;
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
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([768, 285], [32, 30]), 0);
    chargrowth += charstate;
    if (chargrowth === 2) charsize += 1;
    if (chargrowth === 2) chargrowth = 0;
    char_ver_speed += char_ver_acc;
    char_ver_speed = char_ver_speed / 1.3;
    char_x += char_hor_speed;
    char_hor_speed += char_hor_acc;
    char_hor_speed = char_hor_speed / 1.3;
    char_y += char_ver_speed;
    charmask = gamejs.mask.fromSurface(gamejs.image.load("images/ldsizes/char" + charsize + ".png"));
    relativeOffset_level2 = gamejs.utils.vectors.subtract([0, 0], [char_x, char_y]);
    wallMaskOverlap = charmask.overlap(wallmask, relativeOffset_level2);
    if (wallMaskOverlap) console.log("kollision");
    relativeOffset_pilledown_1 = gamejs.utils.vectors.subtract(pilledown_pos1, [char_x, char_y]);
    pilleMaskOverlap_1 = charmask.overlap(pillmask, relativeOffset_pilledown_1);
    if (pilleMaskOverlap_1) console.log("pille");
    display.blit(gamejs.image.load("images/pill_down.png"), pilledown_pos1);
    relativeOffset_pilledown_2 = gamejs.utils.vectors.subtract(pilledown_pos2, [char_x, char_y]);
    pilleMaskOverlap_2 = charmask.overlap(pillmask, relativeOffset_pilledown_2);
    if (pilleMaskOverlap_2) console.log("pille");
    display.blit(gamejs.image.load("images/pill_down.png"), pilledown_pos2);
    relativeOffset_pilledown_3 = gamejs.utils.vectors.subtract(pilledown_pos3, [char_x, char_y]);
    pilleMaskOverlap_3 = charmask.overlap(pillmask, relativeOffset_pilledown_3);
    if (pilleMaskOverlap_3) console.log("pille");
    display.blit(gamejs.image.load("images/pill_down.png"), pilledown_pos3);
    relativeOffset_pilleup_1 = gamejs.utils.vectors.subtract(pilleup_pos1, [char_x, char_y]);
    pilleMaskOverlap_1 = charmask.overlap(pillmask, relativeOffset_pilleup_1);
    if (pilleMaskOverlap_1) console.log("pille");
    display.blit(gamejs.image.load("images/pill_up.png"), pilleup_pos1);
    relativeOffset_pilleup_2 = gamejs.utils.vectors.subtract(pilleup_pos2, [char_x, char_y]);
    pilleMaskOverlap_2 = charmask.overlap(pillmask, relativeOffset_pilleup_2);
    if (pilleMaskOverlap_2) console.log("pille");
    display.blit(gamejs.image.load("images/pill_up.png"), pilleup_pos2);
    relativeOffset_pilleup_3 = gamejs.utils.vectors.subtract(pilleup_pos3, [char_x, char_y]);
    pilleMaskOverlap_3 = charmask.overlap(pillmask, relativeOffset_pilleup_3);
    if (pilleMaskOverlap_3) console.log("pille");
    display.blit(gamejs.image.load("images/pill_up.png"), pilleup_pos3);
    charSprite.image = gamejs.image.load("images/ldsizes/char" + charsize + ".png");
    charSprite.rect = new gamejs.Rect([char_x, char_y]);
    return charSprite.draw(display);
  };

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

  level2 = function() {
    var level2maskimg, pillmaskimg;
    level2maskimg = gamejs.image.load('images/level2_mapmask.png');
    pillmaskimg = gamejs.image.load('images/pill_down.png');
    charmask = gamejs.mask.fromSurface(gamejs.image.load("images/ldsizes/char" + charsize + ".png"));
    wallmask = gamejs.mask.fromSurface(level2maskimg);
    pillmask = gamejs.mask.fromSurface(pillmaskimg);
    makeWall();
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([32, 32], [736, 536]), 0);
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([768, 285], [32, 30]), 0);
    charSprite.image = gamejs.image.load("images/char.png");
    return gamejs.time.fpsCallback(draw, this, 30);
  };

  gamejs.ready(level2);

}).call(this);
