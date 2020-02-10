import UserRepository from '../repositories/user/UserRepository'

const userRepository = new UserRepository();

export default () => {
    const user = {
        name: 'head-trainee',
        address: 'Noida',
        //dob: new Date('25-12-1998'),
        email: 'swapnil.paritosh@successive.tech',
        mobileNumber: 8543990225,
        hobbies: ['Dance', 'Guitar']
    };

    userRepository.count().then((count) => {
        console.log('Count of User is ',count);
        if(!count){
            return userRepository.create(user)
            .then((res) =>{
                console.log('User Seeded Successfully', res)
            })

        }
        console.log('User already Exists');
        
    })
    .catch((err) => console.error(err));
}