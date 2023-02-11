const button13 = {
    el: document.querySelector('.button1'),
   
    addEventListener() {

      window.addEventListener('scroll', () => {

        const scrollY = window.scrollY || document.documentElement.scrollTop;

        
      });
      document.querySelector('.button13').onclick = () => {

        window.scrollTo({
          top: 3980,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  button13.addEventListener();


  