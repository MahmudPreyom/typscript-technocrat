{
    //

    // Interface - generic

    interface Developer<T, X = null> {
        name: string;
        computer: {
            brand: string;
            model: string;
            releaseYear: number
        }
        smartWatch: T;
        bike?: X
    }

    type EmilabWatch = {
        brand: string;
        model: string;
        display: string;
    }

    const poorDeveloper: Developer<EmilabWatch> = {
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

    interface AppleWatch {
        brand: string;
        model: string;
        heartTrack: boolean;
        sleepTrack: boolean
    }

    const richDeveloper: Developer<AppleWatch, undefined> = {
        name: 'Asad',
        computer: {
            brand: 'hp',
            model: 'GIGABITE',
            releaseYear: 2019
        },
        smartWatch: {
            brand: 'Samsung',
            model: 'kw66',
            heartTrack: true,
            sleepTrack: true
        }
    }

    //
}