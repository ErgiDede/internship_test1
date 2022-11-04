function gjejIndex(lista, vlera) {
    let start = 0;
    let end = lista.length - 1;
  
    while (start <= end) {
      let mid = Math.floor((start + end) / 2);
  
      if (lista[mid] === vlera) {
        return mid;
      }
  
      if (vlera < lista[mid]) {
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }
    return -1;
};

const lista = ["a", "b", "c", "d", "f"];

console.log(gjejIndex(lista, "a"))