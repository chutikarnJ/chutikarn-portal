function quickestPath({ portals: {"location": number, "destination": number}[]}):number {
    // set map to location and destination
    const map: Map<number,number> = new Map();
    for (const {location, destination} of portals) {
        map.set(location, destination)
    }
    //start at position 1
    let currentPos = 1;
    let bestPos = 0;
    let turn = 0;
    

    // try to walk from 1 to 11 steps
    while (currentPos !== 200) {
        for (let i = 1; i <= 11; i++) {
        let nextPos = currentPos + i;
        if (map.has(nextPos)) {
            nextPos = map.get(nextPos)!;
        }
        
        //select highest nextPos
        if (bestPos < nextPos) {
            bestPos = nextPos;
        }


        turn++;
    }
    }
    return turn;
    
}