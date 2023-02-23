const k = kaboom({
    width: 1000,
    height: 500,
    scale: 1,
    clearColor: [0, 0, 0, 1]
})

 k.scene("main",() =>{
     add([text("DFV",{
        size:80,
    }),
    pos(450,100),
])

add([
    text("Start"),
    pos(400, 225),
])})

go("main")



