const button10 = {
    el: document.querySelector('.button10'),
   
    addEventListener() {
      window.addEventListener('scroll', () => {

        const scrollY = window.scrollY || document.documentElement.scrollTop;


        
      });
      document.querySelector('.button10').onclick = () => {

        window.scrollTo({
          
          top: 2063,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  button10.addEventListener();


  