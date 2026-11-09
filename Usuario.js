console.log("Criando Classes");
// criar objeto fixo (Enum) para os turnos

const Turno = Object.freeze({
    MANHA: "Manhã",
    TARDE: "Tarde",
    NOITE: "Noite"
});

class Aluno {
    id;
    nome;
    dataMatricula;
    turno;
    estaAtivo;

    // método construtor
    constructor(id, nome, dataMatricula, turno) {
        this.id = id;
        this.nome = nome;
        this.dataMatricula = new Date(dataMatricula);
        this.turno = turno;
        this.estaAtivo = true;
    }

    // métodos de classe --> função
    perfil() {
        return "Nome: " + this.nome +
            " - Data de Matrícula: " + this.dataMatricula.toString() +
            " - Turno: " + this.turno +
            " - Ativo: " + this.estaAtivo;
    }
}

// instanciando - construindo objetos
const aluno1 = new Aluno(1, "João", "2026-02-10", Turno.MANHA);
const aluno2 = new Aluno(2, "Pedro", "2026-02-15", Turno.TARDE);

console.log(aluno1);
console.log(aluno2);

// modificando valores
aluno1.turno = Turno.NOITE;
aluno2.estaAtivo = false;

// mostrando os objetos atualizados
console.log(aluno1);
console.log(aluno2);

console.log(aluno1.perfil());
console.log(aluno2.perfil());