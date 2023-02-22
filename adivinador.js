class Adivinador{
    constructor(secreto){
        //Aqui va el numero secreto
        this.secreto = secreto;
        //Aqui se guardan los errores del usuario
        this.errores = [];
    }
    adivinar(){
        
    // Pide numero al usuario entre 1 y 100 y lo guarda en num
    const num = parseInt(prompt("Ingresa un numero entre 1 - 100"));
    // Comprueba que el numero se encuentra en el rango
    if(num > 0 && num<100){
        //Compara si el numero es igual al numero secreto
        if(num===this.secreto){
            //Si adivina el numero se cierra la función y te imprime tus errores
            alert("Felicidades :D")
            console.log("Felicidades, adivinaste el numero secreto");
            //Imprime el array con tus errores
            console.log("Tus errores: "+this.errores);
        }else{
            //Imprime en pantalla que te equivocaste
            alert("Ups, El numero es incorrecto, vuelve a intentarlo!");
            //Imprime en consola que te equivocaste
            console.log("Ups, El numero es incorrecto, vuelve a intentarlo!");
            //meter numeros incorrectos en el array errores.
            this.errores.push(num);
            //Volver a llamar a la función hasta que adivines
            return this.adivinar();
        }
    }else{
        alert("Ingresa un numero valido! entre 1 - 100");
        return this.adivinar();
    }
}
}

const dani = new Adivinador(10);
dani.adivinar();