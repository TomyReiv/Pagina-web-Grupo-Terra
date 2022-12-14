<?php
    if(isset($_POST['enviar'])){
        $destino = "grupoterrahidromasajes@gmail.com";
        $nombre = $_POST['nombre'];
        $mail = $_POST['mail'];
        $mensaje = $_POST['mensaje'];
        $contenido = "Nombre:" . $nombre . "\n Correo:" . $mail . "\n" . $mensaje;
        $correo = mail($destino, "Consulta hidromasajes", $contenido);

        if($correo){
            header("location:index.php?DATO=CORRECTO");
        }else{
            header("location:index.php?DATO=INCORRECTO");
        }
        
    }
    
?>