function elementiMeIShpeshte(lista) {
    if(lista.length == 0) {
        return null;
	}

    const elementMap = {};
    let maxEl = lista[0]; 
	let maxCount = 1;

    for (let i = 0; i < lista.length; i++) {
        const el = lista[i];
        if (elementMap[el] == null){
			elementMap[el] = 1;
		} else {
			elementMap[el]++;
		}

        if (elementMap[el] > maxCount) {
            maxEl = el;
            maxCount = elementMap[el];
        }
    }

    return maxEl;
};

const lista = [1,1,1,1,1,1,1,1,1,1,1,1,1,1,43,5,6,6,6,6,6,6,4,4,4,4];

console.log(elementiMeIShpeshte(lista))

