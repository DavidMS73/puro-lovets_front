import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from './usuario';
import { UsuarioDetail } from './usuario-detail';

const API_URL = environment.apiURL;
const usuarios = '/usuarios';

@Injectable()
export class AuthService {

  loggedUser: Usuario = null;

    constructor(private http: HttpClient) { }

    createUsuario(usuario): Observable<Usuario> {
        return this.http.post<UsuarioDetail>(API_URL + usuarios, usuario);
    }

    getUsuarioDetail(usuarioId): Observable<UsuarioDetail> {
        return this.http.get<UsuarioDetail>(API_URL + usuarios + '/' + usuarioId);
    }

    getUsuarioDetailByUser(username): Observable<UsuarioDetail> {
      return this.http.get<UsuarioDetail>(API_URL + usuarios + '/username/' + username);
    }

    deleteUsuario(usuarioId): Observable<Usuario> {
        return this.http.delete<Usuario>(API_URL + usuarios + '/' + usuarioId);
    }

    getLoggedUser(): Usuario{
      return this.loggedUser;
    }

    setLoggedUser(usuario) {
      this.loggedUser = usuario;
    }
}
