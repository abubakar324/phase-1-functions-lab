// Code your solution in this file!
// distanceFromHqInBlocks
function distanceFromHqInBlocks(pickupLocation) {
  const headquarters = 42;
  return Math.abs(pickupLocation - headquarters);
}

// distanceFromHqInFeet
function distanceFromHqInFeet(pickupLocation) {
  return distanceFromHqInBlocks(pickupLocation) * 264;
}

// distanceTravelledInFeet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

// calculatesFarePrice
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
