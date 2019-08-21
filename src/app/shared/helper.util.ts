import { OnInit } from '@angular/core';

export class HelperUtil {

    constructor() { }
    
    static storeInLocalStorage(key: string, data: string) {
        localStorage.setItem(key, data);
    }

    static getFromLocalStorage(key: string) {
        return localStorage.getItem(key);
    }
}