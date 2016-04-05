<?php
    
    if( isset( $_POST[ 'submit' ] ) ) {
        $name = $_POST[ 'name' ];
        $email = $_POST[ 'email' ];
        $message = $_POST[ 'message' ];
        
        // Check if name has been entered
        $errName = 'false';
        if( !$name )
            $errName = 'true';
        // Check if email has been entered and is valid
        $errEmail = 'false';
        if( !$email || !filter_var( $email, FILTER_VALIDATE_EMAIL ) )
            $errEmail = 'true';
        //Check if message has been entered
        $errMessage = 'false';
        if( !$message )
            $errMessage = 'true';
        
        //Check if simple anti-bot test is correct
        /*$human = intval( $_POST[ 'human' ] );
        if( $human !== 5 ) {
            $errHuman = 'Your anti-spam is incorrect';
        }*/
        
        // If there are no errors, send the email
        if( $errName == 'false' && $errEmail == 'false' && $errMessage == 'false' /*&& !$errHuman*/ ) {
            $host = 'mail3.meuhost.net';
            $port = 587;
            $auth = true;
            $secure = 'tls';

            $to = 'info@neutripuro.com';
            $to_name = 'Info';
            $password = '*****';

            $charSet = 'UTF-8';
            $html = true;

            $subject = 'Contato Site Neutripuro';
            $body = "<html><body><p>De: $name</p><br/><br/><p>Contato: $email<p><br/><br/><p>Mensagem:</p><br/><textarea style=\"resize: none; width: 300px; height: 150px;\" disabled>$message</textarea></body></html>";

            require_once( 'phpmailer/PHPMailerAutoload.php' );
            $mail = new PHPMailer;
            $mail->IsSMTP();
            $mail->Host       = $host;
            $mail->Port       = $port;
            $mail->SMTPAuth   = $auth;
            $mail->SMTPSecure = $secure;
            $mail->Username   = $to;
            $mail->Password   = $password;        // SMTP account password
            
            $mail->SetFrom( $email, $name );
            $mail->AddAddress( $to, $to_name );
            $mail->AddReplyTo( $email, $name );
            $mail->CharSet = $charSet;
            $mail->IsHTML( $html );
            
            $mail->Subject = $subject;
            $mail->Body = $body;
            
            try {
                if( $mail->send() )
                    echo "sucess";
                else
                    echo "fail \r\n TO: $to \r\n SUBJECT: $subject \r\n BODY: $body \r\n ERROR: " . $mail->ErrorInfo;
            }
            catch ( phpmailerException  $e ) {
                echo "fail \r\n PHP MAILER: "/* . $e->errorMessage()*/;
            }
            catch ( Exception $e ) {
                echo "fail \r\n EXCEPTION: "/* . $e->getMessage()*/;
            }
        }
        else
            echo "fail";
    }
    else
        echo "fail";
?>