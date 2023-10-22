//Bai 3
const a=1;
const b=2;
const c=3;
const delta=b*b-4*a*c;
if(a==b&&b==0){
    console.log('phuong trinh vo nghiem');
}
else if(delta<0){
    console.log('phuong trinh vo nghiem');
}
else if(a==0){
    console.log(-c/b);
}
else{
    document.writeln('x1= ', (b-Math.sqrt(delta))/2*a);
    document.writeln('x2= ', (-b-Math.sqrt(delta))/2*a);
}