
// let monsters = [{
//   name: 'Imp',
//   dps: 10,
//   health: 100,
// },
// {
//   name: 'Hellknight',
//   dps: 25,
//   health: 200
// }, {
//   name: 'Cyberdemon',
//   dps: 50,
//   health: 500
// }]
let cyberdemon = {
  name: 'CyberDemon',
  dps: 50,
  health: 500
}
let doomGuy = {
  name: 'Doom Guy',
  health: 150,
  armor: 50,
  shottyAmmo: 10,
  bfgAmmo: 2,
}
let alertElem = document.getElementById('alert')
let alertTemplate = ''
// function spawnMonster(level) {
//   let monster = monsters[level]
//   if (monster.health <= 0) {
//     let monster = monsters[level++]
//   }
//   return monster
// }
function shootPistol(monster) {
  cyberdemon.health - 25
}
function shootShotgun(monster) {
  if (doomGuy.shottyAmmo > 0) {
    cyberdemon.health - 75
    doomGuy.shottyAmmo - 1
  } else {
    alertTemplate = `
    <h1>NO AMMO</h1>`
  }
}
function shootBFG(monster) {
  if (doomGuy.bfgAmmo > 0) {
    cyberdemon.health - 300
    doomGuy.bfgAmmo - 1
  } else {
    alertTemplate = `
    <h1>NO AMMO</h1>`
  }
}
function update() {

}
alertElem.innerHTML = alertTemplate