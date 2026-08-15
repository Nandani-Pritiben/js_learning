// Imediately Invoked Function Expression (IIFE)

(function chai(){
    // named IIFE
    console.log('DB Connected');
})();

( (name) => {
    // Simple IIFE
    console.log(`Backend Server Started for ${name}`);
})('neha');