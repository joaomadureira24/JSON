let pessoa = {
    nome: "Henrique",
    idade: 22,
    cidade: "citaflópis"
}

let obj_string = JSON.stringify(pessoa);

let string_obj = JSON.parse(obj_string);

console.log(obj_string);
console.log(string_obj);