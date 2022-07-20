// Instantiate Hotel
const hotel = new Hotel;

// Instantiate UI
const ui = new UI;

// Get hotels on DOM load
document.addEventListener('DOMContentLoaded', getHotelList);

// getHotelList function
function getHotelList() {
    hotel.getHotelList().then(results => {
        console.log(results);
        ui.showHotelList(results);
    }).catch(err => console.log(err));
}
