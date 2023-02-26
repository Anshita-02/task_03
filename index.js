const cel = document.querySelector("#celcius");
const far = document.querySelector('#fahrenheit');
const convert = document.querySelector("#convert");
const refresh = document.querySelector("#refresh");

refresh.addEventListener('click' , function(){
    cel.value = "";
    far.value = "";
    var radio = document.getElementsByName("Temperature");
    for(let i =0;i<radio.length;i++){
        radio[i].checked = false;
    }
})

convert.addEventListener('click' , function(){
    // var tf = parseInt(far.value);
    // var tc = parseInt((tf-32)/1.8);
    // console.log(tc);

    document.querySelector("#abcd").addEventListener("submit", function(evt){
        evt.preventDefault();
    })

    var temp = far.value;
    var radio = document.getElementsByName("Temperature");
    var units;
    for(let i =0;i<radio.length;i++){
        if(radio[i].checked){
            units = radio[i].value;
            break;
        }
    }
    // console.log("function");
    if(units== "fahrenheit"){
        console.log("if");
        var tf =parseInt((temp*1.8 )+ 32);
        tf = roundToTwo(tf);
        cel.value = `${tf} ॰F`
    }else{
        var tc = parseInt((temp-32)/1.8);
        tc = roundToTwo(tc);
        cel.value = `${tc} ॰C`
    }
});

function roundToTwo(num) {
    return +(Math.round(num + "e+2")  + "e-2");
}