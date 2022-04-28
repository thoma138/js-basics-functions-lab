function distanceFromHqInBlocks (start) {
    if (start >= 42) {
        return start - 42;
    }
        else if (start < 42) {
            return 42 - start;
        }
}

console.log(distanceFromHqInBlocks(50));

function distanceFromHqInFeet (start) {
  return  distanceFromHqInBlocks (start)*264
}

console.log(distanceFromHqInFeet(34));

function distanceTravelledInFeet(start, destination) {
    if (start >=42) {
        return (destination - start)*264
    } else if (start < 42) {
        return (start - destination)*264
    }
}

console.log(distanceTravelledInFeet(34,28));

function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400) {
        return 0;
    } else if (distanceTravelledInFeet(start, destination) <= 2000) {
        return (distanceTravelledInFeet(start, destination) - 400)*0.02;
    } else if (distanceTravelledInFeet(start, destination) < 2500) {
        return 25;
    } else if (distanceTravelledInFeet(start, destination) >= 2500) {
        return 'cannot travel that far';
    }
}

console.log(calculatesFarePrice(34,24));