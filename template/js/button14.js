const button14 = {
    el: document.querySelector('.button1'),
   
    addEventListener() {

      window.addEventListener('scroll', () => {

        const scrollY = window.scrollY || document.documentElement.scrollTop;

        
      });

      document.querySelector('.button14').onclick = () => {

        window.scrollTo({
          top: 7400,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  button14.addEventListener();


  