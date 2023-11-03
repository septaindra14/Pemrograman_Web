// document.getElementById("batten").addEventListener("click", function () {
//     var namacoi = document.getElementById("name").value;
//     var emailcoi = document.getElementById("email").value;
//     var alamatcoi = document.getElementById("alamat").value;

//     if (namacoi&emailcoi&alamatcoi == 0) {
//         alert("Data Harus Lengkap")
//     } 
    
// });

function checkForm() {
    var nameInput = document.getElementById("name");
    var emailInput = document.getElementById("email");
    var alamatTextarea = document.getElementById("alamat");

    if (nameInput.value === "" || emailInput.value === "" || alamatTextarea.value === "") {
        alert("Isi data lengkap!");
    }
}
