( () => {

    // No aplicando el principio de Responsabilidad Unica

    type Gender = 'M' | 'F';

    class Person {

        constructor( 
            public name: string, 
            public gender: Gender, 
            public birthdate: Date 
        ) {}

    }

    class User extends Person {
        
        public lastsAccess: Date;
        
        constructor(
            public email: string, 
            public role: string, 
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super( name, gender, birthdate );
            this.lastsAccess = new Date();
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {

        constructor(
            public workingDirectory : string,
            public lastOpenFolder   : string,
            email: string,
            role: string,
            name: string,
            gender: Gender,
            birthdate: Date
        ) {
            super( email, role, name, gender, birthdate );
        }
    }

    const userSettings = new UserSettings(
        '/usr/home',
        '/home',
        'esau24999@gmail.com',
        'Admin',
        'Esaú',
        'M',
        new Date('1999-11-24')
    ) 

    console.log({ userSettings });
    
})();