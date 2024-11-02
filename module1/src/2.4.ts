{
    //

    // Interface - generic

    interface Developer<T> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T
    }

    const poorDeveloper: Developer <object> = {
        name: 'Preyom',
        computer: {
            brand: 'hp',
            model: 'MSI',
            releaseYear: 2020
        },
        smartWatch: {
            brand: 'Samsung',
            model: 'kw66',
            display: 'OLED'
        }
    }
    const richDeveloper : Developer <object> = {
        name: 'Asad',
        computer: {
            brand: 'hp',
            model: 'GIGABITE',
            releaseYear: 2019
        },
        smartWatch: {
            brand: 'Samsung',
            model: 'kw66',
            display: 'OLED'
        }
    }

    //
}