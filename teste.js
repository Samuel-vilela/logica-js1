console.log("teste")

let pessoa = {
    nome: 'samuel vilela',
    idade: 20,
    profissao: 'Mecanico'
};
 
for (const propriedade in pessoa) {
  console.log(`${propriedade}: ${pessoa[propriedade]}`);
}
//resultado => nome: João Silva
//resultado => idade: 23
//resultado => profissao: 'Programador' 

let contador = 0;
while (contador < 100) {

console.log('🤔' + contador);
contador++; 
} 

for (let i = 0; i < 90; i++) {
    console.log('Número ' + i);
    }


