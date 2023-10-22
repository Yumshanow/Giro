const buttons = document.querySelectorAll('.btn');
const btn__order = document.querySelector('.btn-header');
const order = document.querySelector('.form-order');
const btn__Esc = document.querySelector('.esc');
buttons.forEach((element) =>{
    element.addEventListener('click', ()=>{
        buttons.forEach(b => b.classList.remove('button-style'))
        element.classList.toggle('button-style')
        
    })
})

btn__order.addEventListener('click', (e) => {
    
    if(order.style.display != 'block' && order.className != 'form-order'){
        order.style.display = 'block';
    }
btn__Esc.addEventListener('click', (ev) => {
    order.style.display = 'none';
}) 
    

})

