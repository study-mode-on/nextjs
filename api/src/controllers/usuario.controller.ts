import { Body, Controller, Post } from '@nestjs/common';
import { UsuarioService } from 'src/services/usuario.service';

@Controller()
export class UsuarioController {
  private usuarioService = new UsuarioService();

  @Post()
  public setUser(@Body() usuario) {
    const usuarioCriado = this.usuarioService.setUser(usuario);
    return usuarioCriado;
  }
}
