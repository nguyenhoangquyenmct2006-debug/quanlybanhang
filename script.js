var danhSach = [];

function themKhachHang() {

    var maKH = document.getElementById("maKH").value;
    var hoTen = document.getElementById("hoTen").value;
    var soDienThoai = document.getElementById("soDienThoai").value;
    var email = document.getElementById("email").value;

    if (
        maKH == "" ||
        hoTen == "" ||
        soDienThoai == "" ||
        email == ""
    ) {
        alert("Vui lòng nhập đầy đủ thông tin!");
        return;
    }

    var khachHang = {
        maKH: maKH,
        hoTen: hoTen,
        soDienThoai: soDienThoai,
        email: email
    };

    danhSach.push(khachHang);

    hienThiDanhSach();

    document.getElementById("maKH").value = "";
    document.getElementById("hoTen").value = "";
    document.getElementById("soDienThoai").value = "";
    document.getElementById("email").value = "";

    alert("Thêm khách hàng thành công!");
}


function hienThiDanhSach() {

    var bang = document.getElementById("danhSachKhachHang");

    bang.innerHTML = "";

    for (var i = 0; i < danhSach.length; i++) {

        var khachHang = danhSach[i];

        bang.innerHTML +=
            "<tr>" +
            "<td>" + khachHang.maKH + "</td>" +
            "<td>" + khachHang.hoTen + "</td>" +
            "<td>" + khachHang.soDienThoai + "</td>" +
            "<td>" + khachHang.email + "</td>" +
            "<td>" +

            "<button class='edit-btn' onclick='suaKhachHang(" + i + ")'>" +
            "Sửa" +
            "</button>" +

            "<button class='delete-btn' onclick='xoaKhachHang(" + i + ")'>" +
            "Xóa" +
            "</button>" +

            "</td>" +
            "</tr>";
    }
}


function xoaKhachHang(viTri) {

    var xacNhan = confirm(
        "Bạn có chắc muốn xóa khách hàng này không?"
    );

    if (xacNhan == true) {

        danhSach.splice(viTri, 1);

        hienThiDanhSach();
    }
}


function suaKhachHang(viTri) {

    var khachHang = danhSach[viTri];

    document.getElementById("maKH").value = khachHang.maKH;

    document.getElementById("hoTen").value = khachHang.hoTen;

    document.getElementById("soDienThoai").value =
        khachHang.soDienThoai;

    document.getElementById("email").value =
        khachHang.email;

    danhSach.splice(viTri, 1);

    hienThiDanhSach();
}
