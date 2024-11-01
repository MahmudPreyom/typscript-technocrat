{
    // Type Alias

    type Student = {
        name: string;
        age: number;
        gender: string;
        contactNo?: string;
        address: string;
    }
    const student1: Student = {
        name: "Mahmud",
        age: 23,
        gender: "Male",
        contactNo: "012345678990",
        address: "Feni"
    };

    const student2: Student = {
        name: "Abdullah",
        age: 23,
        gender: "Male",
        address: "Feni"
    };
    const student3: Student = {
        name: "Abdullah Al",
        age: 23,
        gender: "Male",
        address: "Feni"
    };

    type UserName = string
    type IsAdmin = boolean
    const UserName: UserName = 'Mahmud'
    const isAdmin: IsAdmin = false

    type Add = (num1: number, num2: number) => number;

    const add: Add = (num1, num2) => num1 + num2;


}