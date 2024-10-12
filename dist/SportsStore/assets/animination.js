function animinate() {

TweenLite.to(".rectangle", 5, {
      backgroundColor: "#000000",
      color: "red",
      ease: Power4.easeIn
    });
    AOS.init();
    
    }
