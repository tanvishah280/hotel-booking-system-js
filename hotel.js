class Hotel {
    // Fetch hotels
    async getHotelList() {
        try{
            const hotelResponse = await axios.get(`http://localhost:8080/hotelbookingsystem/hotels`);

            const hotel = await hotelResponse.data;

            console.log(hotel);
            console.log(hotel.hotel_name);

            return {
                hotel
            }
        } catch(error) {
            console.log(error);
        }
    }
}