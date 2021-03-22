// let ctx =document.getElementById('mycanvas');
// let ctx1=ctx.getContext('2d');
// console.log(typeof ctx1);
// ctx1.beginPath();
// ctx1.rect(50, 50, 100, 50);
// ctx1.fill();

class Rectangel{
    constructor (width,height){
        this.width=width;
        this.height=height;
    }
    getArea(){
        return this.width*this.height;
    }
    getPrimeter(){
        return (this.width+ this.height)*2
    }
    drawRectangle(x,y){
        let ctx2=document.getElementById('mycanvas').getContext('2d');
        let posiX= x;
        let posiY= y;
        ctx2.beginPath();
        ctx2.rect(posiX,posiY, this.width, this.height);

        ctx2.fill();


    }
}
let rec2= new Rectangel(200,100);
rec2.drawRectangle(10, 20);
let rec3=new Rectangel(250,120)
console.log(rec3.getArea());
console.log(rec3.getPrimeter());




