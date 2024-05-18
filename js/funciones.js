class CJugador{
    constructor(){
        this.jugadoresVec = []
    }

    agregarJugador(nombre, posicion, edad, estatura, peso, nacionalidad){
        this.jugadoresVec.push({
            nombre: nombre,
            posicion: posicion,
            edad: edad,
            estatura: estatura,
            peso: peso,
            nacionalidad: nacionalidad,
        })
    }

    listarNacionalidadArg(){
        const jugadoresArgentinos = [];
        for (const jugador of this.jugadoresVec){
            if(jugador.nacionalidad === "Argentina"){
                jugadoresArgentinos.push(jugador.nombre);
            }
        }
        return jugadoresArgentinos;
    }

    listarPeso75a80(){
        const jugadoresEntre75a80 = [];
        for (const jugador of this.jugadoresVec){
            if(jugador.peso >=75 && jugador.peso <=80){
                jugadoresEntre75a80.push(jugador.nombre);
            }
        }
        return jugadoresEntre75a80;
    }

    listarJugadorMasAlto(){
        let jugadorMasAlto = [];
        let mayorAltura = parseFloat(0);
        for (const jugador of this.jugadoresVec){
            if(parseFloat(jugador.estatura) > mayorAltura){
                mayorAltura = parseFloat(jugador.estatura)
                jugadorMasAlto = []
                jugadorMasAlto.push(jugador.nombre);
            }
            else if(parseFloat(jugador.estatura) === mayorAltura){
                jugadorMasAlto.push(jugador.nombre)
            }
        }
        return jugadorMasAlto;
    }

}

const jugador = new CJugador();

jugador.agregarJugador("Fabio1","G","43","1.88 m","86","Brasil")
jugador.agregarJugador("Marlon4","D","28","1.83 m","78","Brasil")
jugador.agregarJugador("Marcelo12","D","35","1.73 m","72","Brasil")
jugador.agregarJugador("Nino33","D","26","1.88 m","82","Brasil")
jugador.agregarJugador("John Kennedy9","A","21","1.73 m","71","Brasil")
jugador.agregarJugador("Keno11","A","34","1.78 m","72","Brasil")
jugador.agregarJugador("German Cano14","A","35","1.78 m","81","Argentina")

console.log("Los jugadores con nacionalidad argentina son: " + jugador.listarNacionalidadArg());
console.log("Los jugadores entre 75 a 80 kg son: " + jugador.listarPeso75a80());
console.log("El o los jugadores mas altos son: " + jugador.listarJugadorMasAlto());