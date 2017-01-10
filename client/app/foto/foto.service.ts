import { Http, Headers, Response } from '@angular/http';
import { FotoComponent } from './foto.component';
import { Injectable } from '@angular/core';

@Injectable()
export class FotoService {

    http: Http;
    headers: Headers;
    url: string = 'v1/fotos';

    constructor(http: Http) {

        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    lista() {

        return this.http.get(this.url)
            .map(res => res.json());
    }

    cadastra(foto: FotoComponent) {

        return this.http.post(this.url, JSON.stringify(foto),
                { headers: this.headers });

    }
}
