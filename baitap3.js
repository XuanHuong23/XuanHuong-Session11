let array = [1, 1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8]
let a = Number(prompt("Nhap mot so"))
let count = 0
for (let i = 0; i < array.length; i++) {
    if (a == array[i]) {

        count++
    }

}
console.log("so phan tu trung nhau", count)