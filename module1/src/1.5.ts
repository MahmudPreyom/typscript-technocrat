// Reference Type --> Object
{
const user : {
    company: 'Programming Hero'; // type --> literal types
    readonly occupation: string
    firstName: string;
    middleName?: string; // Optional Type
    lastName: string;
    isMarried: boolean;
} = {
    company: 'Programming Hero',
    occupation: 'Student',
    firstName: 'Abdullah',
    // middleName: 'Al',
    lastName: 'Mahmud',
    isMarried: false,
};

user.occupation

}