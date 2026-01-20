import kaplay from "kaplay"
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({ background: "000000" })

k.loadRoot("./") // A good idea for Itch.io publishing later
k.loadSprite("bean", "sprites/lea.webp")

k.scene("main", () => {
  const target = k.center()
  const player = k.add([k.pos(target), k.sprite("bean"), k.anchor("center")])

  k.onMouseDown(() => {
    Object.assign(target, k.mousePos())
  })

  player.onUpdate(() => {
    player.pos = player.pos.add(target.sub(player.pos).scale(k.dt()))
  })
})

k.go("main")
