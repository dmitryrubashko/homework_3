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
        last_name: 'Surname',
        email: 'dimdmdmdm@senate.gov',
        gender: 'Male',
        ip_address: '429.19.46.292',
    }
];


// const getSortUsers = (usersArray) => {
//     let womenUsers = [];
//     let menUsers = [];
//     return usersArray = ((user, index) => {  
//         if (usersArray[index].gender === 'Female') {
//             first.push(usersArray[user])
//         };
//         if (usersArray[index].gender === 'Male') {
//             second.push(usersArray[user])
//         };
//         const sortedArray = {
//             women: womenUsers,
//             men: menUsers
            
//         }
//         console.log(sortedArray[0]) 
//       })
      
// }

// const getSortUsers = (usersArray) => {
//     return usersArray.map((user, index) => ({
//         women:
//         men: 
//     }))
// }











// console.log(getSortUsers(users))
    
// console.log(users[4].gender)


// task 4 
const initialArray = [1, 'Hello', 3, 'Bye'];
const sortedArray = (randomArray) => {
    return randomArray.map((item, index) =>({
        elementValue: item,
        elementType: typeof (item),
        elementIndex: index
    }))
}

console.log (sortedArray(initialArray))