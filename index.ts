// 1 array

let number: number[] = [1,2,3, ];

number.push(5);
console.log(number[2]);

let nomes: string[] =  ['fefe', 'rick', 'joao'];
//sinalizando que e uma lista 
//[] indica um array


// 2 outra sintaxe do array
let numbers: Array<number> = [100,300,500];
numbers.push(4);
console.log(numbers);


// 3 any: usado quando nao ha um tipo especifico definido (porem nao e mt recomendado seu uso, so quando tem necessidade MESMO)

const arr1: any = [1, 'fefe', true, 56095];
console.log(arr1);


// 4 parametro em funcoes

function minhafuncao(a: number, b: number) {
    console.log(a + b);
}
minhafuncao(4,9)

// 5 tipo de retorno de funcoes

 function retornoFuncao(name: string): string {
    return 'ola ${name}'
}
console.log(retornoFuncao('fefe'));

// 6 funcoes anonimas

setTimeout(function() {
const sallary: number= 1000;
//console.log(parseFloat(sallary)); //parseFloat serve para converter uma string em um float
console.log(sallary);
})

// 7 tipos de objetos 

function passeCo(coord: {x: number, y: string}) {
    console.log('x coordinates' + coord.x);
    console.log('y coordinates' + coord.y);
}

const objCoord = {x: 32, y: 'parana'}

passeCo(objCoord); //passando tipos de objetos

const pessoaObj: {nome: string, idade: number} = {nome: 'fefe', idade: 26} //pasando objetos em variaveis


// 8 propiedades opcionais

function opcionais(a: number, b: number, c?: number) {
console.log('A' + a)
console.log('B' + b)
console.log('C' + c)
}
opcionais(2,4,4);
opcionais(3,2);
//opcionais(2); apenas um parametro e opcional ocasionando um erro pois esta esperando dois numeros


// 9 validacao de argumentos opcionais de forma correta!
//OS PARAMETROS OPCIONAS PRECISAM SER POR ULTIMO

function opcionaisCorreto(firtName : string, lastName?: string) {
    if(lastName !== undefined) {
     return 'ola, ${firtName} ${lastName}, tudo bem?'

    }    return 'ola, ${firtName}, tudo bem?'
} 

console.log(opcionaisCorreto('fefe', 'alves'));
console.log(opcionaisCorreto('fefe', ));


// 10 union types
function salarioMes( dados: number | string) {
  console.log('Saldo da conta e R$${dados}')  
}

salarioMes(100);
salarioMes('cem reais');

const arra2: Array<number | string | boolean> = [1, 'fefe', true]


// 11 avancando em union types usando typeof

function showUserRole( role: string | boolean) {
    if(typeof role === 'boolean') {
        return 'nao aprovado'
    } return 'A funcao do usuario e ${role}'
}
console.log(showUserRole(false));
console.log(showUserRole('admin'));

// 12 type alias

type ID = string | number; //usado para diminuir a sentenca, visando que algumas podem ser muito mais longas
function showId(id: ID) {
    console.log('O id do usuario e ${id}')
}
showId(1);
showId('dois');

// 13 introducao das interfaces
//nesse tipo vc declara as propriedades dentro do corpo
interface Point{
    x: number,
    y: number,
    z: number,
}

function coordenadas(obj:Point){
console.log('x: ${obj.x}, y: ${obj.y}, z: ${obj.z}')
}

//var
const coordenadasObj: Point = {
   x: 10,
   y: 34,
   z: 23, 
}
coordenadas(coordenadasObj)

// 14 diferenca entre type alias e interfaces

interface Person{
    nome: String
}
interface Person{
    idade: number
}
const  somePerson: Person = {nome: 'matheus', idade: 43}
//no caso da interface eu consegui implementar mais uma propriedade

type Persons = {
    name: string
} // nao consigo fazer dois iguais por nao pode ser feito uma MODIFICACAO, nessa caso o certo e usar o interfaces


// 15 literal types

let test: 'testando' //a variavel nao tem valor definido, porem ela so vai aceitar o tipo de valor ali 'testando'

function showDirection(direction: 'left' | 'rigth' | 'center'){
    console.log('qual direcao e ${direction}')
}
showDirection('center') //aqui os valores ja estao definidos juntamente com o union types, nesse caso a funcao so vai aceitar os tipo de retorno ali implementados


// 16 non-null assertion operator

const p = document.getElementById('some-p')
console.log(p!.innerText)
//quando o elemento do codigo ainda nao esta disponivel mas sabemos que vai ser preenchido evitamos um erro usando ! que caracteriza como null


// 17 bigint

let n: bigint
n = 1000n


// 18 symbol

let symbolA: symbol = Symbol('a')
let symbolB: Symbol = Symbol('a')
console.log(symbolA == symbolB)
console.log(symbolA === symbolB)

//nao e considerado valor igual, conseguimos ter valores unicos com o symbol, por mais que nas duas variaveis os valores sejam os mesmos, o symbol os trata como diferentes


//