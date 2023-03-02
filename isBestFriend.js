// 5. Check whether the given object's person are BestFriend or not

function isBestFriend(person) {
    // data type check 
    if (Array.isArray(person) !== true) {
        return 'Please Enter an object type Array';
    }

    // Declare Two Empty array for placing object values and compare with each other
    let newName = [];
    let newFriend = [];
    for (let i = 0; i < person.length; i++) {
        const index = i;
        const element = person[index];

        // Put values in the empty arrays
        newName.push(element.name);
        newFriend.push(element.friend);

    }

    // compare with each other under a conditional statement
    if (newName[0] == newFriend[1] && newName[1] == newFriend[0]) {
        return true;
    }
    else {
        return false;
    }
}

const person = [{ name: 'Tom', friend: 'Rock' }, { name: 'Rock', friend: 'Tom' }];
const friends = isBestFriend(person);
console.log(friends);