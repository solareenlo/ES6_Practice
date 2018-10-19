var trips = [{ distance: 34 }, { distance: 12 } , { distance: 1 }];
var sum = 0;

var totalDistance = trips.reduce(function(sum, trip) {
    return sum + trip.distance;
}, 0);

console.log(totalDistance);
