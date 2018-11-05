
let cyberdemon = {
  name: 'CyberDemon',
  health: 500,
  items: []
}
let items = {
  armor: { name: 'armor', modifier: -10 },
  grenade: { name: 'grenade', modifier: 15 },
  rage: { name: 'rage', modifier: 25 }
}
function giveItem(num) {
  if (num = 1) {
    cyberdemon.items.push(items.armor)
  } else if (num = 2) {
    cyberdemon.items.push(items.grenade)
  } else {
    cyberdemon.items.push(items.rage)
  }
}
function addMods() {
  let itemsTotal = 0
  for (let i = 0; i < cyberdemon.items.length; i++) {
    itemsTotal += cyberdemon.items[i].modifier
  }
  return itemsTotal
}
function shootPistol() {
  cyberdemon.health -= 25 + addMods()
  cyberdemon.hits++
  update()
}
function shootShotgun() {
  cyberdemon.health -= 75 + addMods()
  cyberdemon.hits++
  update()
}
function shootBFG() {
  cyberdemon.health -= 300 + addMods()
  cyberdemon.hits++
  update()
}
function update() {
  document.getElementById('health').innerHTML = `${cyberdemon.health}`
}
function win() {
  if (cyberdemon.health <= 0) {
    document.getElementById('main-bg').innerHTML = `
    <div id="win-bg"></div>`
  }
}
update()