let askGrade = true; 
while(askGrade) {
  let ask = prompt("Silahkan masukan nilai (dari 0 - 100)");
  
  if (ask === null) {
    alert("Anda belum memasukkan nilai")
  } else if (ask >= 90) {
    alert("Selamat, Anda lulus dengan predikat A")
  } else if (ask >= 75 && ask <= 89) {
    alert("Selamat, Anda lulus dengan predikat B")
  } else if (ask >= 65 && ask <= 74) {
    alert("Selamat, Anda lulus dengan predikat C")
  } else if (ask >= 50 && ask <= 64) {
    alert("Selamat, Anda lulus dengan predikat D")
  } else if (ask <= 49) {
    alert("Maaf, Anda belum lulus")
  } else {
    alert("Anda belum memasukkan nilai yang benar")
  }
 
  askGrade = confirm("Apakah Anda ingin mengecek nilai kembali?")
}