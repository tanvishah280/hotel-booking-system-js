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

// call add hotel form method of UI 
ui.addHotelForm();

// const hotelDiv = document.querySelector('.hotel-div');
// const lastChild = hotelDiv.lastElementChild.firstElementChild;
// console.log(lastChild);

// Event listener for add hotel
document.addEventListener('click', (event) => {

    // console.log(event);
    ui.clearAddIcon();

    // Get form values
    const hotel_name = document.getElementById('hotel_name'),
        hotel_location = document.getElementById('hotel_location'),
        hotel_phone = document.getElementById('hotel_phone'),
        hotel_email = document.getElementById('hotel_email'),
        hotel_rating = document.getElementById('hotel_rating'),
        pet_friendly = document.getElementById('pet_friendly');

    let target = event.target;

    if (target.matches('#back-btn')) {
        ui.removeForm();
        getHotelList();

    } else if (target.matches('#add-btn')) {
        // return;
        if (hotel_name === '' || hotel_location === '' || hotel_phone === '' || hotel_email === '' || hotel_rating === '') {

            // ui.showAlert('Please fill in all fields', 'error');
        } else {

            addHotel();

            // clear fields
            ui.clearFields();
        }
    }
    event.preventDefault();
})


// addHotel function
function addHotel() {
    const hotelData = {
        hotel_name: hotel_name.value,
        hotel_location: hotel_location.value,
        hotel_phone: hotel_phone.value,
        hotel_email: hotel_email.value,
        hotel_rating: hotel_rating.value,
        pet_friendly: pet_friendly.checked
    };
    console.log('app.js hotelData', hotelData);
    hotel.addHotel(hotelData).then(response => {
        console.log(response);
    }).catch(err => console.log(err));
}
