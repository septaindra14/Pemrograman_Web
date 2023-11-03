document.getElementById("Jumlah").addEventListener("click", function () {
  var A1 = parseFloat(document.getElementById("A_1").value);
  var A2 = parseFloat(document.getElementById("A_2").value);

  var result = A1 + A2;
  alert("Hasil Penjumlahan = " + result);
});

document.getElementById("Clear").addEventListener("cick", function () {
    document.getElementById("A_1").value = "";
    document.getElementById("A_2").value = "";
});
