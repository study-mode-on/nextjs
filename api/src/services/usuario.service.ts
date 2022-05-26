export class UsuarioService {
  private usuarios = [];

  public setUser(usuario) {
    this.usuarios.push(usuario);
    return this.usuarios;
  }
}
