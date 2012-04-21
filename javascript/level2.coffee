gamejs = require('gamejs')

gamejs.preload(["images/char.png","images/wall.png","images/level1_mapmask.png","images/level2_mapmask.png","images/ldsizes/char64.png","images/ldsizes/char63.png","images/ldsizes/char62.png","images/ldsizes/char61.png","images/ldsizes/char60.png","images/ldsizes/char59.png","images/ldsizes/char58.png","images/ldsizes/char57.png","images/ldsizes/char56.png","images/ldsizes/char55.png","images/ldsizes/char54.png","images/ldsizes/char53.png","images/ldsizes/char52.png","images/ldsizes/char51.png","images/ldsizes/char50.png","images/ldsizes/char49.png","images/ldsizes/char48.png","images/ldsizes/char47.png","images/ldsizes/char46.png","images/ldsizes/char45.png","images/ldsizes/char44.png","images/ldsizes/char43.png","images/ldsizes/char42.png","images/ldsizes/char41.png","images/ldsizes/char40.png","images/ldsizes/char39.png","images/ldsizes/char38.png","images/ldsizes/char37.png","images/ldsizes/char36.png","images/ldsizes/char35.png","images/ldsizes/char34.png","images/ldsizes/char33.png","images/ldsizes/char32.png","images/ldsizes/char31.png","images/ldsizes/char30.png","images/ldsizes/char29.png","images/ldsizes/char28.png","images/ldsizes/char27.png","images/ldsizes/char26.png","images/ldsizes/char25.png","images/ldsizes/char24.png","images/ldsizes/char23.png","images/ldsizes/char22.png","images/ldsizes/char21.png","images/ldsizes/char20.png","images/ldsizes/char19.png","images/ldsizes/char18.png","images/ldsizes/char17.png","images/ldsizes/char16.png","images/ldsizes/char15.png","images/ldsizes/char14.png","images/ldsizes/char13.png","images/ldsizes/char12.png","images/ldsizes/char11.png","images/ldsizes/char10.png","images/ldsizes/char9.png","images/ldsizes/char8.png","images/ldsizes/char7.png","images/ldsizes/char6.png","images/ldsizes/char5.png","images/ldsizes/char4.png","images/ldsizes/char3.png","images/ldsizes/char2.png","images/ldsizes/char1.png"])

counter = 0
#globals…
key_down = 0
key_up = 0
key_left = 0
key_right = 0

#
charmask = 0
wallmask = 0

charsize = 64

char_x = 700
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
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([768, 285], [32, 30]), 0)

    char_ver_speed += char_ver_acc
    char_ver_speed = char_ver_speed / 1.3
    char_x += char_hor_speed
    char_hor_speed += char_hor_acc
    char_hor_speed = char_hor_speed / 1.3
    char_y += char_ver_speed
    
    #collision
    charmask = gamejs.mask.fromSurface(gamejs.image.load("images/ldsizes/char#{charsize}.png"))
    relativeOffset = gamejs.utils.vectors.subtract([0,0], [char_x,char_y])  
    hasMaskOverlap = charmask.overlap(wallmask, relativeOffset)
    if hasMaskOverlap then alert ("Kollision!!!!111!")


    charSprite.image = gamejs.image.load("images/ldsizes/char#{charsize}.png")
    charsize -= 1
    
    charSprite.rect = new gamejs.Rect([char_x,char_y])
    charSprite.draw(display)

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



level2 = ->
    #collision vars
    level2maskimg = gamejs.image.load('images/level2_mapmask.png')
    charmask = gamejs.mask.fromSurface(gamejs.image.load("images/ldsizes/char#{charsize}.png"))
    wallmask = gamejs.mask.fromSurface(level2maskimg)

    makeWall()
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([32, 32], [736, 536]), 0)
    gamejs.draw.rect(display, '#000000', new gamejs.Rect([768, 285], [32, 30]), 0)
    charSprite.image = gamejs.image.load("images/char.png")
    gamejs.time.fpsCallback(draw, this, 30)

gamejs.ready(level2)
