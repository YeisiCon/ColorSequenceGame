
const btnEmpezar = document.getElementById('btnEmpezar');
const celeste = document.getElementById('celeste');
const violeta = document.getElementById('violeta');
const naranja = document.getElementById('naranja');
const verde = document.getElementById('verde');
const ULTIMO_NIVEL = 5;

class Juego{
    constructor(){
    this.Inicializar = this.Inicializar.bind(this);
    this.Inicializar();
    this.generarSecuencia();
    this.iluminarSecuencia();
    this.siguienteNivel();
  
}
Inicializar(){
    this.siguienteNivel = this.siguienteNivel.bind(this);
    this.elegirColor = this.elegirColor.bind(this);
    btnEmpezar.classList.add('hide');
    this.nivel = 1
    this.colores = {
       celeste,
       violeta,
       naranja,
       verde
        
    }
    console.log("0")
    console.log(this.colores)
  }
  generarSecuencia(){
      
   this.secuencia = new Array(ULTIMO_NIVEL).fill(0).map(n => Math.floor(Math.random() * 4))
 
   console.log(this.secuencia)

   
  }
  siguienteNivel(){
    this.subnivel= 0
    this.iluminarSecuencia()
    this.agregarEventosClick()

    
 }
  transformarNumeroAColor(numero){
    console.log("3")
        switch (numero){
            case 0:
                return 'celeste'
            case 1:
                return 'violeta'
            case 2:
                return 'naranja'
             case 3:
                 return 'verde'       
        }
        console.log("3")
   }

  
 iluminarSecuencia(){
   for(let i = 0 ; i < this.nivel; i++){
       const color = this.transformarNumeroAColor(this.secuencia[i])
       setTimeout(() => this.iluminarColor(color), 1500 * i ); 
       console.log(color)
    }
 }
   iluminarColor(color){
    console.log("aqui ilumina") 
    this.colores[color].classList.add('light') 
     setTimeout(() => this.apagarColor(color), 500) 
   
 }
   apagarColor(color){
     this.colores[color].classList.remove('light')
 }
   agregarEventosClick(){
       
       this.colores.celeste.addEventListener('click', this.elegirColor)
       this.colores.violeta.addEventListener('click', this.elegirColor)
       this.colores.naranja.addEventListener('click', this.elegirColor)
       this.colores.verde.addEventListener('click', this.elegirColor)
   }

    eliminarEventosClick(){
    this.colores.celeste.addEventListener('click', this.elegirColor)
    this.colores.violeta.addEventListener('click', this.elegirColor)
    this.colores.naranja.addEventListener('click', this.elegirColor)
    this.colores.verde.addEventListener('click', this.elegirColor)
}

 elegirColor(ev){
     const nombreColor = ev.target.dataset.color
     const numeroColor = ev.target.dataset.numero
     this.iluminarColor(nombreColor)
     if( numeroColor == this.secuencia[this.subnivel]){
          this.subnivel++
        console.log(this.subnivel)
        if(this.subnivel == this.nivel){
          this.nivel++
           if(this.nivel == (ULTIMO_NIVEL + 1)){
               this.ganoElJuego()
            } else{
             this.siguienteNivel()
             
             }
        }
        } else{
               this.perdioElJuego();
             }
  
            
        }
  ganoElJuego(){
      alert("felicitaciones, gano el juego")
      this.Inicializar()
     // .then(() => {this.Inicializar()})
  }

  perdioElJuego(){
    alert("lo lamentamos, perdiste :( ")
    this.Inicializar()
    //.then(() => {this.Inicializar()})
  }
 }
function EmpezarJuego(){
       var juego= new Juego()
 }
