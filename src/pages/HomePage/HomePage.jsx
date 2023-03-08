import ControlledCarousel from "../../components/Carousel/ControlledCarousel";
import "./HomePage.css";

// import $script from 'scriptjs';

// $script(`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`, function () {
//   //Put your google api functions here as callback
//   const mapDiv = document.getElmentById("map")
//   let map;
//   function initMap() {
//     map = new google.maps.Map(document.getElementById("map"), {
//         center: { lat:  20.5880600, lng:  -100.3880600 },
//         zoom: 8,
//     });
// }
// });



// src=`https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}&callback=initMap`>


// let map:
// function initMap() {
// map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat:  20.5880600, lng:  -100.3880600 },
//     zoom: 8,
// });
// }

function HomePage() {

  return (
    <div className="home">
        <section id="intro">
            <header>
            <img className="coffeeImg" src="/moka-pot.png" alt="coffee"/>
            <h2>Hi Coffee Lover!</h2>
          </header>
        </section>

      <>
      <ControlledCarousel />
      </>


     <h2 className="coffeeJourneyHeader">Start Your Brewing Coffee Manually Journey</h2>

      <div className="coffeeManually">
        <div className="text">
          <h2 className="headerCoffeeM">Brewing Coffee Manually</h2>
            <p className="ptext">
              It all started with that one cup of coffee, you remember it. The coffee was smooth and was comforting. It had body. There were flavors you had never tasted before. It was so good.
            </p>
            <p className="ptext">
              Maybe you were at a friend’s house, a coffee shop on vacation, or maybe someone gave you some coffee as a gift. You had never tasted anything like it before, and when it was gone you were left all alone with a giant tub of pre-ground generic coffee or a large (but well organized) assortment of overpriced, plastic single serving K cups.
            </p>
            <p className="ptext">
              Don’t be intimidated by this phrase. It isn’t something incredibly complex that is only for hipsters and baristas. It is simply realizing that automatic drip coffee is not all it is cracked up to be.
            </p>
            <p className="ptext">
              There is something about taking the time to hand craft a cup of coffee,
            </p>
        </div>
        <div className="image">
          <img className="V60" src="https://images.unsplash.com/photo-1545665613-29394cee622b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="V60 Dripper"/>
        </div>
      </div>
      <div className="extraContent" >
        <div id="map"></div>
      </div>

    </div>

  );
}

export default HomePage;
