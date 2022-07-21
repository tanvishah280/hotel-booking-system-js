class Hotel {
    // Fetch hotels
    async getHotelList() {
        try {
            const hotelResponse = await axios.get(`http://localhost:8080/hotelbookingsystem/hotels`);

            const hotel = await hotelResponse.data;

            // console.log(hotel);
            // console.log(hotel[0].hotel_name);

            return hotel;
        } catch (error) {
            console.log(error);
        }
    }

    async addHotel(hotel) {
        try {
            const response = await axios.post(`http://localhost:8080/hotelbookingsystem/hotels`, {
                data: hotel
            }, {
                headers: {
                    'Content-type': 'application/json'
                }
            });
            return response;
        } catch (error) {
            console.log(error);
        }
    }
}