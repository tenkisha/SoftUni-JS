function rePaint(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let razreditel = Number(input[2]);
    let hours = Number(input[3]);

    let sumNylon = (nylon + 2) * 1.50;
    let sumPaint = (paint + (paint*0.1)) * 14.50;
    let sumRazreditel = razreditel * 5;

    let materials = sumNylon + sumPaint + sumRazreditel + 0.40;
    let peoples = (materials * 0.30) * hours;
    let allsum = materials + peoples;  

    console.log (allsum)


}

rePaint(['4','10','15','2'])