// CLASE 18. PLAYGROUND 4: DETECTA EL ELEMENTO IMPOSTOR DE UN ARRAY

//En este desafío vas a recibir un parámetro arraySecreto en la función solution. Debes retornar true si el primer elemento del arraySecreto es de tipo string y debes retornar false si es de cualquier otro tipo.

function solution(arraySecreto) {
    return (typeof arraySecreto[0] === "string" ? true :false); 
}

solution(["Huevo", "Gallina", "Vaca"])
solution([1, "Gallina", "Vaca"])