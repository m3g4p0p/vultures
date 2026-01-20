import kaplay from "kaplay"
// import "kaplay/global"; // uncomment if you want to use without the k. prefix

const k = kaplay({ background: "000000" })

k.loadRoot("./") // A good idea for Itch.io publishing later

k.loadSprite(
  "clock",
  ["sprites/lea.webp", "sprites/robin.webp", "sprites/sebastian.webp"],
  {
    anims: {
      idle: {
        from: 0,
        to: 2,
        speed: 5,
        loop: true,
      },
    },
  },
)

k.scene("main", () => {
  const target = k.center()
  const player = k.add([k.pos(target), k.sprite("clock"), k.anchor("center")])
  let elapsed = 0

  player.play("idle")

  k.onMouseDown(() => {
    Object.assign(target, k.mousePos())
  })

  player.onUpdate(() => {
    player.pos = player.pos.add(target.sub(player.pos).scale(k.dt()))
    elapsed += k.dt()

    k.setBackground(
      k.Color.fromArray([
        (player.pos.x / k.width()) * 255,
        (player.pos.y / k.height()) * 255,
        Math.sin(elapsed) * 255,
      ]),
    )
  })
})

k.go("main")
