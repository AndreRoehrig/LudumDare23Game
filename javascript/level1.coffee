gamejs = require("gamejs")
gamejs.preload(["images/char.png","images/wall.png"])

#globals…

char_x = 0
char_y = 0
char_ver_acc = 0
char_ver_speed = 0
char_hor_acc = 0
char_hor_speed = 0


charSprite = new gamejs.sprite.Sprite()
charSprite.rect = new gamejs.Rect([250,500])

display = gamejs.display.setMode([800,600])

draw = ->
    display.clear()
    charSprite.draw(display)

charSprite = new gamejs.sprite.Sprite()
charSprite.rect = new gamejs.Rect([250,500])

handleEvent = (event) ->
    if event.key == gamejs.event.K_UP    and event.type == gamejs.event.KEY_DOWN then char_ver_acc += 1
    if event.key == gamejs.event.K_DOWN  and event.type == gamejs.event.KEY_DOWN then char_ver_acc -= 1
    if event.key == gamejs.event.K_RIGHT and event.type == gamejs.event.KEY_DOWN then char_hor_acc += 1
    if event.key == gamejs.event.K_LEFT  and event.type == gamejs.event.KEY_DOWN then char_hor_acc -= 1
main = ->
    
    charSprite.image = gamejs.image.load("images/char.png")
    gamejs.time.fpsCallback(draw, this, 30)


gamejs.ready(main)
