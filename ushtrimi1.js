function zeroje(lista){
    let shuma = 0;

    for (let index = 0; index < lista.length; index++) {
        lista[index] = lista[index] * 2;

        if(lista[index - 1] === lista[index + 1]){
            lista[index + 1] = 0;
        }

        shuma += lista[index];
    }

    console.log(shuma)

    return lista;
}

const lista = [0, 3, 3, 3, 4, 0];

console.log(zeroje(lista));