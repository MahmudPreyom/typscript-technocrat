{
    // ternary operator || optional chaining || nullish coalescing operator

    const age: number = 18;

    if (age >= 18) {
        console.log("adult");
    } else {
        console.log("not adult");
    }

    const isAdult = age >= 18 ? "adult" : "not adult"
    console.log({ isAdult });

    // nullish coalescing operator
    // null / undefined --> decision making

    // const isAuthenticate = undefined;
    const isAuthenticate = "";

    const result1 = isAuthenticate ?? "Guest";
    const result2 = isAuthenticate ? isAuthenticate : "Guest";
    console.log({result1}, {result2});

    type User = {
        name: string;
        address: {
            city: string;
            road: string;
            presentAddress: string;
            permanentAddress? : string;
        }
    }
    

    const user : User = {
        name: "Preyom",
        address: {
            city: "Feni",
            road: "Doctor Para",
            presentAddress: "Feni Town"
        }
    };
    //  const permanentAddress = user.address.permanentAddress;
     const permanentAddress = user?.address?.permanentAddress?? 'No Permanent address';
     console.log({permanentAddress});
     

}