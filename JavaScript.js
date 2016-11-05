
/* Lukk menyen ved å trykke en annen plass på skjermen, som ikke inneholder meny elementer */ 
if (screen && screen.width > 641) {
    document.write($(document).click(function (event) {
        if (!$(event.target).closest('nav').length) {
            if ($(window).width() <= "741px") { /* Mobil visning grense normal 641px, endret til 741px */
                if ($('nav').is(":visible")) {
                    $('nav').hide();
                }
            }
        }
    }
))
};

/* Mobilvisning */
$(document).ready(function () {
    $("#navToggle a").click(function (e) {
        e.preventDefault(); /* Overkjøre standar innstillinger */
        e.stopPropagation(); /* Hindre dobbelklikking for å aktivere meny! */

        $("header > nav").slideToggle();
        $("#logo").toggleClass("menuUp menuDown");

    });
    $(window).resize(function () {
        if ($(window).width() >= "741") { /* Mobil visning grense normal 641px, endret til 741px */
            $("header > nav").css("display", "block");

            if ($("#logo").attr('class') == "menuDown") {
                $("#logo").toggleClass("menuUp menuDown");
            }
        }
        else {
            $("header > nav").css("display", "none");
        }
    });

    $("header > nav > ul > li > a").click(function (e) {
        if ($(window).width() <= "741") { /* Mobil visning grense normal 641px, endret til 741px */
            if ($(this).siblings().size() > 0) {
                e.preventDefault();
                $(this).siblings().slideToggle("fast")
                $(this).children(".toggle").html($(this).children(".toggle").html() == 'close' ? 'expand' : 'close');
            }
        }
    });
});


//Lager close til modalen over utsiden av iframe

$('.modalclose ').click(function () {
    $('.modalclose, .inner').hide();
})
$('.inner').click(function (e) {
    e.stopPropagation();
})

// Hente frem Prosjektxml.xml dokument ved hjep av JavaScript, når en trykker på knappen "nøkkel"
function loadDoc() {

    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var xml = xhttp.responseXML;
            writeData(xml);
        }
    }
    xhttp.open("GET", "Prosjektxml.xml", true);
    xhttp.send();
}

function writeData(xml) {

    if (xml) { //xml != null
        var elements = xml.getElementsByTagName("todo");
        var display = document.getElementById("display");
        var table = "<table><tr><th> Nøkkelen til godt samarbeid</th></tr>";
        for (i = 0; i < elements.length; i++) {
            table +=
                "<tr><td>" + elements[i].getElementsByTagName("Linker")[0].textContent + "</td></tr>";
        }
        table += "</table>";
        display.innerHTML = table;
    }
}
