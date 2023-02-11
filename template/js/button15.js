const button15 = {
    el: document.querySelector('.button1'),
    
    addEventListener() {

      window.addEventListener('scroll', () => {

        const scrollY = window.scrollY || document.documentElement.scrollTop;

        
      });

      document.querySelector('.button15').onclick = () => {

        window.scrollTo({
          top: 3595,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  button15.addEventListener();


  