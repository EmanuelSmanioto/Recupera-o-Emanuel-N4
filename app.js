// 1 - Produto
import { Produto } from './models/produto.js';

const p = new Produto(5, "Guitarra");
const p2 = new Produto(6, "Cordas 09");

console.log(p.nome);
console.log(p2);
console.log(p.info());

p.ativo = false;
console.log(p.info());


// 2 - Usuário
import { Genero, Usuario } from './models/Usuario.js';

const u1 = new Usuario(1, "Cezar", "123", "2000-01-25T00:00:00", Genero.M);

console.log();
console.log(u1.perfil());
console.log(u1);


// 3 - Carro
import { Carro } from './models/carro.js';

const c1 = new Carro(1, "Toyota", "Corolla", 2024);
const c2 = new Carro(2, "Volkswagen", "Golf", 2020);

console.log(c1.info());
console.log(c2.info());

c1.ativo = false;
console.log(c1.info());


// 4 - Aluno
import { Aluno } from './models/aluno.js';

const a1 = new Aluno(1, "Emanuel", 16, "Desenvolvimento de Sistemas");
const a2 = new Aluno(2, "Felipe", 16, "Desenvolvimento de Sistemas");

console.log(a1.perfil());
console.log(a2.perfil());

a1.ativo = false;
console.log(a1.perfil());