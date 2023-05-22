function trangChu() {
    alert("chào mùng đến với trang chủ");
}

function dichVU() {
    alert("chào mừng dến vơí trang dịch vụ");
}

function DatPhong() {
    alert("Đặt phòng thành công");
}

// index
setInterval(function myMove() {
    let id = null;
    const elem = document.getElementById("banner-tile");
    let pos = 0;
    clearInterval(id);
    id = setInterval(frame, 5);
    function frame() {
        if (pos == 500) {

            clearInterval(id);
        } else {
            pos++;
            elem.style.right = pos + "px";
            elem.style.left = pos + "px";
        }

    }
}, 3000);


// ----------dichVu------------------------
//chuyen doi anh
var index = 0;
setInterval(function changeimage() {
    var bannerr = ["./img/banner-home.jpg", "./img/banner 2.jpg", "./img/baner.jpg"];
    document.getElementById("img").src = bannerr[index];
     index++;
    if (index > 2) {
        index = 0;
    }
}, 1000);



// ----------room-------------------
var room = document.querySelector('.content-tile');
setInterval(() => {
    room.classList.toggle('content');
}, 500)

function datPhong() {
    let hoten = document.getElementById("hoTen");
    let chungMinhThu = document.getElementById("chungMinhThu");
    let email = document.getElementById("email");
    let gioiTinh = document.querySelectorAll ("#gioiTinh");
    let sodienthoai = document.getElementById("soDienThoai");
    let loaiphong = document.getElementById("loaiphong");
    let ngaysinh = document.getElementById("ngaysinh");
    let hanhly = document.getElementById("hanhly");
    let thanhtoan = document.getElementById("thanhToan");
    let thongBao = document.getElementsByClassName("thongBao");
    let checkCMT = /^[0-9]+$/;
    let checkEmail = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i;
    let checksdt = /((09|03|07|08|05)+([0-9]{8})\b)/g;
    let table = document.getElementById("bangkq");

    let loi = false;
    // ho ten
    if (hoten.value == "" || hoten.value == null) {
        hoten.style.border = "1px solid red"
        thongBao[0].innerHTML = "bạn không được bỏ trống";
        loi = true;
    } else {
        thongBao[0].innerHTML = "";
        hoten.style.border = "1px solid black"
    }
    // chung minh thu
    if (chungMinhThu.value == "" || chungMinhThu.value == null) {
        chungMinhThu.style.border = "1px solid red"
        thongBao[1].innerHTML = "bạn chưa nhập vào chứng minh minh thư";
    } else {
        if (!checkCMT.test(chungMinhThu.value)) {
            chungMinhThu.style.border = "1px solid red"
            thongBao[1].innerHTML = "bạn nhập sai chứng minh thư";
        loi = true;

        } else {
            thongBao[1].innerHTML = "";
            chungMinhThu.style.border = "1px solid black"
        }
    }

    // Email
    if (email.value == "" || email.value == null) {
        email.style.border = "1px solid red"
        thongBao[2].innerHTML = "bạn chưa nhập vào email"
    } else {
        if (!checkEmail.test(email.value)) {
            email.style.border = "1px solid red"
            thongBao[2].innerHTML = "bạn nhập sai email"
        loi = true;

        } else {
            thongBao[2].innerHTML = "";
            email.style.border = "1px solid black"
        }
    }


    //gioi tinh
    let gerder = '';
    if (gioiTinh[0].checked || gioiTinh[1].checked) {
        thongBao[3].innerHTML = "";
        if (gioiTinh[0].checked) {
            gerder = gioiTinh[0].value
        }else {
            gerder = gioiTinh[1].value
        }

    }else{
        thongBao[3].innerHTML = "bạn chưa chọn giới tính"
        loi = true;      
    }

    //so dien thoai
    if (sodienthoai.value == "" || sodienthoai.value == null) {
        sodienthoai.style.border = "1px solid red"
        thongBao[4].innerHTML = "bạn nhập số điện thoại"
    } else {
        if (!checksdt.test(sodienthoai.value)) {
            sodienthoai.style.border = "1px solid red"
            thongBao[4].innerHTML = "bạn nhập sai số điện thoại"
        loi = true;

        } else {
            thongBao[4].innerHTML = "";
            sodienthoai.style.border = "1px solid black"
        }
    }
    // loai phong
    if (loaiphong.value == '0') {
        thongBao[5].innerHTML = "bạn chưa chọn loại phòng"
        loaiphong.style.border = "1px solid red"
        loi = true;

    }else {
        thongBao[5].innerHTML = "";
        loaiphong.style.border = "1px solid black"
    }


    //ngay sinh
    if (ngaysinh.value == "" || ngaysinh.value == null) {
        ngaysinh.style.border = "1px solid red"
        thongBao[6].innerHTML = "bạn chưa chọn ngày sinh"
        loi = true;

    } else {
        thongBao[6].innerHTML = "";
        ngaysinh.style.border = "1px solid black"
    }
    //hanh ly
    if (hanhly.value == "" || hanhly.value == null) {
        hanhly.style.border = "1px solid red"
        thongBao[7].innerHTML = "bạn nhập vào hành lý"
        loi = true;

    } else {
        thongBao[7].innerHTML = "";
        hanhly.style.border = "1px solid black"
    }

   // thanh toan
    if(thanhtoan.value == '0'){
        thongBao[8].innerHTML = "bạn chưa chọn hình thức thanh toán"
        loi = true;

        thanhtoan.style.border = "1px solid red"
    }else{
        thongBao[8].innerHTML = "";
        // thanhtoan.style.border = "1px solid black"
    }

    //in ra bang
    let bangkq = loi == true ? "" : `
    <tr>
    <th>Họ tên</th>
    <th>Chứng minh</th>
    <th>Email</th>
    <th>Giới tính </th>
    <th>Số điện thoại</th>
    <th>Chọn phòng</th>
    <th>Ngày sinh</th>
    <th>Hành lí</th>
    <th>Hình thức thanh toán</th>
    </tr>

<tr>
    <td>${hoten.value}</td>
    <td>${chungMinhThu.value}</td>
    <td>${email.value}</td>
    <td>${gerder}</td>
    <td>${sodienthoai.value}</td>
    <td>${loaiphong.value}</td>
    <td>${ngaysinh.value}</td>
    <td>${hanhly.value}</td>
    <td>${thanhtoan.value}</td>
</tr>
    `
    table.innerHTML = bangkq;
}


