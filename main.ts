sprites.onDestroyed(SpriteKind.Enemy, function (sprite) {
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    game.over(false)
})
let projectile: Sprite = null
let mySprite = sprites.create(img`
    bbbb........bbbb.................
    c99bb......bb99b.................
    c999bb....bb999c.................
    c9b99bccccb99b9c.................
    c9bb99bccb99bb9c.................
    c93b99999999b39c.................
    c93399999999339c.................
    c99399999999399c.................
    c99999991199999c.................
    c999ff91119ff99c........bbbbbb...
    c999ff91111ff99c.......c999999bb.
    c99991111111999c......c99999999b.
    c9991111fff1199c.....c9991119999b
    c999c11fff11999c.....c9911111999b
    c999cc111111c99c.....c911dd11199b
    c99999bb33cc999cc....cbddbbd1199c
    c999999b33c99999bbccccbbdbbb1199c
    c9999999bb9999999999999999bb1999c
    c999911119999999999999999999b999c
    c999111111999999999999999999999c.
    c99911111119999999999999999999cc.
    c99111111119999999999999999999c..
    c99111111111999999999999999999c..
    cf9111111111999999999999999999c..
    .f9111111111999999999999999999c..
    .ff111111111999999999999999999c..
    ..fb11111111999999999999999999c..
    ...fb1111119999999111111999999c..
    ...fb9911119999991111111199999c..
    ....f99ffff9999fffffffffff9999c..
    ....f99f..f999f.....f99f.f9999c..
    ....f99f..f999f.....f99f.cc9999c.
    ....f99f..f99f.......f9f..cc999c.
    ....f99f..f99f.......f99f..cc99c.
    ....f99f..f99f.......f99f...c99c.
    ....f99f..f99f......f999f...c99c.
    ...f999f..f99f......ffff....c99c.
    ...f99f..f999f.............c999c.
    ...ffff..f99ff.............c999c.
    .........ffff..............cccc..
    `, SpriteKind.Player)
controller.moveSprite(mySprite, 0, 50)
mySprite.x = 8
mySprite.setStayInScreen(true)
info.setScore(0)
game.onUpdateInterval(1000, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . f 1 f 1 f . . . . . . . . 
        . . f 1 f 1 f 1 f . . . . . . . 
        . . 1 1 1 1 f 1 1 . . . . . . . 
        . . 1 f 1 f 1 1 f . . . . . . . 
        . . f 1 f 1 f 1 1 . . . . . . . 
        . . 1 f 1 f 1 f 1 . . . . . . . 
        . . . 1 f 1 f 1 f . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, -150, 0)
    projectile.setPosition(scene.screenWidth(), randint(0, scene.screenHeight()))
    if (info.score() < 10) {
        projectile.vx += 100
    }
})
