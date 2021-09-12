// task_1
const users = [
    {
        id: 1,
        first_name: 'Jeanette',
        last_name: 'Penddreth',
        email: 'jpenddreth0@census.gov',
        gender: 'Female',
        ip_address: '26.58.193.2',
    },

    {
        id: 2,
        first_name: 'Petr',
        last_name: 'Jackson',
        email: 'gfrediani1@senate.gov',
        gender: 'Male',
        ip_address: '229.179.4.212',
    },

    {
        id: 3,
        first_name: 'Alex',
        last_name: 'Pushkin',
        email: 'fffff@senate.gov',
        gender: 'Male',
        ip_address: '129.779.24.812',
    },

    {
        id: 4,
        first_name: 'Masha',
        last_name: 'Romanova',
        email: 'masharom@senate.gov',
        gender: 'Female',
        ip_address: '119.119.1.112',
    },

    {
        id: 5,
        first_name: 'Dima',
        last_name: 'Ivanov',
        email: 'dimdmdmdm@senate.gov',
        gender: 'Male',
        ip_address: '429.19.46.292',
    }
];

const getSortedArray = (usersArray) => {
    const sortedArray = {
        women: [],
        men: []
    };
    return usersArray.reduce((result, item, index) => {
        if (usersArray[index].gender === 'Female') {
            usersArray[index].fullName = `${usersArray[index].first_name} ${usersArray[index].last_name}`;
            delete usersArray[index].first_name;
            delete usersArray[index].last_name;
            (result.women).push(usersArray[index]);
        };
        if (usersArray[index].gender === 'Male') {  
            usersArray[index].fullName = `${usersArray[index].first_name} ${usersArray[index].last_name}`;
            delete usersArray[index].first_name;
            delete usersArray[index].last_name;
            (result.men).push(usersArray[index]);
        };
    return result;
    
    }, sortedArray)
    
}

console.log (getSortedArray(users));

// task_2
const initialData = [
    {
      username: 'Maria',
      age: 25,
    },

    {
      username: 'alex',
      age: 21,
    },

    {
      username: 'oleg',
      age: 14,
    },

    {
      username: 'dmitriy',
      age: 35,
    },

    {
      username: 'Oksana',
      age: 72,
    },

    {
        username: 'Yan',
        age: 100,
    }
];

const sortedAdultArray = (peopleArray) => {
    const sortedNames = peopleArray.sort((previous, next) => {
        if (previous.username.toLowerCase() > next.username.toLowerCase()) return 1;
        if (previous.username.toLowerCase() < next.username.toLowerCase()) return -1; 
    });

    return sortedNames.reduce((result, user, index) => {
        if (peopleArray[index].age >= 21) result.push(user);
        return result;
    }, []);
}

console.log(sortedAdultArray(initialData));

// task_3

const usersList = [
    {
        id: 1,
        name: 'Alex'
    },

    {
        id: 2,
        name: 'Tomara'
    },

    {
        id: 3,
        name: 'Max'
    },

    {
        id: 4,
        name: 'Kent'
    },

    {
        id: 5,
        name: 'Sveta'
    }
];

const getUsersList = (users, ids) => {
    const shortUserList = [];
    for (let i = 0; i < users.length; i++) {
        if (!ids.includes(users[i].id)) {
            shortUserList.push(users[i])
        };   
    };
    return shortUserList;
}
const idArray_1 = [1, 2, 3, 4];
const idArray_2 = [3];
console.log(getUsersList(usersList, idArray_1));
console.log(getUsersList(usersList, idArray_2));

// task 4 
const initialArray = [1, 'Hello', 3, 'Bye', 'WORLD'];
const sortedArray = (unsortedArray) => {
    return unsortedArray.map((item, index) =>({
        elementValue: item,
        elementType: typeof (item),
        elementIndex: index
    }))
}

console.log (sortedArray(initialArray))

// task_5 
const isPalindrome = (word) => {
    for (let i = 0; i <= Math.floor(word.length/2); i++) {
        if (word[i].toLowerCase() !== word[word.length-i-1].toLowerCase()) {
            return false;
        }; 
    };
    return true;
}
console.log (isPalindrome('ШАлАш'));
console.log (isPalindrome('привет'));

// task_6

const newMovies = [
    {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
    },

    {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }]
    },

    {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
    },

    {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }]
    }
];

const getImportantInfo = (releases) => {
    const result = [];
    for (let i = 0; i < releases.length; i++) {
        delete releases[i].boxart;
        delete releases[i].uri;
        delete releases[i].rating;
        delete releases[i].bookmark;
        result.push(Object.assign({}, releases[i]));
    };
    return result;
}

console.log(getImportantInfo(newMovies))   

// task_7
const newReleases = [
    {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
    ur: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
    }, 
    
    {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }]
    }, 
    
    {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [4.0],
    bookmark: []
    }, 
    
    {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
    uri: "http://api.netflix.com/catalog/titles/movies/70111470",
    rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }]
   }
];

const releaseId = (releases) => {
    const result = [];
    for (let i = 0; i < releases.length; i++) {
        if (Number(releases[i].rating) === 5) {
            result.push(releases[i].id);
        };   
    };
    return result;
}
  
console.log(releaseId(newReleases));

// task_8
const videos = [
    {
    id: 4,
    title: "The Chamber"
    },

    {
    id: 3,
    title: "Fracture"
    },

    {
    id: 2,
    title: "Die Hard"
    },
    
    {
    id: 1,
    title: "Bad Boys"
    }
];

const correctedArray = (videosArray) => {
    return videosArray.reduce((result, movie) => {
        result[movie.id] = movie.title;
        return result;
    }, {})
}

console.log (correctedArray(videos))
   

// task_9 
const boxarts = [
    {
      width: 200,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture200.jpg"
    },

    {
      width: 150,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"
    },

    {
      width: 300,
      height: 200,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture300.jpg"
    }, 

    {
      width: 425,
      height: 150,
      url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    }
];

const showUrl = (arts) => {
    const squares = arts.map((picture, index) => arts[index].width * arts[index].height);
    const indexOfUrl = squares.reduce((result, square) => Math.max(result, square));
    return arts[squares.indexOf(indexOfUrl)].url;
};

console.log(showUrl(boxarts));
