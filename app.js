const autos = require('./autos');
const persona = require('./persona')

const concesionaria = {
    autos: autos,

    persona: persona,

    buscarAuto: function(patente){
        return this.autos.filter(auto => auto.patente == patente )[0] || null
        
    },

    venderAuto: function(patente){
        let auto = this.buscarAuto(patente)
        if(auto){
            auto.vendido = true;
        }
    },

    autosParaLaVenta: function(){
        return autosEnVenta = autos.filter(auto => !auto.vendido)
    },

    autosNuevos: function(){
        return this.autosParaLaVenta().filter(auto => auto.km < 100);
    },

    listaDeVentas: function(){
        return this.autos.filter(auto => auto.vendido).map(auto => auto.precio)
    },

    totalDeVentas: function(){
        let lista = this.listaDeVentas();
        let total = lista.reduce(
            (acumulador, articulo) => acumulador + articulo, 0
            );
            return total;
    },

    puedeComprar: function(auto, persona){
        if((auto.precio <= persona.capacidadDePagoTotal) && ((auto.precio / auto.cuotas) <= persona.capacidadDePagoEnCuotas)){
            return true;
        } else{
            return false;
        }
    },

    autosQuePuedeComprar: function(persona){
        let autosEnVenta = this.autosParaLaVenta();
        return autosEnVenta.filter(auto => this.puedeComprar(auto, persona))
    }
}
console.log(concesionaria.autosQuePuedeComprar(persona))


