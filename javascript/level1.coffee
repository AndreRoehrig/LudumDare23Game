gamejs = require ("gamejs")
gamejs.preload([])

display = gamejs.display.setMode([800,600])


main = ->
    display.blit(gamejs.draw.line(display, "#ff00cc",[0,0],[100,100],30))

gamejs.ready(main)
