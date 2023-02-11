const button12 = {
    el: document.querySelector('.button1'),
    
    addEventListener() {

      window.addEventListener('scroll', () => {

        const scrollY = window.scrollY || document.documentElement.scrollTop;

        
      });
      document.querySelector('.button12').onclick = () => {


        window.scrollTo({
          top: 1530,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  button12.addEventListener();


  