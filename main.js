function calculate(){
    var area=Number(document.getElementById("length").value)*Number(document.getElementById("length").value);
    var perimeter=4*Number(document.getElementById("length").value);
    document.getElementById("area").innerHTML=area;
    document.getElementById("perimeter").innerHTML=perimeter;
}