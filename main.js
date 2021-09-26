//Object.entries

const obj = {
    a: "Tania",
    b: 33
};

for(const [key, value] of Object.entries(obj)) {
    console.log(`${key}: ${value}`)
}