(() => {

    function getMovieById( id: string ) {
        console.log({ id });
    }

    function getMovieCastById( id: string ) {
        console.log({ id });
    }

    // funcion para obtener el bio del actor por el id
    function getActorBioById( id: string ) {
        console.log({ id });
    }
    
    interface Movie {
        title: string, 
        description: string, 
        rating: number, 
        cast: string[]
    }

    function createMovie( { title, description, rating, cast }: Movie ) {
        console.log({ title, description, rating, cast });
    }
 
    function checkFullName( fullName: string ) {
        console.log({ fullName });
        return true;
    }

    function createActor( fullName: string, birthdate: Date ): boolean {
        
        if ( checkFullName( fullName ) ) return false;

        console.log('Crear actor', birthdate);
        return true;        

    }

    interface PayAmout {
        isDead: boolean,
        isSeparated: boolean,
        isRetired: boolean,
    }

    const getPayAmount = ({ isDead = false, isSeparated = true, isRetired = false }: PayAmout): number => {

        if ( isDead ) return 1500;

        if ( isSeparated ) return 2500;

        return isRetired ? 3000 : 4000;

    }

})();
