function generator(matLen, gr, grEat, predator, mushroom, drug, helper) {
    let matrix = [];
    for (let y = 0; y < matLen; y++) {
        matrix[y] = [];
        for (let x = 0; x < matLen; x++) {
            matrix[y][x] = 0;
        }
    }

    for (let i = 0; i < gr; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 1;
        }
    }

    for (let i = 0; i < grEat; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 2;
        }
    }

    for (let i = 0; i < predator; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 3;
        }
    }
    for (let i = 0; i < mushroom; i++) {
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0) {
            matrix[x][y] = 4;
        }
    }
    for(let i = 0 ; i < drug; i++){
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0){
            matrix[x][y] = 5 
        }
    }
    for(let i = 0; i < helper; i++){
        let x = Math.floor(Math.random() * matLen);
        let y = Math.floor(Math.random() * matLen);
        if (matrix[x][y] == 0){
            matrix[x][y] = 6
        }
    }
    return matrix;
}

let side = 20;

let matrix = generator(25, 30, 15, 14, 2, 10, 7);
console.log(matrix);

let grassArr = [];
let grassEaterArr = [];
let predatorArr = [];
let mushroomArr = [];
let drugArr = []
let helperArr = []

function setup() {
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac");
    frameRate(3);
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let gr = new Grass(x, y);
                grassArr.push(gr);
            } else if (matrix[y][x] == 2) {
                let grE = new GrassEater(x, y);
                grassEaterArr.push(grE);
            } else if (matrix[y][x] == 3) {
                let pre = new Predator(x, y);
                predatorArr.push(pre);
            } else if (matrix[y][x] == 4) {
                let mush = new Mushroom(x, y);
                mushroomArr.push(mush);
            } else if (matrix [y][x] == 5){
                let drug = new Drug(x,y)
                drugArr.push(drug)
            } else if (matrix [y][x] == 6){
                let helper = new Helper(x,y)
                helperArr.push(helper)
            }
        }
    }
    
}

function draw() {
    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
            } else if (matrix[y][x] == 0) {
                fill("#acacac");
            } else if (matrix[y][x] == 2) {
                fill("yellow");
            } else if (matrix[y][x] == 3) {
                fill("red");
            } else if (matrix[y][x] == 4) {
                fill("blue");
            } else if (matrix[y][x] == 5){
                fill("black")
            } else if (matrix[y][x] == 6){
                fill("orange")
            }
            rect(x * side, y * side, side, side);
        }
    }

    for (let i in grassArr) {
        grassArr[i].mul();
    }
    for (let i in grassEaterArr) {
        grassEaterArr[i].mul();
        grassEaterArr[i].eat();
    }
    for (let i in predatorArr) {
        predatorArr[i].mul();
        predatorArr[i].eat();
    }
    for (let i in mushroomArr) {
        mushroomArr[i].mul();
    }
    for( let i in drugArr){
        drugArr[i].mul()
    }
    for (let i in helperArr){
        helperArr[i].mul()
    }
}    
 