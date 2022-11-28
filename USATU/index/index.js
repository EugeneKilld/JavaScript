const btn = document.getElementById('modalBtn')

//btn.onclick = () => {}
btn.addEventListener('click', () => {
    const modal = document.createElement('div')
    modal.setAttribute('style', 'height: 100vh; width: 100%; position: fixed; top: 0; left: 0; background-color: rgb(0,0,0,0.4)')
    modal.setAttribute('id', 'modal')
    document.body.appendChild(modal)
    createCloseBtn(modal)
})

function createCloseBtn(modal) {
    const btn = document.createElement('button')
    //const modal = document.getElementById('modal')
    btn.innerHTML = 'Закрыть'
    function remove() {
        modal.remove()
    }
    btn.addEventListener('click', remove)
    btn.removeEventListener('click', remove)
    modal.appendChild(btn)
} 


// var, let, const

var a = 1

let b = 2
const c = {
    name: 'bob',
    adress: 'ufa'
}
//console.log(c)
//c.name = 'jonh'
//console.log(c)


//for(const x in [1,2,3,4]) {
//    console.log(x)
//}








console.log(getName())
console.log(getAge2)
console.log(getAge2())


function getName() {
    return 'bob'
} // function declaration
const getAdress = function() {
    return 'ufa'
} // function expression

var getAge2 = () => {
    return 25
}
const getAge = () => {
    return '29'
}
// arrow function
const getNumber = () => 3


















//console.log(getName())
//console.log(getAdress())
//console.log(getAge())
//console.log(getNumber())


//области видимости

let global = 'global'

console.log(global)

console.log('before', varBlock)

{
    let block = 'block'
    const constBlock = 'constblock'
    var varBlock = 'varBlock'
}

{
    var varBlock = 'secondVarBlock'
}
//console.log(block)
//console.log(constBlock)
console.log(varBlock)

// var i = 0

for (var i = 0; i < 3; i++) {
    setTimeout(() => {
        console.log('timeout', i)
    }, 1000)
}


console.log('sync')

//const getNum = function() {
//    var one = 1
//}
//getNum()
//console.log(one)