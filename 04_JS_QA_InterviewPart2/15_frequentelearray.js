// find most frequent item of an array 

function frequent(arr) {

    const frequencyMap = arr.reduce((map, item) => {
        map.set(item, (map.get(item) || 0) + 1);
        return map;
    }, new Map());

    // Find the item with the highest frequency
    let mostFrequent = null;
    let highestFrequency = 0;

    frequencyMap.forEach((frequency, item) => {
        if (frequency > highestFrequency) {
            mostFrequent = item;
            highestFrequency = frequency;
        }
    });

    console.log(mostFrequent);
}

frequent([1,1,2,3,3,3])