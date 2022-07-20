class UI {
    constructor() {
        this.hotelList = document.getElementById('hotel-list');
        // this.totalHotels = document.querySelector('.total-hotels');
    }

    // Display hotel list in UI
    showHotelList() {
        let output = '';
        let hotels;

        hotels.forEach(function (hotel) {
            // Create tr element
            const row = document.createElement('tr');

            output += `<td>${hotel.hotel_name}</td>
            <td>${hotel.hotel_location}</td>
            <td>${hotel.hotel_phone}</td>
            <td>${hotel.hotel_email}</td>
            <td>${hotel.hotel_rating}</td>
            <td>${hotel.pet_friendly}</td>
            <td><a href="#" class="view secondary-content"><i class="view-item fa fa-eye"></i></a>
                <a href="#" class="edit secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                <a href="#" class="delete secondary-content"><i class="delete-item fa fa-xmark"></i></a>
            </td>`;

            console.log(hotel.hotel_name);

            // Insert cols
            row.innerHTML = output;

            // append row
            this.hotelList.appendChild(row);

        });
    }
}