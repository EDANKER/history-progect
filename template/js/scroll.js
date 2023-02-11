const scroll2 = {
    el: document.querySelector('.btn-up'),
   
    addEventListener() {
      window.addEventListener('scroll', () => {

        const scrollY = window.scrollY || document.documentElement.scrollTop;


        
      });
      document.querySelector('.scroll').onclick = () => {

        window.scrollTo({
          
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  scroll2.addEventListener();


  