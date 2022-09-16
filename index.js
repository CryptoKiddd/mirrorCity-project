





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


let price = 0
submit.addEventListener('click',()=>{

  if(mrgvaliSelected===true ){price =2.1 *diameter.value -1}
  if(martkutxediSelected===true ){price = 200 * (height.value/100) * (width.value/100) -1}
  if(martkutxediMrgvaliSelected===true ){price =220 * (height.value/100) * (width.value/100) -1}

  if(mrgvaliSelected===true && amonatebitSelected===true){
    price = 5.1 * diameter.value 
    }
  if(mrgvaliSelected===true && gamonatebitSelected===true){
    price = 4.85 * diameter.value 
    }
  
 

   


  if(martkutxediSelected===true && gamonatebitSelected===true){
    price = 550 * (height.value/100) * (width.value/100) -1
    }
  if(martkutxediSelected===true && amonatebitSelected===true){
    price = 600 * (height.value/100) * (width.value/100) -1
    }
  

 if(martkutxediMrgvaliSelected===true && gamonatebitSelected===true){
      price = 570 * (height.value/100) * (width.value/100) -1
      }
  if(martkutxediMrgvaliSelected===true && amonatebitSelected===true){
        price = 620 * (height.value/100) * (width.value/100) -1
        }

       
        text.textContent = 
        `სარკის ფასია ${ Math.floor(price+1)} ლარი`
if(price<2){text.textContent=`გთხოვთ მიუთითეთ ზომები`}
if(martkutxediMrgvaliSelected===false &&martkutxediSelected===false && mrgvaliSelected===false){
  text.textContent="გთხოვთ აირჩიეთ  სარკის ფორმა"
}


  

  
  
 
  
 
 
})
let nav = document.getElementById('nav');
document.getElementById('hambureger').addEventListener('click', function(){
  nav.classList.toggle('active-nav-click')
 
  
  
});
  


  