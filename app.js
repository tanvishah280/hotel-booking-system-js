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

ui.addHotelForm();

const submitForm = document.getElementById('add-btn');

// Event listener for add hotel
submitForm.addEventListener('submit', (event) => {
    // Get form values
    const hotel_name = document.getElementById('hotel_name').value,
        hotel_location = document.getElementById('hotel_location').value,
        hotel_phone = document.getElementById('hotel_phone').value,
        hotel_email = document.getElementById('hotel_email').value,
        hotel_rating = document.getElementById('hotel_rating').value,
        pet_friendly = document.getElementById('pet_friendly:checked') != null;

    console.log(hotel_name);

    // if(hotel_name === '' || hotel_location === '' || hotel_phone === '' || hotel_email === '' || hotel_rating === '') {
    //     ui.showAlert('Please fill in all fields', 'error');
    // } else if(pet_friendly) {}
    event.preventDefault();
})

