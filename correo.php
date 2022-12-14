<?php
    if(isset($_POST['enviar'])){
        $destino = "grupoterrahidromasajes@gmail.com";
        $nombre = $_POST['nombre'];
        $mail = $_POST['mail'];
        $mensaje = $_POST['mensaje'];
        $contenido = "Nombre:" . $nombre . "\n Correo:" . $mail . "\n" . $mensaje;
        $correo = mail($destino, "Consulta hidromasajes", $contenido);

        if($correo){
            /* echo "Correcto"; */
            header("location:index.php?DATO=CORRECTO");
        }else{
            /* echo "Incorrecto"; */
            header("location:index.php?DATO=INCORRECTO");
        }
        
    }
    
?>