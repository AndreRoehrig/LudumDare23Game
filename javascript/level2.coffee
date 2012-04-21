gamejs = require('gamejs')

gamejs.preload(["images/char.png","images/wall.png","images/level1_mapmask.png"])


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

    
    charSprite.rect = new gamejs.Rect([char_x,char_y])
    charSprite.draw(display)

main = ->
    
    
    
    charSprite.image = gamejs.image.load("images/char.png")
    gamejs.time.fpsCallback(draw, this, 30)
   

gamejs.ready(main)
