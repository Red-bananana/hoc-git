//Sử dụng += để nối chuỗi xuất ra trong lệnh innerHTML
function Checkdangnhap(event, minKt, maxKt)

{

    event.preventDefault();

    var mess = document.getElementById('errorText');

    var username = document.getElementById('tendn').value;



    if (username == '')

    {

        document.getElementById('tendn').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tên đăng nhập ko được để trống ';

    } else if ((username.length > 0 && username.length < minKt) || username.length > maxKt)

    {

        document.getElementById('tendn').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tên đăng nhập từ 3-10 kí tự ';

    } else mess.innerHTML = 'Tên đăng nhập của bạn là :' + username + '';

}






function Checkpass(event)

{

    event.preventDefault();

    var pass = document.getElementById('mk').value;

    var mess = document.getElementById('errorText');

    if (pass == '')

    {

        document.getElementById('mk').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Mật khẩu ko được để trống ';

    } else mess.innerHTML += 'Mật khẩu của bạn là ' + Array(pass.length + 1).join("*") + '';

}

function Checkemail(event)

{

    event.preventDefault();

    var mess = document.getElementById('errorText');

    var letter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

    var email = document.getElementById('email').value;

    if (email == '')

    {

        document.getElementById('email').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Email ko được để trống ';

    } else if (!email.match(letter))

    {

        document.getElementById('email').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Email nhập sai định dạng';

    } else mess.innerHTML += 'Email của bạn là :' + email + '';



}

function Checknghenghiep(event)

{

    event.preventDefault();

    var mess = document.getElementById('errorText');

    var nghe = document.getElementById('nghenghiep');

    //if(nghe.options[0].selected)

    if (nghe.options['id1'].selected)

    {

        mess.innerHTML += 'Nghề nghiệp chưa được lựa chọn';

    } else mess.innerHTML += 'Nghề nghiệp của bạn là: ' + nghe.options[nghe.selectedIndex].innerText + '';

}

function Checktuoi(event)

{

    event.preventDefault();

    var mess = document.getElementById('errorText');

    var tuoi = document.getElementById('tuoi').value;

    parseInt(tuoi);

    if (tuoi == '')

    {

        document.getElementById('tuoi').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tuổi không được để trống';

    } else if (tuoi < 18 || tuoi > 50)

    {

        document.getElementById('tuoi').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Tuổi từ 18-50, vui lòng nhập lại ';

    } else if (isNaN(tuoi))

    {

        document.getElementById('tuoi').style.backgroundColor = 'yellow';

        mess.innerHTML += 'Chỉ cho phép nhập số ';

    } else mess.innerHTML += 'Tuổi của bạn là :' + tuoi;

}

var btndangnhap = document.getElementById('btnDangnhap');

btndangnhap.onclick = function Validate() {

    //Mặc định các lỗi này sẽ ẩn

    var mess = document.getElementById('errorText');

    mess.innerHTML = '';

    //Gọi các hàm đã viết

    Checkdangnhap(event, 3, 10);

    Checkpass(event);

    Checkemail(event);

    Checknghenghiep(event);

    Checktuoi(event);



}