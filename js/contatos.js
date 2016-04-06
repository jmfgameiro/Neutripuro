/***************************************************************************/
/*                                                                         */
/*                                                                         */
/*                                                                         */
/***************************************************************************/


/***** MAPA *****/
function initialize() {
	//
	var position = new google.maps.LatLng(39.426260, -9.161524),
        positionA8 = new google.maps.LatLng(39.419033, -9.152726),
	
	//
        mapOptions = {
			center: position,
			zoom: 14,
			mapTypeId: google.maps.MapTypeId.ROADMAP
        },
        map = new google.maps.Map(document.getElementById("map-container"), mapOptions),
	
	//
        marker = new google.maps.Marker({ position: position, map: map, title: "Neutripuro", label: "Neutripuro" }),
        bounds = new google.maps.LatLngBounds();
    
    //
	bounds.extend(position);
	bounds.extend(positionA8);
	map.fitBounds(bounds);
}

google.maps.event.addDomListener(window, "load", initialize);


/***** E-MAIL *****/
$(document).ready(function () {
    $("#contact_form").bootstrapValidator({
        // To use feedback icons, ensure that you use Bootstrap v3.1.0 or later
        feedbackIcons: {
            valid: "glyphicon glyphicon-ok",
            invalid: "glyphicon glyphicon-remove",
            validating: "glyphicon glyphicon-refresh"
        },
        fields: {
            name: {
                validators: {
                    stringLength: {
                        min: 2
                    },
                    notEmpty: {
                        message: "Por favor indique o seu nome"
                    }
                }
            },
            email: {
                validators: {
                    notEmpty: {
                        message: "Por favor indique o seu e-mail de contato"
                    },
                    emailAddress: {
                        message: "Por favor indique um e-mail válido"
                    }
                }
            },
            message: {
                validators: {
                    stringLength: {
                        min: 10,
                        max: 400,
                        message: "A sua mensagem não pode ter menos de 10 caracteres ou mais do que 400."
                    },
                    notEmpty: {
                        message: "Por favor deixe-nos a sua mensagem"
                    }
                }
            }
        }
    }).on("success.form.bv", function (e) {
        $("#contact_form").data("bootstrapValidator").resetForm();
        
        // Prevent form submission
        e.preventDefault();
        
        // Get the form instance
        var $form = $(e.target),
        // Get the BootstrapValidator instance
            bv = $form.data("bootstrapValidator");
        
        // Use Ajax to submit form data
        $.ajax({
            url: "/php/email.php",
            type: "post",
            data: { "submit": "1", "name": $("#name").val(), "email": $("#email").val(), "message": $("#message").val() },
            success: function (response) {
                //console.log(response);
                if (response.indexOf("fail") >= 0) {
                    $("#message_warning").slideDown({ opacity: "show" }, "slow");
                } else {
                    $("#message_success").slideDown({ opacity: "show" }, "slow");
                }
            }
        });
    });
});

