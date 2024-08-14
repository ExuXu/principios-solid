(() => {

    interface Product { 
        id:   number;
        name: string;
    }

    class ProductService {

        getProduct( id: number ) {
            console.log( 'Producto: ',{ id, name: 'OLED Tv' } )
        }

        saveProduct( product: Product ) {
            console.log('Guardando en base de datos', product );
        }

    }

    class Mailer {

        private mmasterEmail: string = 'esau@google.com'; 

        sendEmail( emailList: string[], template: 'to-clients' | 'to-admins') {
            console.log('Enviando correo a los clientes', emailList, template);
        }

    }
    
    // Usualmente, esto es una clase para controlar la vista que es desplegada al usuario
    // Recuerden que podemos tener muchas vistas que realicen este mismo trabajo.
    class ProductBloc {

        private productService: ProductService;
        private mailer: Mailer;

        constructor( productService: ProductService, mailer: Mailer) {
            this.productService = productService;
            this.mailer = mailer;
        }
    
        loadProduct( id: number ) {
            this.productService.getProduct( id );
        }

        saveProduct( product: Product ) {
            // Realiza una petición para salvar en base de datos 
            this.productService.saveProduct( product );
        }

        notifyClients() {
            this.mailer.sendEmail( ['esau@gmai.com'], 'to-clients' )
        }
    
    }

    class CartBlock {

        private itemsInCart: Object[] = [];
        
        onAddToCart( productId: number ) {
            // Agregar al carrito de compras
            console.log('Agregando al carrito ', productId );
        }

    }

    const productService = new ProductService();
    const mailer = new Mailer();

    const productBloc = new ProductBloc( productService, mailer);
    const cartBlock    = new CartBlock();

    productBloc.loadProduct(10);
    productBloc.saveProduct({ id: 10, name: 'OLED TV' });
    productBloc.notifyClients();
    cartBlock.onAddToCart(10);








})();