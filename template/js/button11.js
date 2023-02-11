const button11 = {
    el: document.querySelector('.button1'),
   
    addEventListener() {

      window.addEventListener('scroll', () => {
        
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        
        
      });
     
      document.querySelector('.button11').onclick = () => {
        
        window.scrollTo({
          top: 7900,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  button11.addEventListener();


  