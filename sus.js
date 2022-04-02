const row_1 = document.querySelector("#row-1")
const row_2 = document.querySelector("#row-2")
const row_3 = document.querySelector("#row-3")
const row_4 = document.querySelector("#row-4")

let a = 1
let b = 8
let c = 15
let d = 22


function render(stort) {
   let dates=""
   for(let i=stort; i<stort+7; i++) {

      dates += `
      <td>
         ${i}
      </td>`
      
   }
   
   if(stort==a) {
      row_1.innerHTML = dates
   }else if(stort==b) {
      row_2.innerHTML = dates
   }else if(stort==c) {
      row_3.innerHTML = dates
   }else if(stort==d) {
      row_4.innerHTML = dates
   }
}
 
function view() {
   render(a)
   render(b)
   render(c)
   render(d)
}

view()