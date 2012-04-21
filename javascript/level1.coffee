gamejs = require("gamejs")
gamejs.preload(["images/char.png","images/runner.png"])

display = gamejs.display.setMode([800,600])

draw = ->
    display.clear()
    runner = gamejs.image.load("images/char.png")
    charSprite.draw(display)

charSprite = new gamejs.sprite.Sprite()
charSprite.rect = new gamejs.Rect([250,500])

main = ->
    
    charSprite.image = gamejs.image.load("images/runner.png")
    gamejs.time.fpsCallback(draw, this, 30)


gamejs.ready(main)
