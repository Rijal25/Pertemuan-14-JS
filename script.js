import { tambah, kurang, kali, bagi } from './functions.js'

const x = 10
const y = 5

document.getElementById('x').textContent = x
document.getElementById('y').textContent = y

document.getElementById('penjumlahan').textContent = tambah(x, y)
document.getElementById('pengurangan').textContent = kurang(x, y)
document.getElementById('perkalian').textContent = kali(x, y)
document.getElementById('pembagian').textContent = bagi(x, y)