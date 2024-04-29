<?php

sendMail();

function sendMail(){
	//Check if key exist
	if (!array_key_exists("name",$_POST) || !array_key_exists("email",$_POST) || !array_key_exists("msg",$_POST)) {
      	echo json_encode([
		"statut"=>"erreur",
		"er"=>$_POST,
		"msg"=>"les attribut de donnees ++name++ n'ont âs ete trouve"
	   ]);
	 return 0;
    }

$name = htmlspecialchars($_POST["name"]);
	$email = htmlspecialchars($_POST["email"]);
	$msg = htmlspecialchars($_POST["msg"]);

	//Check if there are no empty input

	if ($name === "" || $email === ""||$msg === "") {
			echo json_encode([
			"statut"=>"erreur",
			"msg"=>"Tout les champs doivent etrines rempli"]);

			return 0;
	}
	//check if email is valid form
	if (!preg_match("#^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$#",$email)) {
			echo json_encode([
			"statut"=>"erreur",
			"msg"=>"Veuillez saisir une addresse mail valide"]);

			return 0;
	}
  


		
		$subject = 'Message Provenant su site awo-carlos.dev';
		$message = "  <h1 style='color:red;'>Message envoyé depuis : <a href='https://www.awo-carlos.dev'> awo-carlos.dev</a></h1>
		  <p>
		    <b>Email :</b>".$email."<br>
		    <b>Name :</b>".$name."<br>
		    <b>Message :</b> <br>
		    <span>".htmlentities($msg)."</span>
		  </p>
		";
		$confirm = "<div>

    <h1 style='color:green;'>Message de Confirmation </h1>
    <p>
      Bonjour Monsieur/Madame <strong>".$name."</strong>
      <br> je suis <em>AWO CARLOS</em> developpeur web fullstack; votre message m'a été bien envoyé,je vous remercie de m'avoir contacté et vous repondrai dans les plus brefs delai.
    </p>
    <p>
      Ce message Vous est envoyé parce que vous avez rempli le formulaire de contact en inserant votre mail sur l site <a href='https://www.awo-carlos.dev'>awo-carlos.dev</a>, si ce n'est pas vous,  veuillez simplement ignorer ce message
    </p>
    <div class='footer--informationsSuplementaires'>
              <h4>Me Retrouver Sur</h4>

              <div class='socialLinks socialLinks--footer '>
              
                <a class='socialLink' target='_blank' href='https://t.me/awo_carlos'>
                    Telegram
                </a>

                <br>
                
                <br>
                <a class='socialLink' target='_blank' href='https://www.instagram.com/p/CLhvQbPglXs/?utm_medium=copy_link'>
                    instagram
                </a>
                <br>
                <a class='socialLink' target='_blank' href='https://www.facebook.com/awo.carlos.1'>
                  Facebook
                </a>
                <br>
                <a class='socialLink' target='_blank' 
                  href='https://wa.me/22794647813?text=Bonjour%20Monsieur%20*AWO%20CARLOS*,%20Je%20Suis%20int%C3%A9ress%C3%A9%20par%20vos%20services%20de%20_d%C3%A9veloppeur%20Web_'>
                    WhatsApp
                </a>

              </div>
                      
              <div>awocarlos55@gmail.com</div>
              <div>contact@awo-carlos.dev</div>          

            <a href='https://awo-carlos.dev/' >site web</a>

            
    </div> 
</div>";

		$headers1 = array(
		    'MIME-Version' => "1.0",
		    'Content-type' => "text/html;charset=utf-8",
		    'From' => "awo-carlos.dev",
		    'Reply-To' => "".$email,
		    'X-Mailer' => 'PHP/' . phpversion()
		);


		$s1 = mail('awocarlos55@gmail.com', $subject, $message, $headers1);
		$s2 = mail('contact@awo-carlos.dev', $subject, $message, $headers1);

		if ($s1||$s2) {
					echo json_encode([
				"statut"=>"success",
				"data"=>$_POST,
				"msg"=>"Les informations ont été envoyé,Vous recevrez une reponse a l'addresse $email lors de la reception "]);

			mail("".$email, "Message de Confirmation", $confirm, $headers1);
		}
		else{
					echo json_encode([
				"statut"=>"error",
				"data"=>$_POST,
				"msg"=>"Un problème est survenue lors de l'envoi des informations, Veuillez renvoyer les informations"]);
		}


}
    





?>