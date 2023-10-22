//6 kieu du lieu trong js
//number: 1 2 3 4... la kieu number
//boolean: true false
//string: nhung phan tu trong ngoac
//null: khong co gia tri
//undefined: cac kieu du lieu khong xac dinh(bien khong gia tri)
//array: mang hien thi danh sach dung ngoac[]
//object: doi tuong dung de luu tru du lieu vd:('name:''')

//khai bao bien trong js
let name;
var num=1;
const pi=3.14;

//Gioi thieu cau lenh console.log() dung de in gia tri tai man hinh console
//////////Cau dieu kien trong js
//su dung cau dieu kien if
const diem_so=9;
if(diem_so>6){
    console.log("hoc vien dat diem tot");
}
//su dung cau dieu kien if else
const diem_so=7.5;
if(diem_so>6){
    console.log("hoc vien dat diem trung binh");
}
//su dung cau lenh if else trong do else if la dieu kien con
const diem_so=8;
if(diem_so>9){
    console.log("hoc vien dat diem tot");
}
else if(diem_so>7){
    console.log("hoc vien dat diem kha");
}
else{
    console.log("hoc vien dat diem trung binh");
}
//su dung cau dieu kien if else long nhau
const diem_so=10;
if(diem_so>9){
    console.log("hoc vien dat diem tot");
    if(diem_so==10){
        console.log("hoc vien dat diem kha");
    }
    else if(diem_so>7){
        console.log("Hoc vien dat diem kha");
    }
}