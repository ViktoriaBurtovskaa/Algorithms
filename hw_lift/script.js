const lifts = [
    {id: 'A', currentFloor: 2, direction: 'up'},
    {id: 'B', currentFloor: 9, direction: 'down'}
  ];
  
  function sendLiftToFloor(floor) {
    const availableLifts = lifts.filter(lift => lift.direction === 'idle' || 
                                                  lift.direction === 'up' && floor >= lift.currentFloor || 
                                                  lift.direction === 'down' && floor <= lift.currentFloor);
    if (availableLifts.length === 0) {
      // no available lifts
      return null;
    } else if (availableLifts.length === 1) {
      // one available lift
      return availableLifts[0];
    } else {
      // multiple available lifts
      const closestLift = availableLifts.reduce((prev, curr) => 
        Math.abs(curr.currentFloor - floor) < Math.abs(prev.currentFloor - floor) ? curr : prev);
      return closestLift;
    }
  }
  
  // usage example
  const lift = sendLiftToFloor(1);
  if (lift !== null) {
    console.log(`Sending lift ${lift.id} to floor 1`);
  } else {
    console.log('No available lifts');
  }
  