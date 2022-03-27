class Grafo {
    constructor () {
        this.data = {
            //  A B C D E F
            A: [],
            B: [],
            C: [],
            D: [],
            E: [],
            F: [],
        };
    }

    generarPeso() {
        return Math.round(Math.random() * 30);
    }

    rellenar(){
        this.data.A = [0, this.generarPeso(), 0, 0, 0, 0];
        this.data.B = [this.data.A[1], 0, this.generarPeso(), 0, this.generarPeso(), 0];
        this.data.C = [0, this.data.B[2], 0, this.generarPeso(), 0, this.generarPeso()];
        this.data.D = [0, 0, this.data.C[3], 0, this.generarPeso(), this.generarPeso()];
        this.data.E = [0, this.data.B[4], 0, this.data.D[4], 0, 0];
        this.data.F = [0, 0, this.data.C[5], this.data.D[5], 0, 0];
    }
}

const graph = new Grafo();
graph.rellenar();
console.log(graph);