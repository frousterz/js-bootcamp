let restaurant = {
    name: 'FCK',
    guestCapacity: 100,
    guestCount: 0,
    checkAvailability: function(partySize) {
        return partySize <= (this.guestCapacity - this.guestCount)  // Seats left
    },
    seatParty: function(partySize) {
        if(this.checkAvailability(partySize)) {
            this.guestCount += partySize
            return true
        }
        return false
    },
    removeParty: function(partySize) {
        if (this.guestCount >= partySize) {
            this.guestCount -= partySize
            return true
        }
        return false
    }
}

let status = restaurant.checkAvailability(10)
console.log('************');
restaurant.seatParty(25)
console.log(restaurant)
restaurant.removeParty(5)
console.log(restaurant)
restaurant.removeParty(15)
console.log(restaurant)