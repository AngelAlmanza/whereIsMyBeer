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
        this.rellenar();
        this.alterarGrafo();
    }

    generarPeso() {
        return Math.round(1 + Math.random() * 30);
    }

    rellenar() {
        this.data.A = [0, this.generarPeso(), 0, 0, 0, 0, [false, true, false, false, false, false]];
        this.data.B = [this.data.A[1], 0, this.generarPeso(), 0, this.generarPeso(), 0, [true, false, true, false, true, false]];
        this.data.C = [0, this.data.B[2], 0, this.generarPeso(), 0, this.generarPeso(), [false, true, false, true, false, true]];
        this.data.D = [0, 0, this.data.C[3], 0, this.generarPeso(), this.generarPeso(), [false, false, true, false, true, true]];
        this.data.E = [0, this.data.B[4], 0, this.data.D[4], 0, 0, [false, true, false, true, false, false]];
        this.data.F = [0, 0, this.data.C[5], this.data.D[5], 0, 0, [false, false, true, true, false, false]];
    }

    alterarGrafo() {
        const peso1 = document.getElementById('1');
        const peso2 = document.getElementById('2');
        const peso3 = document.getElementById('3');
        const peso4 = document.getElementById('4');
        const peso5 = document.getElementById('5');
        const peso6 = document.getElementById('6');
        const peso7 = document.getElementById('7');
        peso1.innerText = this.data.A[1];
        peso2.innerText = this.data.B[2];
        peso3.innerText = this.data.B[4];
        peso4.innerText = this.data.E[3];
        peso5.innerText = this.data.C[3];
        peso6.innerText = this.data.C[5];
        peso7.innerText = this.data.D[5];
    }

    dijkstra() {

    }
}

const graph = new Grafo();
console.log(graph);