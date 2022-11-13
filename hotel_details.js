let parent = document.getElementById("parent");
let hotel_data = JSON.parse(localStorage.getItem("hotal-data"));

function display(data) {
  // console.log(data);
  let { about, amenity, image, logo, name, price, rating, roomfeature } = data;
  let main_div = document.createElement("div");
  main_div.id = "main-div";
  let amenit_div = document.createElement("div");
  amenity.forEach((element) => {
    let amenity_feature = document.createElement("p");
    amenity_feature.innerText = element;
    amenit_div.append(amenity_feature);
  });
  let roomfeature_div = document.createElement("div");
  roomfeature.forEach((element) => {
    let room_feature = document.createElement("p");
    room_feature.innerText = element;
    roomfeature_div.append(room_feature);
  });

  main_div.innerHTML = `
    <h1>${name}</h1>

    <div id="top-div">
            <div id="left-div">
                <div id="date">
                    <input type="date">
                    <input type="date">
                </div>
                <div id="site-mrp">
                    <img class="logo" src="${logo}" alt="">
                    <p>Price:- ${price}</p>

                </div>
                <div>
                    <a href="payment.html" class="book">View deal</a>
                </div>
            </div>
            <div id="right-div">
                <img src="${image}"
                    alt="">

            </div>
        </div>
        <div id="bottom-div">
            <div id="heading">
                <h1>About</h1>
            </div>
            <div id="about-bottom">
                <div id="l1">
                    <p>Rating</p>
                    <h1>${rating} very good</h1>
                    <p> ${about}
                    </p>

                </div>
                <div>
                    <h2>Amenities</h2>
                    
                    ${amenit_div.innerHTML}
                    </div>
                    <div>
                    <h2>Room features</h2>
                    
                    ${roomfeature_div.innerHTML}
                    </div>
                
            </div>
        </div>
        `;
  parent.append(main_div);
}
display(hotel_data);
