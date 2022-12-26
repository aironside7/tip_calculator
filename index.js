const dis5= document.getElementById("5")
const dis10= document.getElementById("10")
const dis15= document.getElementById("15")
const dis25= document.getElementById("25")
const dis50= document.getElementById("50")
const ammount= document.getElementById("bill-inp")
const cosDis= document.getElementById("coustom-dis")
const totip= document.getElementById("numofp")
const rsButt= document.getElementById("reset")
const first= document.getElementById("total-tips")
const secound= document.getElementById("tip-per")
let bill,totalper,totaltip,eachTip
function totalTipp(inp){
    bill= +ammount.value
    totalper= +totip.value 
    totaltip= (((inp/100)*bill)/totalper).toFixed(2)
    eachTip=((bill+(inp/100)*bill)/totalper).toFixed(2)
    console.log(eachTip)
    console.log(totaltip)
    first.innerHTML=`$${totaltip}`
   secound.innerHTML=`$${eachTip}`

}

cosDis.addEventListener("input",()=>{
   if(totip.value!="" || totip.value!=0){
        totalTipp(totip.value)

    }
})

dis5.addEventListener("click",()=>{
    if(totip.value=="" || totip==0){
       
    }else{
        totalTipp(5)
    }
})
dis10.addEventListener("click",()=>{
    if(totip.value=="" || totip==0){
       
    }else{
        totalTipp(10)
    }
})
dis15.addEventListener("click",()=>{
    if(totip.value=="" || totip==0){
       
    }else{
        totalTipp(15)
    }
})
dis25.addEventListener("click",()=>{
    if(totip.value=="" || totip==0){
       
    }else{
        totalTipp(25)
    }
})
dis50.addEventListener("click",()=>{
    if(totip.value=="" || totip==0){
       
    }else{
        totalTipp(50)
    }
})
rsButt.addEventListener("click",()=>{
    totaltip.innerHTML=`$0.00`
    eachTip.innerHTML=`$0.00`
})

