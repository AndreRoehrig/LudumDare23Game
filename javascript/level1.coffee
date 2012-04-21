gamejs = require('gamejs')

gamejs.preload(["images/char.png","images/wall.png"])

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
    if key_up == 1 then char_ver_acc -= 0.3
    if key_down == 1 then char_ver_acc += 0.3
    if key_right == 1 then char_hor_acc += 0.3
    if key_left == 1 then char_hor_acc -= 0.3
    handleEvent(event) for event in gamejs.event.get()
    char_ver_acc = char_ver_acc / 1.3
    char_hor_acc = char_hor_acc / 1.3
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([32, 32], [736, 536]), 0)
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([768, 200], [32, 200]), 0)
    char_ver_speed += char_ver_acc
    char_ver_speed = char_ver_speed / 1.3
    char_x += char_hor_speed
    char_hor_speed += char_hor_acc
    char_hor_speed = char_hor_speed / 1.3
    char_y += char_ver_speed
    
    #collision
    relativeOffset = gamejs.utils.vectors.subtract([char_x,char_y], [char_x,char_y])  
    hasMaskOverlap = charmask.overlap(charmask, relativeOffset)
    alert hasMaskOverlap

    charSprite.rect = new gamejs.Rect([char_x,char_y])
    charSprite.draw(display)

charSprite = new gamejs.sprite.Sprite()
charSprite.rect = new gamejs.Rect([char_ver_acc,500])

handleEvent = (event) ->
    
    if event.key == gamejs.event.K_UP    and event.type == gamejs.event.KEY_DOWN then key_up = 1
    if event.key == gamejs.event.K_DOWN  and event.type == gamejs.event.KEY_DOWN then key_down = 1
    if event.key == gamejs.event.K_RIGHT and event.type == gamejs.event.KEY_DOWN then key_right = 1
    if event.key == gamejs.event.K_LEFT  and event.type == gamejs.event.KEY_DOWN then key_left = 1
    if event.key == gamejs.event.K_UP    and event.type == gamejs.event.KEY_UP then key_up = 0
    if event.key == gamejs.event.K_DOWN  and event.type == gamejs.event.KEY_UP then key_down = 0
    if event.key == gamejs.event.K_RIGHT and event.type == gamejs.event.KEY_UP then key_right = 0
    if event.key == gamejs.event.K_LEFT  and event.type == gamejs.event.KEY_UP then key_left = 0

makeWall = ->
    i = 0
    while i < 32 
        display.blit(gamejs.image.load("images/wall.png"),[i*32,0])
        display.blit(gamejs.image.load("images/wall.png"),[i*32,568])
        i += 1
        if i < 19 then display.blit(gamejs.image.load("images/wall.png"),[0,i*32])
        if i < 19 then display.blit(gamejs.image.load("images/wall.png"),[768,i*32])
main = ->
    #collision vars
    charimg = gamejs.image.load('images/char.png')
    charmask = gamejs.mask.fromSurface(charimg)
    wallmask = gamejs.mask.Mask([800,32])

    makeWall()
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([32, 32], [736, 536]), 0)
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([768, 200], [32, 200]), 0)
    charSprite.image = gamejs.image.load("images/char.png")
    gamejs.time.fpsCallback(draw, this, 30)
   


gamejs.ready(main)
