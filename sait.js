let open = document.querySelector('.pons') ;
let btn = document.querySelector('.bpt');
console.log(btn.classList)

btn.addEventListener(`click`, function() {
    open.classList.toggle(`open`);
    btn.classList.toggle(`h`)
    console.log(btn.classList)
})
