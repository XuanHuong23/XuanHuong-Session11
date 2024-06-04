let array = [1, 2, "3", 4, "u", 6, 7, 8, 9]
let a = prompt("Nhap mot phan tu")
let c = false;
for (let i = 0; i < array.length; i++) {
    if (array[i] == a) {
        console.log("vi tri phan tu", i)
        c = true;
    }
    if (c == false) {
        console.log("Phan tu khong ton tai")
    }
}

