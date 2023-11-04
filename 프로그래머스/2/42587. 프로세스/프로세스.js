function solution(priorities, location) {
    let highestPriority = Math.max(...priorities);
    let order = 0;
    let locationOrder = location;
    
    while(priorities.length !== 0){
        const currentProcess = priorities[0];
        priorities.shift();
        if(currentProcess < highestPriority){
            priorities.push(currentProcess)
            if(locationOrder===0) {
                locationOrder += priorities.length;
            }
        } else {
            highestPriority = Math.max(...priorities);
            order++;
            if(locationOrder===0){
                return order;
            }
        }
        locationOrder--
    }
}