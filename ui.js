class UI {
    // Display hotel list in UI
    showHotelList(hotel) {
        let output = '';

        let countHotels = 0;

        // get span element of <a> tag from nav
        const totalHotels = document.querySelector('.total-hotels');

        // get table body from table
        const hotelList = document.getElementById('hotel-list');

        hotel.forEach(function (hotel) {
            // Create tr element
            const row = document.createElement('tr');
            row.id = 'list-row';

            output = `<td>${hotel.hotel_name}</td>
            <td>${hotel.hotel_location}</td>
            <td>${hotel.hotel_phone}</td>
            <td>${hotel.hotel_email}</td>
            <td>${hotel.hotel_rating}</td>
            <td>${hotel.pet_friendly}</td>
            <td><a href="#" class="view secondary-content"><i class="view-item fa fa-eye"></i></a>
                <a href="#" class="edit secondary-content"><i class="edit-item fa fa-pencil"></i></a>
                <a href="#" class="delete secondary-content"><i class="delete-item fa fa-xmark"></i></a>
            </td>`;

            // console.log(hotel);

            // Insert cols
            row.innerHTML = output;

            // append row
            hotelList.appendChild(row);

            // increment the count of hotels
            countHotels++;
        });

        // add the count hotels to totalHotels text content
        totalHotels.textContent = countHotels;
    }

    // Add new hotel
    addHotelForm() {

        const hotelDiv = document.querySelector('.hotel-div');

        const addIcon = document.querySelector('.add').addEventListener('click', () => {
            document.querySelector('.table').style.display = 'none';

            // create a break line element
            const br = document.createElement('br');

            // create a table element
            const table = document.createElement('table');
            table.id = 'hotel-form-table';

            // create form element
            const form = document.createElement('form');
            form.id = 'hotel-add-form';

            // Create tr element
            const row1 = document.createElement('tr');
            row1.id = 'hotel-form-table-row';

            // create td element
            const data1 = document.createElement('td');
            const data2 = document.createElement('td');

            // Create tr element
            const row2 = document.createElement('tr');
            row2.id = 'hotel-form-table-row';

            // create td element
            const data3 = document.createElement('td');
            const data4 = document.createElement('td');

            // Create tr element
            const row3 = document.createElement('tr');
            row3.id = 'hotel-form-table-row';

            // create td element
            const data5 = document.createElement('td');
            const data6 = document.createElement('td');

            // Create tr element
            const row4 = document.createElement('tr');
            row4.id = 'hotel-form-table-row';

            // create td element
            const data7 = document.createElement('td');
            const data8 = document.createElement('td');

            // Create tr element
            const row5 = document.createElement('tr');
            row5.id = 'hotel-form-table-row';

            // create td element
            const data9 = document.createElement('td');
            const data10 = document.createElement('td');

            // Create tr element
            const row6 = document.createElement('tr');
            row6.id = 'hotel-form-table-row';

            // create td element
            const data11 = document.createElement('td');
            const data12 = document.createElement('td');

            // Create tr element
            const row7 = document.createElement('tr');
            row7.id = 'hotel-form-table-row';

            // create td element
            const data13 = document.createElement('td');

            // create an input element for hotel name
            const hotelName = document.createElement('input');
            hotelName.type = 'text';
            hotelName.placeholder = 'Hotel Name';
            hotelName.id = 'hotel_name';

            // Create label for hotel name
            const hotelNameLabel = document.createElement('label');
            hotelNameLabel.htmlFor = 'hotel_name';
            hotelNameLabel.appendChild(document.createTextNode('Hotel Name'));

            // create an input element for hotel location
            const hotelLocation = document.createElement('input');
            hotelLocation.type = 'text';
            hotelLocation.placeholder = 'Hotel Location';
            hotelLocation.id = 'hotel_location';

            // Create label for hotel location
            const hotelLocationLabel = document.createElement('label');
            hotelLocationLabel.htmlFor = 'hotel_location';
            hotelLocationLabel.appendChild(document.createTextNode('Hotel Location'));

            // create an input element for hotel phone
            const hotelPhone = document.createElement('input');
            hotelPhone.type = 'text';
            hotelPhone.placeholder = 'Hotel Phone';
            hotelPhone.id = 'hotel_phone';

            // Create label for hotel phone
            const hotelPhoneLabel = document.createElement('label');
            hotelPhoneLabel.htmlFor = 'hotel_phone';
            hotelPhoneLabel.appendChild(document.createTextNode('Hotel Phone'));

            // create an input element for hotel email
            const hotelEmail = document.createElement('input');
            hotelEmail.type = 'text';
            hotelEmail.placeholder = 'Hotel Email';
            hotelEmail.id = 'hotel_email';

            // Create label for hotel email
            const hotelEmailLabel = document.createElement('label');
            hotelEmailLabel.htmlFor = 'hotel_email';
            hotelEmailLabel.appendChild(document.createTextNode('Hotel Email'));

            // create an input element for hotel rating
            const hotelRating = document.createElement('input');
            hotelRating.type = 'text';
            hotelRating.placeholder = 'Hotel Rating';
            hotelRating.id = 'hotel_rating';

            // Create label for hotel rating
            const hotelRatingLabel = document.createElement('label');
            hotelRatingLabel.htmlFor = 'hotel_rating';
            hotelRatingLabel.appendChild(document.createTextNode('Hotel Rating'));

            // create an input element for Pet Friendly
            const petFriendly = document.createElement('input');
            petFriendly.type = 'checkbox';
            petFriendly.value = 'value';
            petFriendly.id = 'pet_friendly';

            // Create label for checkbox - Pet Friendly
            const petFriendlyLabel = document.createElement('label');

            // assign aatribute for checkboxLabel
            petFriendlyLabel.htmlFor = 'pet_friendly';

            // create a text node & append it to label
            petFriendlyLabel.appendChild(document.createTextNode('Pet Friendly'));

            // create a submit button
            const addBtn = document.createElement('input');
            addBtn.type = 'submit';
            addBtn.value = 'Add Hotel';
            addBtn.id = 'add-btn';

            // appending form to div
            hotelDiv.appendChild(form);
            // appending table to form
            form.appendChild(table);
            // appending row to table
            table.appendChild(row1);
            // appending data, input & label element
            row1.appendChild(data1);
            data1.appendChild(hotelNameLabel);
            row1.appendChild(data2);
            data2.appendChild(hotelName);

            table.appendChild(row2);
            row2.appendChild(data3);
            data3.appendChild(hotelLocationLabel);
            row2.appendChild(data4);
            data4.appendChild(hotelLocation);

            table.appendChild(row3);
            row3.appendChild(data5);
            data5.appendChild(hotelPhoneLabel);
            row3.appendChild(data6);
            data6.appendChild(hotelPhone);

            table.appendChild(row4);
            row4.appendChild(data7);
            data7.appendChild(hotelEmailLabel);
            row4.appendChild(data8);
            data8.appendChild(hotelEmail);

            table.appendChild(row5);
            row5.appendChild(data9);
            data9.appendChild(hotelRatingLabel);
            row5.appendChild(data10);
            data10.appendChild(hotelRating);

            table.appendChild(row6);
            row6.appendChild(data11);
            data11.appendChild(petFriendlyLabel);
            row6.appendChild(data12);
            data12.appendChild(petFriendly);

            // appending add button to table
            table.appendChild(row7);
            row7.appendChild(data13);
            data13.appendChild(addBtn);

            // addIcon.style.display = 'none';
        });
    }

    // show alert method
    showAlert(message, className) {
        // create div
        const div = document.createElement('div');
        // Add classes
        div.className = `alert ${className}`;
        // Add text 
        div.appendChild(document.createTextNode(message));
        // Get parent
        const hotelDiv = document.querySelector('.hotel-div');
        // Get form
        const form = document.getElementById('hotel-add-form');
        // Insert alert before form
        hotelDiv.insertBefore(div, form);
    }
}