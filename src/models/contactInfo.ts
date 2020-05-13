export class ContactInfo {

    ID; 
    HoTen; 
    BietDanh; 
    NgaySinh; 
    SoDienThoai; 
    Email; 
    DiaChi;
    constructor(id, hoTen, bietDanh, ngaySinh, soDienThoai, email, diaChi){
        this.ID = id;
        this.HoTen = hoTen;
        this.BietDanh=bietDanh;
        this.NgaySinh=ngaySinh;
        this.SoDienThoai=soDienThoai;
        this.Email=email;
        this.DiaChi=diaChi;
    }
}