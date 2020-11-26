
import React from 'react';
import  Image1  from './CarouselImages/herobanner1.jpg';
import  Image2  from './CarouselImages/herobanner2.jpg';
import Image3 from './CarouselImages/herobanner3.jpg';
import  Image4 from './CarouselImages/herobanner4.jpeg';
import  Image5  from './CarouselImages/herobanner5.jpg';
import  Image6  from './CarouselImages/herobanner6.jpeg';
import  Image7  from './CarouselImages/herobanner7.jpeg';
import  Image8  from './CarouselImages/herobanner8.jpeg';
import  Image9  from './CarouselImages/herobanner9.jpeg';


const Carousel = (props) => {

return(
  <div class="addition"> 
  <section class="slideshow"> 
      <div class="contentCarousel"> 
          <div class="content-carrousel"> 
              <figure class="shadow"> 
                  <img src= {Image1} />
              </figure> 
              <figure class="shadow"> 
                  <img src= {Image2} />
              </figure> 
              <figure class="shadow">  
              <img src= {Image3} />
              </figure> 
              <figure class="shadow"> 
              <img src= {Image4} />
              </figure> 
              <figure class="shadow"> 
              <img src= {Image5} />
              </figure> 
              <figure class="shadow"> 
              <img src= {Image6} />
              </figure> 
              <figure class="shadow"> 
              <img src= {Image7} />
              </figure> 
              <figure class="shadow"> 
              <img src= {Image8} />
              </figure> 
              <figure class="shadow"> 
              <img src= {Image9} />
              </figure> 
          </div> 
      </div> 
  </section> 
</div> 
  );
}

export default Carousel;


