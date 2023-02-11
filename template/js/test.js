const openPopUp = document.getElementById('open_pop_up');
const closePopUP = document.getElementById('pop_up_close');
const popUP = document.getElementById('pop_up');

openPopUp.addEventListener('click', function(e){
    e.preventDefault();
    popUP.classList.add('actives');
})

closePopUP.addEventListener('click', () => {
    popUP.classList.remove('actives');
})




/** 
const btnOff = document.querySelector('scrol-off');
const btnOn = document.querySelector('scrol-on');
const body = document.body;

function disableScroll(){
    body.classList.add(disableScroll);
}

function enableScroll(){
    body.classList.remove(disableScroll);
}

btnOff.addEventListener('click', (e) => {
    disableScroll();
    e.currentTarget.style.pointerEvents = 'none';
    btnOn.style.pointerEvents = 'auto';
})

btnOn.addEventListener('click', (e) => {
    enableScroll();
    e.currentTarget.style.pointerEvents = 'none';
    btnOff.style.pointerEvents = 'auto';
})
**/