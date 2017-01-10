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

        if(foto._id) {
            return this.http.put(this.url + '/' + foto._id, JSON.stringify(foto),
            { headers: this.headers })
            .map(() => new MensagemCadastro('Foto alterada com sucesso', false));

        } else {
            return this.http.post(this.url, JSON.stringify(foto),
                { headers: this.headers })
                .map(() => new MensagemCadastro('Foto incluída com sucesso', true));
        }
    }

    remove(foto: FotoComponent) {

        return this.http.delete(this.url + '/' + foto._id);
    }

    buscaPorId(id: string) {

        return this.http
            .get(this.url + '/' + id)
            .map(res => res.json());
    }
}

export class MensagemCadastro {

    private mensagem: string;
    private inclusao: boolean;

    constructor(mensagem: string, inclusao: boolean) {
        this.mensagem = mensagem;
        this.inclusao = inclusao;
    }

    public obterMensagem(): string {
        return this.mensagem;
    }

    public ehInclusao(): boolean {
        return this.inclusao;
    }
}
