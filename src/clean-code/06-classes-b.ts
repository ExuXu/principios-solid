( () => {

    // No aplicando el principio de Responsabilidad Unica

    type Gender = 'M' | 'F';
    
    // Props = Propertys
    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    interface UserProps extends PersonProps {
        email: string,
        role: string,
    }

    interface UserSettingsProps extends UserProps {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    class Person {
         public birthdate: Date;
         public gender: Gender;
         public name: string;

        constructor( { name, gender,  birthdate }: PersonProps) {
            this.birthdate = birthdate;
            this.gender = gender;
            this.name = name;
        }

    }

    class User extends Person {
        
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor( 
            { email, role, name, gender, birthdate }: UserProps, 
        ) {
            super({ name, gender, birthdate });
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    class UserSettings extends User {

        public workingDirectory: string;
        public lastOpenFolder: string;

        constructor(
            { workingDirectory, lastOpenFolder, email, role, name, gender, birthdate }: UserSettingsProps,
        ) {
            super( { email, role, name, gender, birthdate });
            this.workingDirectory = workingDirectory;
            this.lastOpenFolder = lastOpenFolder;
        }
    }

    const userSettings = new UserSettings({
        workingDirectory: '/usr/home',
        lastOpenFolder: '/home',
        email: 'esau24999@gmail.com',
        role: 'Admin',
        name: 'Esaú',
        gender: 'M',
        birthdate: new Date('1999-11-24')
    }) 

    console.log({ userSettings });
    
})();