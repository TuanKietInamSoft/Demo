function sochansole() {
    var so1 = parseInt(document.forms["soChanSoLe"]["so1"].value);
    var so2 = parseInt(document.forms["soChanSoLe"]["so2"].value);

    document.getElementById("ketqua1").innerHTML = kiemtraso(so1)
    document.getElementById("ketqua2").innerHTML = kiemtraso(so2)
}

function kiemtraso(x){
    if (x % 2 == 0) {
        return x + " đây là số chẵn"
    } else {        
        return x + " đây là số lẻ"
    }
}