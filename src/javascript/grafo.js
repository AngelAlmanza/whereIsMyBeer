class Grafo {
    constructor () {
        this.data = [];
        this.rellenar();
        this.alterarGrafo();
        this.caminoCorto = this.dijkstra(this.data, 0);
    }

    generarPeso() {
        return Math.round(1 + Math.random() * 30);
    }

    rellenar() {
        this.data[0] = [0, this.generarPeso(), Infinity, Infinity, Infinity, Infinity];
        this.data[1] = [this.data[0][1], Infinity, this.generarPeso(), Infinity, this.generarPeso(), Infinity];
        this.data[2] = [Infinity, this.data[1][2], Infinity, this.generarPeso(), Infinity, this.generarPeso()];
        this.data[3] = [Infinity, Infinity, this.data[2][3], Infinity, this.generarPeso(), this.generarPeso()];
        this.data[4] = [Infinity, this.data[1][4], Infinity, this.data[3][4], Infinity, Infinity];
        this.data[5] = [Infinity, Infinity, this.data[2][5], this.data[3][5], Infinity, Infinity];
    }

    alterarGrafo() {
        const peso1 = document.getElementById('1');
        const peso2 = document.getElementById('2');
        const peso3 = document.getElementById('3');
        const peso4 = document.getElementById('4');
        const peso5 = document.getElementById('5');
        const peso6 = document.getElementById('6');
        const peso7 = document.getElementById('7');
        peso1.innerText = this.data[0][1];
        peso2.innerText = this.data[1][2];
        peso3.innerText = this.data[1][4];
        peso4.innerText = this.data[4][3];
        peso5.innerText = this.data[2][3];
        peso6.innerText = this.data[2][5];
        peso7.innerText = this.data[3][5];
    }

    dijkstra(path,index){
        var m = path && path.length;
        var n = m && path[0].length;

        if(m && n && m===n && index < n){
            // Inicializar distancia
            var dis = [];
            var i;
            for(i = 0; i< n;i++){
                dis.push(path[index][i]);
            }
            var flag = [];// Se usa para identificar si se determina la distancia del número de índice a otros vértices
            for(i = 0; i < n; i++ ){
                flag.push(false)
            }
            flag[index] = true;

            var min,minIndex;
            for(i = 0;i < n;i++){
                min = Infinity;
                // Encuentre el índice correspondiente a la distancia más corta desde los puntos inciertos restantes al índice
                for(var j = 0; j < n; j++){
                    if(!flag[j] && dis[j] < min){
                        min = dis[j];
                        minIndex = j;
                    }
                }
                flag[minIndex] = true;// Identifica que la distancia desde el índice hasta este vértice ha sido confirmada
                for(var k = 0; k < n; k++){
                    // Juzgar si hay un camino entre minIndex y k
                    if(path[minIndex][k] < Infinity){
                        // Actualizar distancia
                        if(dis[k] > dis[minIndex] + path[minIndex][k]){
                            dis[k] = dis[minIndex] + path[minIndex][k];
                        }
                    }
                }
            }
            return dis;
        }
        else{
            throw new Error("Los datos son incorrectos")
        }
    }

    comprobarRespuesta(respuesta, posicion) {
        return respuesta == this.caminoCorto[posicion];
    }
}

const graph = new Grafo();

const inputRespuesta = document.getElementById('respuesta');
const button = document.getElementById('comprobar');
button.addEventListener('click', () => {
    if (graph.comprobarRespuesta(inputRespuesta.value, 5)) {
        alert('Conseguido');
        const contenedor = document.getElementById('body');
        contenedor.style = 'opacity: 0.1';
    } else {
        alert('Perdiste');
    }
});

console.log(graph);