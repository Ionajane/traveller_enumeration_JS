const Traveller = function(journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function() {
  return this.journeys.map(journey => journey.startLocation)
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map(journey => journey.endLocation)
};


Traveller.prototype.getJourneysByTransport = function (transport) {
// we want to filter the journey arrays and find the transport used.
  return this.journeys.filter( journey => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  // Currently we have 1000 in distance and we need to give back an array that contains only the journeys above this distance.
  return this.journeys.filter(journey => journey.distance >= minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const reducer = (totalDistance, currDistance) => totalDistance + currDistance;
  const sum = this.journeys.reduce(reducer);
  return this.journeys.reduce(reducer);
};
//return this.journeys.reduce(reducer => journey.distance == totalDistance);


Traveller.prototype.getUniqueModesOfTransport = function () {
  return this.journeys.filter(journey => journey.transport);
};
// something that will return everything in the array without repeating

module.exports = Traveller;
