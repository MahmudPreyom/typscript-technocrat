{
    //Mapped types

    const arrOfNumbers: number[] = [1, 4, 5];

    // const arrOfString: string[] = ['1', '4', '5']
    const arrOfString: string[] = arrOfNumbers.map(number => number.toString())
    console.log(arrOfString);


    type AreaNumber = {
        height: number;
        width: number;
    };

    type Height = AreaNumber['height'] // look up type
    // type AreaString = {
    //     height: string;
    //     width: string;
    // }
    // keyof AreaNumber => "height" | "width"

    // T => {height: string;width: number}
    // key => T["height"]
    // key => T["width"]
    
    type AreaString<T> = {
        [key in keyof T]: T[key];
    }

    const area1: AreaString<{height: string; width: number}>= {
        height: "100",
        width: 50,
    }

    //
}