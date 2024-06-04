let a = ["e", "f", "r", "t", 2, 3]
let c = false;
for (let i = 0; i < a.length; i++) {
    if (typeof a[i] == "number") {
        console.log("array", a[i])
        c = true
    }
}
if (c == false) {
    console.log("Khong co so nguyen")
}
