class Carousel {
  constructor(carousel) {
    this.element = carousel;
    this.left = this.element.querySelector('.left-button');
    this.right = this.element.querySelector('.right-button');
    this.images = this.element.querySelectorAll('img');
    // Select first image by default
    this.selected = 0;
    this.images[this.selected].classList.add('carousel-show');
    // Prevent imageIter from triggering again during animation
    this.lock = false;

    this.left.addEventListener('click', () => this.iterImage(-1));
    this.right.addEventListener('click', () => this.iterImage(1));
  }
  iterImage(num) {
    if (!this.lock) {
      this.lock = true;
      const oldSelected = this.selected;
      this.images[oldSelected].classList.add(num > 0 ? 'out-left' : 'out-right');
      this.selected = (this.images.length + (this.selected + (num % this.images.length))) % this.images.length;
      const newSelected = this.selected;
      this.images[this.selected].classList.add('carousel-show');
      this.images[newSelected].classList.add(num > 0 ? 'in-left' : 'in-right');
      setTimeout(() => {
        this.images[oldSelected].classList.remove('carousel-show');
        this.images[oldSelected].classList.remove(num > 0 ? 'out-left' : 'out-right');
        this.images[newSelected].classList.remove(num > 0 ? 'in-left' : 'in-right');
        this.lock = false;
      }, 1040);
    }
  }
}

let carousel = new Carousel(document.querySelector('.carousel'));

/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to grab a reference to the carousel, and in it grab the laft and right buttons
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this compoennt. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/
