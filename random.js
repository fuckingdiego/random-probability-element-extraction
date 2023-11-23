function rastgeleEleman(arr, olasilik) {
    const rastgeleSayi = Math.random();

    if(rastgeleSayi < olasilik) {
        const randomIndex = Math.floor(Math.random() * arr.length)
        return arr[randomIndex]
    } else {
        return null
    }
}


let array1 = ["elma", "armut"]
let array2 = ["muz", "nar"]
let array3 = ["ananas", "limon"]

let secilenEleman = rastgeleEleman(array1, 0.90) || rastgeleEleman(array2, 0.7) || rastgeleEleman(array3, 0.3)
//ARRAY 1 = %90, ARRAY 2 = %7, ARRAY 3 = %3
console.log(secilenEleman)

