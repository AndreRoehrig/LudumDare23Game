gamejs = require('gamejs')

gamejs.preload(["images/char.png","images/wall.png","images/level1_mapmask.png","images/ldsizes/char63.png","images/ldsizes/char62.png","images/ldsizes/char61.png","images/ldsizes/char60.png","images/ldsizes/char59.png","images/ldsizes/char58.png"])

counter = 0
#globals…
key_down = 0
key_up = 0
key_left = 0
key_right = 0

#
charmask = 0
wallmask = 0


char_x = 100
char_y = 268
char_ver_acc = 0
char_ver_speed = 0
char_hor_acc = 0
char_hor_speed = 0


charSprite = new gamejs.sprite.Sprite()
charSprite.rect = new gamejs.Rect([250,500])

display = gamejs.display.setMode([800,650])

draw = ->
    handleEvent(event) for event in gamejs.event.get()
    counter += 1
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([32, 32], [736, 536]), 0)
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([768, 200], [32, 200]), 0)
    if counter > 30 then charSprite.image = gamejs.image.load("images/ldsizes/char63.png")
    if counter > 60 then charSprite.image = gamejs.image.load("images/ldsizes/char62.png")
    if counter > 120 then charSprite.image = gamejs.image.load("images/ldsizes/char61.png")
    if counter > 150 then charSprite.image = gamejs.image.load("images/ldsizes/char60.png")
    if counter > 180 then charSprite.image = gamejs.image.load("images/ldsizes/char59.png")
    if counter > 210 then charSprite.image = gamejs.image.load("images/ldsizes/char58.png")
    
    charSprite.rect = new gamejs.Rect([char_x,char_y])
    charSprite.draw(display)

main = ->
    
    
    
    charSprite.image = gamejs.image.load("images/char.png")
    gamejs.time.fpsCallback(draw, this, 30)
   

gamejs.ready(main)
