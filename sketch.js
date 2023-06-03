let latar;
let logoitera;
let logomtkitera;
let TimesNewRoman;
let TimesNewRomanBold;
let TimesNewRomanBoldItalic;
let TimesNewRomanItalic;
var x; // posisi awal meteor pada sumbu x
var y; // posisi awal meteor pada sumbu y
var v_x; // kecepatan awal meteor pada sumbu x
var v_y; // kecepatan awal meteor pada sumbu y
var a; // percepatan meteor pada sumbu y
var meteorImg; // gambar meteor


function preload() {
  meteorImg = loadImage('meteor.png'); 
  latar = loadImage('bgmeteor.jpg'); 
  logoitera = loadImage('logo_itera.png')
  logomtkitera = loadImage('logomtkitera.png')
  TimesNewRomanBold = loadFont('times new roman bold.ttf')
  TimesNewRoman = loadFont('times new roman.ttf')
  TimesNewRomanBoldItalic = loadFont('times new roman bold italic.ttf')
  TimesNewRomanItalic = loadFont('times new roman italic.ttf')
}


function setup() {
  createCanvas(1390,550);
  strokeWeight(800);
  // Membuat form inputan untuk kecepatan, percepatan, dan posisi awal meteor
  var input_vx = createInput(10); // input untuk kecepatan pada sumbu x
  input_vx.position(1200, 130);
  var input_vy = createInput(10); // input untuk kecepatan pada sumbu y
  input_vy.position(1200, 180);
  var input_a = createInput(0.002); // input untuk percepatan pada sumbu y
  input_a.position(1200, 230);
  var input_x = createInput(100); // input untuk posisi awal pada sumbu x
  input_x.position(1200, 282);
  var input_y = createInput(10); // input untuk posisi awal pada sumbu y
  input_y.position(1200, 330);
  
  // Membuat tombol untuk memulai simulasi
  var startButton = createButton('Start');
  startButton.position(1270, 355);
  startButton.mousePressed(function() {
    // Mengambil nilai inputan dan mengatur variabel sesuai dengan inputan
    v_x = parseFloat(input_vx.value());
    v_y = parseFloat(input_vy.value());
    a = parseFloat(input_a.value());
    x = parseFloat(input_x.value());
    y = parseFloat(input_y.value());
  });
}

function draw() {
  //background('black');
  //rect(50,50,800,800);
  
  //Latar
  image(latar,0,0,1390,550);
  //fill(51,66,87,200);
  //rect(0,0,1600,900);
  
  //Logo ITERA
  image(logoitera,1290,10,75,75)
  
  //Logo Matematika ITERA
  image(logomtkitera,1215,10,75,75)
  
  textSize(15);
  textFont('TimesNewRomanBold')
  textAlign(LEFT)
  fill("white");
  noStroke();
  text("input kecepatan sumbu x", 1200, 122);
  text("input kecepatan sumbu y", 1200, 175);
  text("input nilai percepatan", 1200, 225);
  text("input nilai posisi awal x", 1200, 272);
  text("input nilai posisi awal y", 1200, 320);
  
  textSize(28);
  textFont('TimesNewRomanBold')
  textAlign(LEFT)
  fill("white");
  noStroke();
  text("Simulasi Gerak Jatuh Meteor", 450, 43);
  
  
  textSize(20);
  textFont('TimesNewRomanBold')
  textAlign(LEFT)
  fill("white");
  noStroke();
  text("Program Studi Matematika ITERA", 473, 70);
  text("Mata Kuliah Visualisasi Dalam Sains", 465, 95);
  text("MA 2213", 573, 120);
  
  textSize(16);
  textFont('TimesNewRoman')
  textAlign(LEFT)
  fill("white");
  noStroke();
  text("Created by :", 10, 520);
  text("Winny Ouri Pakpahan", 95, 520);
  text("119160040", 95, 540);
  text("Berlian Dwi Safitri", 252, 520);
  text("121160012", 252, 540);
  text("Visna Mutiara Rahma", 387, 520);
  text("121160046", 387, 540);
  text("Leny Permatasari", 540, 520);
  text("121160056", 540, 540);
  text("Nesa Febrina Wulandari", 665, 520);
  text("121160072", 665, 540);
  text("Rika Kristiani Cornela Siburian", 834, 520);
  text("121160093", 834, 540);
  text("Debora Oktavia Girsang", 1050, 520);
  text("121160105", 1050, 540);
 
 
  // Menggambar gambar meteor pada posisi yang dihitung
  image(meteorImg, x, y, 100, 100);
  text("("+str(v_x) +", "+str(round(v_y,8)) +")", x, y, 100, 100);
  
  // Menghitung posisi meteor pada setiap frame
  x += v_x; // menghitung perubahan posisi pada sumbu x
  v_y += a; // menghitung perubahan kecepatan pada sumbu y akibat percepatan
  y += v_y; // menghitung perubahan posisi pada sumbu y akibat perubahan kecepatan
  
  // Membuat batas bawah layar untuk meteor agar meteor tidak terus jatuh
  if (y >= height) {
    x = -50; // mengatur ulang posisi meteor pada sumbu x menjadi di luar layar
    y = -50; // mengatur ulang posisi meteor pada sumbu y menjadi di atas layar
    v_x = 5; // mengatur ulang kecepatan meteor pada sumbu x
    v_y = 5; // mengatur ulang kecepatan meteor pada sumbu y
  }
}
