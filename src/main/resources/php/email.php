<?php
    if( isset( $_POST[ "submit" ] ) ) {
        $name = $_POST[ 'name' ];
        // Check if name has been entered
        if( !$_POST['name'] ) {
            $errName = 'Por favor, insira o seu nome';
        }

        $email = $_POST[ 'email' ];
        // Check if email has been entered and is valid
        if( !$_POST[ 'email' ] || !filter_var( $_POST[ 'email' ], FILTER_VALIDATE_EMAIL ) ) {
            $errEmail = 'Por favor, insira um e-mail válido';
        }

        $message = $_POST[ 'message' ];
        //Check if message has been entered
        if( !$_POST[ 'message' ] ) {
            $errMessage = 'Por favor, insira a sua mensagem';
        }

        //$human = intval( $_POST[ 'human' ] );
        //Check if simple anti-bot test is correct
        /*if ($human !== 5) {
            $errHuman = 'Your anti-spam is incorrect';
        }*/

        $from = $email; 
        $to = 'jmfgameiro@gmail.com'; 
        $subject = 'Contato do Site da Neutripuro';
        $body = "De: $name\n Contato: $email\n Mensagem:\n $message";
        
        // If there are no errors, send the email
        if( !$errName && !$errEmail && !$errMessage && !$errHuman ) {
            if( mail( $to, $subject, $body, $from ) ) {
                $result='<div class="alert alert-success">Agradeçemos o seu contato. Responderemos com a maior brevidade possível.</div>';
            } else {
                $result='<div class="alert alert-danger">Pedimos desculpa mas ocorreu um erro ao tentar enviar a sua mensagem. Queira fazer o favor de tentar novamente mais tarde.</div>';
            }
        }
        
    }
?>