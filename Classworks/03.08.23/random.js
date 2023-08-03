


for (var a=1; a <=10; a++){
    var random_number = Math.floor (Math.random () * 10 ) +1
    document.write ( `<p><b><u> ${a}: </u></b> ${a < 3 ? "&nbsp" : ""}
        &nbsp;&nbsp; ${random_number}</p>`)
}

