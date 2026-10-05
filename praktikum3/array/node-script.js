const mahasiswa = [
  { nama: "Ayu", prodi: "SI", nilai: 88 },
  { nama: "Bima", prodi: "SI", nilai: 76 },
  { nama: "Citra", prodi: "SI", nilai: 91 },
  { nama: "Dedi", prodi: "SI", nilai: 64 },
];

function tentukanStatus(nilai) {
  return nilai >= 65 ? "Lulus" : "Belum Lulus";
}

function hitungRataRata(dataMahasiswa) {
  let total = 0;

  for (let i = 0; i < dataMahasiswa.length; i++) {
    total += dataMahasiswa[i].nilai;
  }

  return total / dataMahasiswa.length;
}

const rataRata = hitungRataRata(mahasiswa);
const jumlahLulus = mahasiswa.filter((item) => item.nilai >= 65).length;

console.table(mahasiswa);
console.log("Rata-rata:", rataRata);
console.log("Jumlah Lulus:", jumlahLulus);

for (let i = 0; i < mahasiswa.length; i++) {
  const item = mahasiswa[i];
  const status = tentukanStatus(item.nilai);

  console.log(
    `Nama: ${item.nama}, Prodi: ${item.prodi}, Nilai: ${item.nilai}, Status: ${status}`,
  );
}
