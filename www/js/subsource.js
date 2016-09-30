//SubSource = Script para alterar o nome dos herois que são recebidas do ConfSource.js.
$(document).ready(function() {
    // alert(window.location.search.substring(1));
//Recebe valor enviado na url e cria um array substituindo o "_" por ","
  var champion = window.location.search.substring(1).split("_");
//     alert(champion);

    champion[0] = champion[0].split("}{").join(" ");
    champion[0] = champion[0].split("./").join("<");
    champion[0] = champion[0].split("/.").join(">");
    champion[0] = champion[0].split('[]').join('"');
    champion[0] = champion[0].split("%27").join("'");

    champion[1] = champion[1].split("}{").join(" ");
    champion[1] = champion[1].split("./").join("<");
    champion[1] = champion[1].split("/.").join(">");
    champion[1] = champion[1].split('[]').join('"');
    champion[1] = champion[1].split("%27").join("'");

    champion[2] = champion[2].split("}{").join(" ");
    champion[2] = champion[2].split("./").join("<");
    champion[2] = champion[2].split("/.").join(">");
    champion[2] = champion[2].split('[]').join('"');
    champion[2] = champion[2].split("%27").join("'");

    champion[3] = champion[3].split("}{").join(" ");
    champion[3] = champion[3].split("./").join("<");
    champion[3] = champion[3].split("/.").join(">");
    champion[3] = champion[3].split('[]').join('"');
    champion[3] = champion[3].split("%27").join("'");

    champion[4] = champion[4].split("}{").join(" ");
    champion[4] = champion[4].split("./").join("<");
    champion[4] = champion[4].split("/.").join(">");
    champion[4] = champion[4].split('[]').join('"');
    champion[4] = champion[4].split("%27").join("'");

    champion[5] = champion[5].split("}{").join(" ");
    champion[5] = champion[5].split("./").join("<");
    champion[5] = champion[5].split("/.").join(">");
    champion[5] = champion[5].split('[]').join('"');
    champion[5] = champion[5].split("%27").join("'");

    champion[6] = champion[6].split("}{").join(" ");
    champion[6] = champion[6].split("./").join("<");
    champion[6] = champion[6].split("/.").join(">");
    champion[6] = champion[6].split('[]').join('"');
    champion[6] = champion[6].split("%27").join("'");

    champion[7] = champion[7].split("}{").join(" ");
    champion[7] = champion[7].split("./").join("<");
    champion[7] = champion[7].split("/.").join(">");
    champion[7] = champion[7].split('[]').join('"');
    champion[7] = champion[7].split("%27").join("'");

    champion[8] = champion[8].split("}{").join(" ");
    champion[8] = champion[8].split("./").join("<");
    champion[8] = champion[8].split("/.").join(">");
    champion[8] = champion[8].split('[]').join('"');
    champion[8] = champion[8].split("%27").join("'");
// alert(champion[2]);
    $("#main-champion").html(champion[0]);
    $("#bad-champion1").html(champion[1]);
    $("#bad-champion2").html(champion[2]);
    $("#bad-champion3").html(champion[3]);
    $("#bad-champion4").html(champion[4]);
    $("#good-champion5").html(champion[5]);
    $("#good-champion6").html(champion[6]);
    $("#good-champion7").html(champion[7]);
    $("#good-champion8").html(champion[8]);

});
