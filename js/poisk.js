document.querySelector('#poisk').oninput = function(){
    let val = this.value.trim();
    let poiskItems = document.querySelectorAll('.poisk li')
    if (val !='' ){
        console.log('test')
        elasticItems.forEach(function(elem){
            if (elem.innerText.search(val)== -1){
                elem.classList.add('hide')
            }
            else{
                elem.classList.remove('hide')
            }
        });
    }
}