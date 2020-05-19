import { Http, Headers } from '@angular/http';
import { Injectable } from '@angular/core';
import { stringify } from '@angular/core/src/util';

const API_URL = "http://danhbadienthoai.somee.com/api";
const CONTACT_URL = API_URL + '/DanhBa';
const TAIKHOAN_URL = API_URL + '/TaiKhoan';

const headers = new Headers({
    'Content-Type': '*/*'
});

@Injectable()
export class RestProvider {

    constructor(public http: Http) {
        console.log('RestProvider is runing');
        headers.append(
            'authorization', 'Basic dnVwdGE6dnVwdGE='
        )
    }

    getContact() {
        return new Promise(resolve => {
            this.http.get(CONTACT_URL, { headers: headers })
                .subscribe(data => {
                    resolve(data.json());
                }, err => { console.log(err) });
        });
    }

    getContactByID(id) {
        return new Promise(resolve => {
            this.http.get(CONTACT_URL + `/${id}`, { headers: headers })
                .subscribe(data => {
                    resolve(data.json());
                }, err => { console.log(err) });
        });
    }

    checkLogin(username, password){
        return new Promise(resolve=>{
            let params = new URLSearchParams();
            params.append('username', username);
            params.append('password', password);
            let options = {headers: headers, search : params};
            this.http.get(TAIKHOAN_URL, options)
            .subscribe(data=>{
                resolve(data);
            }, err => console.log(err));
        });
    }

    addContact(contact){
        return new Promise(resolve=>{
            //let contactEx = {"ID":11,"HoTen":"vu","BietDanh":"","NgaySinh":"","SoDienThoai":"","Email":"","DiaChi":""};
            console.log(JSON.stringify(contact));
            this.http.post(CONTACT_URL, JSON.stringify(contact), {headers:headers})
            .subscribe(data=>{
                resolve(data);
            }, err => console.log(err))
        })
    }

    editContact(contact){
        return new Promise(resolve=>{
            console.log(JSON.stringify(contact));
            let editContactHeaders = new Headers({'Content-Type': '*/*'});
            editContactHeaders.append('authorization', 'Basic dnVwdGE6dnVwdGE=');
            this.http.put(CONTACT_URL, JSON.stringify(contact), {headers:editContactHeaders})
            .subscribe(data=>{
                resolve(data);
            }, err => console.log(err))
        })
    }

    deleteContact(id){
        return new Promise(resolve=>{
            let deleteContactURL = CONTACT_URL + `/${id}`;
            this.http.delete(deleteContactURL, {headers:headers})
            .subscribe(data=>{
                resolve(data);
            }, err => console.log(err))
        })
    }

}

