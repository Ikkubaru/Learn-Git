var fariable = "ini tipe ada string"
let fariableTwo = 10.1
let fariableFive = 10.2 // ini number
const fariableThre = true  // ini boolean
let fariableFour = 
[
    'ini index 0',
    1,
    true,
    'ini index 3',
    'ini index 4',
    'ini index 5',
    'ini index 6',
] 
// array

let fariableSix = {
    id:1, nama:'iqbal'
}
let fariableSeven = 
// fariableSeven ini nama object bukan variable tapi object
[
    // setelah '=' pakai [] (kurung siku) untuk menyimpan nilai object didalam array
    {id:1.5, nama:'iqbal', pacar:false},
    // untuk membuat object pakai {}
    // didalam object bebas di isi apa saja
    // didalam object ada yg namanya index ditulis sebelum tanda :
    // setelah tanda : biasanya berisi nilai dari object 
    // nilai object bisa semua tipe data
    {id:2, nama:'Sholeh'},
    {id:3, nama:'Prasetyo'},
    {id:4, nama:'iqbal'},
]

console.log(fariableSeven)

function IqbalSholeh(){
    let variabel = console.log('Hello World')

    return variabel
}

Aku = (a, b) =>{

return a * b;

}

IqbalSholeh()
console.log(Aku(10, 10))