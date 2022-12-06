document.querySelector("form.formulario").addEventListener("submit", function (event) {

    event.preventDefault();// parar envío

    // Texto
    console.log(event.target.namePupil.value);
    console.log(event.target.email.value);

    // Radio
    console.log(event.target.evaluacion.value);

    //Checkbox
    console.log(event.target.thingsToReview.checked);

    //Date
    console.log(event.target.datemax.date);
    console.log(event.target.datemin.date);


    const namePupil = event.target.namePupil.value;
    const email = event.target.email.value;
    const evaluacion = event.target.evaluacion.value;
    const thingsToReview = event.target.thingsToReview.checked;
    const datemin = event.target.datemin.value;
    const datemax = event.target.datemax.value;



    let validated = true;

    if (namePupil.length < 5 || namePupil.length > 20) {
        validated = false;
    }

    if (!email.includes("@") && !email.endsWith(".com")) {
        validated = false;
    }

    if (evaluacion == "") {
        validated = false;
    }

    /*EL DE ABAJO NO FUNCIONA, ES EL DE TIPO CHECKBOX*/

    if (thingsToReview == "") {
        validated = false;
    }

    if (!datemin) {
        validated = false;
    }

    if (!datemax) {
        validated = false;
    }

    if (validated == false) {
        alert("Faltan campos por rellenar o corregir:" + "\n" +
            "El nombre debe contener entre 5 y 20 caracteres." + "\n" +
            "El fortamo de email no es aceptado." + "\n" +
            "No ha seleccionado opcion evaluativa." + "\n" + 
            "No ha seleccionado opcion u opciones de repaso." + "\n" + 
            "No ha seleccionado fechas."
        );

    }
    // Comprobación final - Todo validado
    if (validated) {
        alert("Formulario enviado")
        event.target.submit();
    }
})