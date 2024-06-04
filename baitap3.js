let array = [1, 1, 2, 3, 4, 4, 5, 5, 5, 6, 7, 8, 8]
let a = Number(prompt("Nhap mot so"))
let count
for (let i = 0; i < array.length; i++) {
    if (a == i) {
        count++

    }
    console.log("so phan tu trung nhau", count)
}