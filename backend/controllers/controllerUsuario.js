function guardarUsuario(usuario) {
    try {
       const sheetUsuarios = obtenerSheet(env_().SH_REGISTRO_USUARIOS);
       // sheetUsuarios.appendRow([id, nombreCompleto, correo, password]);
        Insert(JSON.parse(usuario), sheetUsuarios);
        return {
            titulo: "Registro Exitoso ",
            descripcion: "Usuarios Ya Almacenado en Base de Datos",
        }
    } catch (error) {
        return {
            titulo: "Ha Ocurrido un Error! " + error,
            descripcion: "Error almacenado para su evaluacion"
        }
    }
    
}

function email(usuario) {
    const { correo } = usuario
    var repo = HtmlService.createTemplateFromFile('frontend/views/report.html')
    repo.usuario = usuario
    var message = repo.evaluate().getContent()

    GmailApp.sendEmail(
        'jsanchez@sinoenergycorp.com',
        "EME1: ",
        'message',
        {htmlBody: message}
    );
     //GmailApp.sendEmail(correo, "EME1: ", message);
    //return 
}

function listarUsuarios(id = undefined) {
    // return obtenerDatos(env_().SH_REGISTRO_USUARIOS);
    return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRO_USUARIOS), id));
  }

  function cantRows() {
    return obtenerRows(env_().SH_REGISTRO_USUARIOS);
    //return JSON.stringify(_read(obtenerSheet(env_().SH_REGISTRO_USUARIOS), id));
  }