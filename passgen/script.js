// Asignar eventos a los botones
document.getElementById("generate").addEventListener("click", generatePassword);
document.getElementById("copy-button").addEventListener("click", copyToClipboard);

// Generar una contraseña aleatoria
function generatePassword() {
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()-_=+[]{}|;:'\",.<>?/";

    const allChars = lowercase + uppercase + numbers + symbols;

    // Obtener la longitud deseada
    const lengthInput = document.getElementById("password-length");
    const outputField = document.getElementById("generated-password");

    const length = parseInt(lengthInput.value);
    if (isNaN(length) || (length < 8 || length > 64)) {
        alert("Introduzca correctamente el número de caracteres");
        return;
    }

    // Generar la contraseña
    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex]; 
    }

    // Mostrar la contraseña
    outputField.value = password;
}

// Copiar la contraseña al portapapeles
function copyToClipboard() {
    var copyText = document.getElementById("generated-password");

    copyText.select();
    copyText.setSelectionRange(0, 99999);
  
    navigator.clipboard.writeText(copyText.value);
  
    alert("Contraseña copiada");
}
