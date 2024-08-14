( () => {

    // Aplicando el principio de Responsabilidad Unica
    // Priorizar la composicion frente a la Herencia

    type Gender = 'M' | 'F';
    
    // Props = Propertys
    interface PersonProps {
        birthdate : Date;
        gender    : Gender;
        name      : string;
    }

    interface UserProps {
        email: string,
        role: string,
    }

    interface SettingsProps  {
        workingDirectory: string;
        lastOpenFolder: string;
    }

    interface UserSettingsProps extends PersonProps, UserProps, SettingsProps {}

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

    class User {
        
        public email: string;
        public role: string;
        public lastAccess: Date;

        constructor( 
            { email, role }: UserProps, 
        ) {
            this.lastAccess = new Date();
            this.email = email;
            this.role = role;
        }

        checkCredentials() {
            return true;
        }
    }

    class Settings {

        public lastOpenFolder: string;
        public workingDirectory: string;

        constructor(
            { workingDirectory, lastOpenFolder }: SettingsProps,
        ) {
            this.lastOpenFolder = lastOpenFolder;
            this.workingDirectory = workingDirectory;
        }
    }

    class UserSettings {

        public person  : Person;
        public user    : User;
        public settings: Settings

        constructor({
            name, gender, birthdate, role, email, workingDirectory, lastOpenFolder
        }: UserSettingsProps){
            this.person = new Person({ name, gender, birthdate });
            this.user = new User({ role, email });
            this.settings = new Settings({ workingDirectory, lastOpenFolder });
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