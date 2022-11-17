

$(document).ready(function () {




    let pet = $('#form').attr('action');
    let met = $('#form').attr('method');

    $('#form').on('submit', function (e) {
        e.preventDefault();

        $.ajax({
            url: pet,
            type: met,
            data: $('#form').serialize(),
            success: function (resp) {
                console.log(resp)
                if (resp == "Correcto") {
                    swal({
                        title: "Correo enviado correctamente",
                        icon: "success",
                        button: "Aceptar",
                      })
                }else{
                    swal({
                        title: "Error",
                        text: "Error en el sistema, intente nuevamente",
                        icon: "warning",
                        button: "Aceptar",
                      })
                }
            },
            error: function (jqXHR, estado, error) {
                console.log(estado)
                console.log(error)
            },
            complete: function (jqXHR, estado) {
                console.log(estado)
            },
            timeout: 10000
        })
    })
})