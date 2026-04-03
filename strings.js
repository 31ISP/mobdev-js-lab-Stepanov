const sentense = " javascript — это просто! "
console.log(sentense.trim().toUpperCase()[0] + sentense.trim().slice(1))

const lit1 = "Иванов Иван" 
const lit2 = "ИСР-21"
const lit3 = 4.75
console.log(`Студент ${lit1} группа ${lit2} средний балл: ${lit3}`)

const pi = "2025-03-15"
const re = pi.split ("-")
console.log(`${re[2]}.${re[1]}.${re[0]}`)

const ss = "Node.js разработчик" 

console.log(ss.startsWith("Node"), ss.endsWith("разработчик"))

const sorokdva = "42"
console.log(sorokdva.padStart(8, 0))