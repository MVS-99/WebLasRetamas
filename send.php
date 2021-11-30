<?php
if (! empty($_POST["pedircit"])) {
    $number = $_POST[".telefonoin"];
    $name = filter_var($_POST[".nombrein"], FILTER_SANITIZE_STRING);
    $email = filter_var($_POST[".correoin"], FILTER_SANITIZE_EMAIL);
    $odont = $_POST["odont_send"];
    $pod = $_POST["pod_send"];
    if($pod){
       $subject = "Consulta: ". $name . " - Podología - " . $number; 
    }
    else{
        $subject = "Consulta: " . $name . " - Odontología - " . $number;
    }
    $message = filter_var($_POST["msg_send"], FILTER_SANITIZE_STRING);
    
    $toEmail = "info@clinicalasretamas.com";

    if(isset($email)){
        $mailHeaders = $name . "<" . $email;
    }
    
    mail($toEmail, $subject, $message, $mailHeaders);
}

?>
