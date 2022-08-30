





let mrgvaliSelected = false
let martkutxediSelected = false
let martkutxediMrgvaliSelected = false
let amonatebitSelected = false
let gamonatebitSelected = false
let facetiSelected = false
let shaviKantiSelected = false

let mrgvali = document.getElementById('wre')
let martkutxedi = document.getElementById('otxkutxedi')
let martkutxediMrgvali = document.getElementById('otxkutxedi-momrgvalebuli')


let amonatebit = document.getElementById('amonatebit')
let gamonatebit = document.getElementById('gamonatebit')
let faceti = document.getElementById('faceti')
let shaviKanti = document.getElementById('shavi-kanti')
  
let height = document.getElementById('height')
let width = document.getElementById('width')
let diameter = document.getElementById('diameter')

let text = document.getElementById('price')
let submit = document.getElementById('submit-price')


mrgvali.addEventListener('click',()=>{
 

  mrgvaliSelected = !mrgvaliSelected
  if(mrgvaliSelected === true){
    height.style.display='none'
    width.style.display='none'
    diameter.style.display="block"
    diameter.style.alignSelf='center'
  }else{
    height.style.display='block'
    width.style.display='block'
    diameter.style.display='none'
  }
})



martkutxedi.addEventListener('click',()=>{
  height.style.display='block'
  width.style.display='block'
  diameter.style.display='none'
  martkutxediSelected = !martkutxediSelected
})

martkutxediMrgvali.addEventListener('click',()=>{
  height.style.display='block'
  width.style.display='block'
  diameter.style.display='none'
  martkutxediMrgvaliSelected = !martkutxediMrgvaliSelected
})
amonatebit.addEventListener('click',()=>{

  amonatebitSelected = !amonatebitSelected

})
gamonatebit.addEventListener('click',()=>{

  gamonatebitSelected = !gamonatebitSelected

})
faceti.addEventListener('click',()=>{

  facetiSelected = !facetiSelected

})
shaviKanti.addEventListener('click',()=>{

  shaviKantiSelected = !shaviKantiSelected

})

let price = 0
submit.addEventListener('click',()=>{

  if(mrgvaliSelected===true && amonatebitSelected===true){
    price = 5.1 * diameter.value 
    }
  if(mrgvaliSelected===true && gamonatebitSelected===true){
    price = 4.85 * diameter.value 
    }
  if(mrgvaliSelected===true && facetiSelected===true){
    price = 1.8 * diameter.value -1
    }
  if(mrgvaliSelected===true && shaviKantiSelected===true){
    price = 2 * diameter.value -1
    }


  if(martkutxediSelected===true && gamonatebitSelected===true){
    price = 550 * (height.value/100) * (width.value/100) -1
    }
  if(martkutxediSelected===true && amonatebitSelected===true){
    price = 600 * (height.value/100) * (width.value/100) -1
    }
  if(martkutxediSelected===true && facetiSelected===true){
    price = 150 * (height.value/100) * (width.value/100) -1
    }
  if(martkutxediSelected===true && shaviKantiSelected===true){
    price = 220 * (height.value/100) * (width.value/100) -1
    }

 if(martkutxediMrgvaliSelected===true && gamonatebitSelected===true){
      price = 570 * (height.value/100) * (width.value/100) -1
      }
  if(martkutxediMrgvaliSelected===true && amonatebitSelected===true){
        price = 620 * (height.value/100) * (width.value/100) -1
        }
  if(martkutxediMrgvaliSelected===true && facetiSelected===true){
          price = 210 * (height.value/100) * (width.value/100) -1
          }
  if(martkutxediMrgvaliSelected===true && shaviKantiSelected===true){
          price = 230 * (height.value/100) * (width.value/100) -1
          }

  text.textContent = `სარკის ფასია ${ Math.floor(price+1)} ლარი`
  setTimeout(()=>{
    text.textContent = ''
  },5000)
 
})


  


  