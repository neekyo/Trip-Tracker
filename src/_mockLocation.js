import * as Location from 'expo-location';

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
	return {
		timestamp: 1000000,
		coords: {
			speed: 0,
			heading: 0,
			accuracy: 5,
			altitudeAccuracy: 5,
			altitude: 5,
			latitude: 26.86273 + increment * tenMetersWithDegrees,
			longitude: -80.11437 + increment * tenMetersWithDegrees
		}
	};
};

let counter = 0;
setInterval(() => {
	Location.EventEmitter.emit('Expo.locationChanged', {
		watchId: Location._getCurrentWatchId(),
		location: getLocation(counter)
	});
	counter++;
}, 1000);
