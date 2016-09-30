//  ConfSource = configuração das imagens que vão aparecer na página ResultCounter.html

$(window).load(function(){ 
    //Botei a função pesquisa aqui como windows.load para carregar primeiro que o ADMOB.
         //Função de Buscar
          $("#search").keyup(function(){
            $("#all-champions").children().show();
            var busca = $("#search").val();
            if(busca != ""){
          // Transforma o primeiro caracter digitado em caixa alta
              if(busca.length==1){
                busca = busca.toUpperCase();
                $("#search").val(busca);
              }
              $("#all-champions").children().not("[id*="+busca+"]").hide();
            }
          });
});

$(document).ready(function() {  //Executa quando o documento estiver carregado

        $("img").click(function(){  // é acionado quando qualquer imagem for clicada

           switch (this.id) {  // recebe a id do elemento clicado e verifica em qual case se encontra

              /* TODAS AS INFORMAÇÕES DE COUNTERS ESTÃO SENDO ATUALIZADAS ATRAVÉS DO SITE CHAMPION.GG/CHAMPION/ */

             case "Aatrox":{
              var img0 = $("#divAatrox").html();
              var img1 = $("#divGraves").html();
              var img2 = $("#divYasuo").html();
              var img3 = $("#divPoppy").html();
              var img4 = $("#divRenekton").html();
              var img5 = $("#divTrundle").html();
              var img6 = $("#divJax").html();
              var img7 = $("#divNautilus").html();
              var img8 = $("#divNasus").html();
             }
            break;
             case "Ahri":{
              var img0 = $("#divAhri").html();
              var img1 = $("#divTalon").html();
              var img2 = $("#divKatarina").html();
              var img3 = $("#divZed").html();
              var img4 = $("#divMalzahar").html();
              var img5 = $("#divEkko").html();
              var img6 = $("#divGalio").html();
              var img7 = $("#divZyra").html();
              var img8 = $("#divCassiopeia").html();
             }
            break;
             case "Akali":{
              var img0 = $("#divAkali").html();
              var img1 = $("#divIllaoi").html();
              var img2 = $("#divRenekton").html();
              var img3 = $("#divDarius").html();
              var img4 = $("#divNasus").html();
              var img5 = $("#divGnar").html();
              var img6 = $("#divMalphite").html();
              var img7 = $("#divIrelia").html();
              var img8 = $("#divGangplank").html();
             }
               break;
             case "Alistar":{
              var img0 = $("#divAlistar").html();
              var img1 = $("#divSona").html();
              var img2 = $("#divTrundle").html();
              var img3 = $("#divMorgana").html();
              var img4 = $("#divNautilus").html();
              var img5 = $("#divAnnie").html();
              var img6 = $("#divBrand").html();
              var img7 = $("#divThresh").html();
              var img8 = $("#divLulu").html();
             }
               break;
             case "Amumu":{
              var img0 = $("#divAmumu").html();
              var img1 = $("#divWarwick").html();
              var img2 = $("#divRekSai").html();
              var img3 = $("#divXinZhao").html();
              var img4 = $("#divChoGath").html();
              var img5 = $("#divQuinn").html();
              var img6 = $("#divRammus").html();
              var img7 = $("#divMaokai").html();
              var img8 = $("#divAurelionSol").html();
             }
               break;
             case "Anivia":{
              var img0 = $("#divAnivia").html();
              var img1 = $("#divXerath").html();
              var img2 = $("#divAzir").html();
              var img3 = $("#divVelKoz").html();
              var img4 = $("#divJayce").html();
              var img5 = $("#divTalon").html();
              var img6 = $("#divVeigar").html();
              var img7 = $("#divEkko").html();
              var img8 = $("#divLulu").html();
             }
               break;
             case "Annie":{
              var img0 = $("#divAnnie").html();
              var img1 = $("#divCorki").html();
              var img2 = $("#divDiana").html();
              var img3 = $("#divSwain").html();
              var img4 = $("#divXerath").html();
              var img5 = $("#divYasuo").html();
              var img6 = $("#divJayce").html();
              var img7 = $("#divCassiopeia").html();
              var img8 = $("#divVeigar").html();
             }
               break;
             case "Ashe":{
              var img0 = $("#divAshe").html();
              var img1 = $("#divMissFortune").html();
              var img2 = $("#divTwitch").html();
              var img3 = $("#divSivir").html();
              var img4 = $("#divCorki").html();
              var img5 = $("#divKalista").html();
              var img6 = $("#divVarus").html();
              var img7 = $("#divTristana").html();
              var img8 = $("#divVayne").html();
             }
               break;
             case "AurelionSol":{
              var img0 = $("#divAurelionSol").html();
              var img1 = $("#divZed").html();
              var img2 = $("#divFizz").html();
              var img3 = $("#divKatarina").html();
              var img4 = $("#divAhri").html();
              var img5 = $("#divLulu").html();
              var img6 = $("#divLissandra").html();
              var img7 = $("#divKayle").html();
              var img8 = $("#divKarma").html();
             }       
           break;
             case "Azir":{
              var img0 = $("#divAzir").html();
              var img1 = $("#divVarus").html();
              var img2 = $("#divZed").html();
              var img3 = $("#divXerath").html();
              var img4 = $("#divVelKoz").html();
              var img5 = $("#divHeimerdinger").html();
              var img6 = $("#divAnivia").html();
              var img7 = $("#divKayle").html();
              var img8 = $("#divCassiopeia").html();
             }
               break;
             case "Bard":{
              var img0 = $("#divBard").html();
              var img1 = $("#divSona").html();
              var img2 = $("#divNami").html();
              var img3 = $("#divMorgana").html();
              var img4 = $("#divPoppy").html();
              var img5 = $("#divTrundle").html();
              var img6 = $("#divTahmKench").html();
              var img7 = $("#divTaric").html();
              var img8 = $("#divLulu").html();
             }
               break;
             case "Blitzcrank":{
              var img0 = $("#divBlitzcrank").html();
              var img1 = $("#divLeona").html();
              var img2 = $("#divZilean").html();
              var img3 = $("#divSivir").html();
              var img4 = $("#divKogMaw").html();
              var img5 = $("#divCaitlyn").html();
              var img6 = $("#divKalista").html();
              var img7 = $("#divTristana").html();
              var img8 = $("#divVayne").html();
             }
               break;
             case "Brand":{
              var img0 = $("#divBrand").html();
              var img1 = $("#divKatarina").html();
              var img2 = $("#divKarma").html();
              var img3 = $("#divZed").html();
              var img4 = $("#divLux").html();
              var img5 = $("#divEkko").html();
              var img6 = $("#divLulu").html();
              var img7 = $("#divLissandra").html();
              var img8 = $("#divZiggs").html();
             }
               break;
             case "Braum":{
              var img0 = $("#divBraum").html();
              var img1 = $("#divZyra").html();
              var img2 = $("#divZilean").html();
              var img3 = $("#divGraves").html();
              var img4 = $("#divTwitch").html();
              var img5 = $("#divNautilus").html();
              var img6 = $("#divTaric").html();
              var img7 = $("#divQuinn").html();
              var img8 = $("#divDraven").html();
             }
               break;
             case "Caitlyn":{
              var img0 = $("#divCaitlyn").html();
              var img1 = $("#divJhin").html();
              var img2 = $("#divSivir").html();
              var img3 = $("#divVarus").html();
              var img4 = $("#divKogMaw").html();
              var img5 = $("#divKalista").html();
              var img6 = $("#divTristana").html();
              var img7 = $("#divVayne").html();
              var img8 = $("#divGraves").html();
             }
               break;
             case "Cassiopeia":{
              var img0 = $("#divCassiopeia").html();
              var img1 = $("#divLeblanc").html();
              var img2 = $("#divAhri").html();
              var img3 = $("#divAnnie").html();
              var img4 = $("#divZed").html();
              var img5 = $("#divTwistedFate").html();
              var img6 = $("#divYasuo").html();
              var img7 = $("#divFizz").html();
              var img8 = $("#divOrianna").html();
             }
               break;
             case "ChoGath":{
              var img0 = $("#divChoGath").html();
              var img1 = $("#divDarius").html();
              var img2 = $("#divFiora").html();
              var img3 = $("#divQuinn").html();
              var img4 = $("#divTryndamere").html();
              var img5 = $("#divRyze").html();
              var img6 = $("#divOlaf").html();
              var img7 = $("#divRengar").html();
              var img8 = $("#divTeemo").html();
             }
               break;
             case "Corki":{
              var img0 = $("#divCorki").html();
              var img1 = $("#divJhin").html();
              var img2 = $("#divVarus").html();
              var img3 = $("#divKogMaw").html();
              var img4 = $("#divSivir").html();
              var img5 = $("#divEzreal").html();
              var img6 = $("#divTristana").html();
              var img7 = $("#divKalista").html();
              var img8 = $("#divCaitlyn").html();
             }
               break;
             case "Darius":{
              var img0 = $("#divDarius").html();
              var img1 = $("#divQuinn").html();
              var img2 = $("#divRiven").html();
              var img3 = $("#divJayce").html();
              var img4 = $("#divRyze").html();
              var img5 = $("#divRammus").html();
              var img6 = $("#divChoGath").html();
              var img7 = $("#divMaokai").html();
              var img8 = $("#divSinged").html();
             }
               break;
             case "Diana":{
              var img0 = $("#divDiana").html();
              var img1 = $("#divYasuo").html();
              var img2 = $("#divKayle").html();
              var img3 = $("#divZed").html();
              var img4 = $("#divChoGath").html();
              var img5 = $("#divMorgana").html();
              var img6 = $("#divAurelionSol").html();
              var img7 = $("#divAnnie").html();
              var img8 = $("#divZiggs").html();
             }
               break;
             case "Draven":{
              var img0 = $("#divDraven").html();
              var img1 = $("#divTwitch").html();
              var img2 = $("#divEzreal").html();
              var img3 = $("#divKogMaw").html();
              var img4 = $("#divVarus").html();
              var img5 = $("#divKalista").html();
              var img6 = $("#divVayne").html();
              var img7 = $("#divJinx").html();
              var img8 = $("#divGraves").html();
             }
               break;
             case "DrMundo":{
              var img0 = $("#divDrMundo").html();
              var img1 = $("#divTrundle").html();
              var img2 = $("#divTryndamere").html();
              var img3 = $("#divNasus").html();
              var img4 = $("#divTahmKench").html();
              var img5 = $("#divTeemo").html();
              var img6 = $("#divMaokai").html();
              var img7 = $("#divVladimir").html();
              var img8 = $("#divOlaf").html();
             }
               break;
             case "Ekko":{
              var img0 = $("#divEkko").html();
              var img1 = $("#divKindred").html();
              var img2 = $("#divMasterYi").html();
              var img3 = $("#divDiana").html();
              var img4 = $("#divRengar").html();
              var img5 = $("#divFiddlesticks").html();
              var img6 = $("#divPoppy").html();
              var img7 = $("#divRammus").html();
              var img8 = $("#divZac").html();
             }
               break;
             case "Elise":{
              var img0 = $("#divElise").html();
              var img1 = $("#divKindred").html();
              var img2 = $("#divGraves").html();
              var img3 = $("#divDiana").html();
              var img4 = $("#divQuinn").html();
              var img5 = $("#divPantheon").html();
              var img6 = $("#divRammus").html();
              var img7 = $("#divPoppy").html();
              var img8 = $("#divZac").html();
             }
               break;
             case "Evelynn":{
              var img0 = $("#divEvelynn").html();
              var img1 = $("#divXinZhao").html();
              var img2 = $("#divMasterYi").html();
              var img3 = $("#divKindred").html();
              var img4 = $("#divVolibear").html();
              var img5 = $("#divHecarim").html();
              var img6 = $("#divWukong").html();
              var img7 = $("#divZac").html();
              var img8 = $("#divDiana").html();
             }
               break;
             case "Ezreal":{
              var img0 = $("#divEzreal").html();
              var img1 = $("#divCorki").html();
              var img2 = $("#divJhin").html();
              var img3 = $("#divKogMaw").html();
              var img4 = $("#divTwitch").html();
              var img5 = $("#divQuinn").html();
              var img6 = $("#divMissFortune").html();
              var img7 = $("#divDraven").html();
              var img8 = $("#divCaitlyn").html();
             }
               break;
             case "Fiddlesticks":{
              var img0 = $("#divFiddlesticks").html();
              var img1 = $("#divEkko").html();
              var img2 = $("#divXinZhao").html();
              var img3 = $("#divRengar").html();
              var img4 = $("#divShyvana").html();
              var img5 = $("#divNocturne").html();
              var img6 = $("#divLeeSin").html();
              var img7 = $("#divVi").html();
              var img8 = $("#divVolibear").html();
             }
               break;
             case "Fiora":{
              var img0 = $("#divFiora").html();
              var img1 = $("#divGraves").html();
              var img2 = $("#divKayle").html();
              var img3 = $("#divPantheon").html();
              var img4 = $("#divTrundle").html();
              var img5 = $("#divChoGath").html();
              var img6 = $("#divMaokai").html();
              var img7 = $("#divSinged").html();
              var img8 = $("#divRyze").html();
             }
               break;
             case "Fizz":{
              var img0 = $("#divFizz").html();
              var img1 = $("#divKayle").html();
              var img2 = $("#divJayce").html();
              var img3 = $("#divZed").html();
              var img4 = $("#divCorki").html();
              var img5 = $("#divVeigar").html();
              var img6 = $("#divAurelionSol").html();
              var img7 = $("#divTwistedFate").html();
              var img8 = $("#divRyze").html();
             }
               break;
             case "Galio":{
              var img0 = $("#divGalio").html();
              var img1 = $("#divYasuo").html();
              var img2 = $("#divAhri").html();
              var img3 = $("#divLeblanc").html();
              var img4 = $("#divLux").html();
              var img5 = $("#divFizz").html();
              var img6 = $("#divCassiopeia").html();
              var img7 = $("#divMalzahar").html();
              var img8 = $("#divBrand").html();
             }
               break;
             case "Gangplank":{
              var img0 = $("#divGangplank").html();
              var img1 = $("#divTryndamere").html();
              var img2 = $("#divGraves").html();
              var img3 = $("#divRengar").html();
              var img4 = $("#divQuinn").html();
              var img5 = $("#divChoGath").html();
              var img6 = $("#divMaokai").html();
              var img7 = $("#divFiora").html();
              var img8 = $("#divIllaoi").html();
             }
               break;
             case "Garen":{
              var img0 = $("#divGaren").html();
              var img1 = $("#divKayle").html();
              var img2 = $("#divGraves").html();
              var img3 = $("#divQuinn").html();
              var img4 = $("#divTeemo").html();
              var img5 = $("#divIllaoi").html();
              var img6 = $("#divWukong").html();
              var img7 = $("#divMaokai").html();
              var img8 = $("#divIrelia").html();
             }
               break;
             case "Gnar":{
              var img0 = $("#divGnar").html();
              var img1 = $("#divAkali").html();
              var img2 = $("#divYasuo").html();
              var img3 = $("#divGraves").html();
              var img4 = $("#divRengar").html();
              var img5 = $("#divShen").html();
              var img6 = $("#divSinged").html();
              var img7 = $("#divIllaoi").html();
              var img8 = $("#divDarius").html();
             }
               break;
             case "Gragas":{
              var img0 = $("#divGragas").html();
              var img1 = $("#divShyvana").html();
              var img2 = $("#divXinZhao").html();
              var img3 = $("#divWarwick").html();
              var img4 = $("#divKindred").html();
              var img5 = $("#divDrMundo").html();
              var img6 = $("#divQuinn").html();
              var img7 = $("#divAurelionSol").html();
              var img8 = $("#divPoppy").html();
             }
               break;
             case "Graves":{
              var img0 = $("#divGraves").html();
              var img1 = $("#divTryndamere").html();
              var img2 = $("#divYasuo").html();
              var img3 = $("#divPantheon").html();
              var img4 = $("#divKayle").html();
              var img5 = $("#divFiora").html();
              var img6 = $("#divIllaoi").html();
              var img7 = $("#divRenekton").html();
              var img8 = $("#divMaokai").html();
             }
               break;
             case "Hecarim":{ 
              var img0 = $("#divHecarim").html();
              var img1 = $("#divVolibear").html();
              var img2 = $("#divMasterYi").html();
              var img3 = $("#divEvelynn").html();
              var img4 = $("#divRengar").html();
              var img5 = $("#divZac").html();
              var img6 = $("#divFizz").html();
              var img7 = $("#divJarvanIV").html();
              var img8 = $("#divRekSai").html();
             }
               break;
             case "Heimerdinger":{
              var img0 = $("#divHeimerdinger").html();
              var img1 = $("#divLux").html();
              var img2 = $("#divAzir").html();
              var img3 = $("#divZed").html();
              var img4 = $("#divYasuo").html();
              var img5 = $("#divFizz").html();
              var img6 = $("#divLeblanc").html();
              var img7 = $("#divAhri").html();
              var img8 = $("#divZed").html();
             }
               break;
             case "Illaoi":{ 
              var img0 = $("#divIllaoi").html();
              var img1 = $("#divTrundle").html();
              var img2 = $("#divKayle").html();
              var img3 = $("#divGaren").html();
              var img4 = $("#divPoppy").html();
              var img5 = $("#divAkali").html();
              var img6 = $("#divOlaf").html();
              var img7 = $("#divJarvanIV").html();
              var img8 = $("#divWukong").html();
             }
               break;
             case "Irelia":{
              var img0 = $("#divIrelia").html();
              var img1 = $("#divVolibear").html();
              var img2 = $("#divAkali").html();
              var img3 = $("#divGaren").html();
              var img4 = $("#divPoppy").html();
              var img5 = $("#divRyze").html();
              var img6 = $("#divTeemo").html();
              var img7 = $("#divVladimir").html();
              var img8 = $("#divOlaf").html();
             }
               break;
             case "Janna":{
              var img0 = $("#divJanna").html();
              var img1 = $("#divTrundle").html();
              var img2 = $("#divZyra").html();
              var img3 = $("#divJhin").html();
              var img4 = $("#divAshe").html();
              var img5 = $("#divNautilus").html();
              var img6 = $("#divAlistar").html();
              var img7 = $("#divQuinn").html();
              var img8 = $("#divTahmKench").html();
             }
               break;
             case "JarvanIV":{
              var img0 = $("#divJarvanIV").html();
              var img1 = $("#divNidalee").html();
              var img2 = $("#divMasterYi").html();
              var img3 = $("#divJax").html();
              var img4 = $("#divShyvana").html();
              var img5 = $("#divZac").html();
              var img6 = $("#divSejuani").html();
              var img7 = $("#divPoppy").html();
              var img8 = $("#divAurelionSol").html();
             }
               break;
             case "Jax":{
              var img0 = $("#divJax").html();
              var img1 = $("#divPantheon").html();
              var img2 = $("#divPoppy").html();
              var img3 = $("#divQuinn").html();
              var img4 = $("#divGaren").html();
              var img5 = $("#divMaokai").html();
              var img6 = $("#divNasus").html();
              var img7 = $("#divTahmKench").html();
              var img8 = $("#divLissandra").html();
             }
               break;
             case "Jayce":{
              var img0 = $("#divJayce").html();
              var img1 = $("#divQuinn").html();
              var img2 = $("#divWukong").html();
              var img3 = $("#divMalphite").html();
              var img4 = $("#divYasuo").html();
              var img5 = $("#divDarius").html();
              var img6 = $("#divEkko").html();
              var img7 = $("#divRiven").html();
              var img8 = $("#divJax").html();
             }
               break;
             case "Jhin":{
              var img0 = $("#divJhin").html();
              var img1 = $("#divTwitch").html();
              var img2 = $("#divAshe").html();
              var img3 = $("#divSivir").html();
              var img4 = $("#divKogMaw").html();
              var img5 = $("#divQuinn").html();
              var img6 = $("#divCaitlyn").html();
              var img7 = $("#divTristana").html();
              var img8 = $("#divCorki").html();
             }
               break;
             case "Jinx":{
              var img0 = $("#divJinx").html();
              var img1 = $("#divTwitch").html();
              var img2 = $("#divKogMaw").html();
              var img3 = $("#divDraven").html();
              var img4 = $("#divJhin").html();
              var img5 = $("#divVayne").html();
              var img6 = $("#divKalista").html();
              var img7 = $("#divVarus").html();
              var img8 = $("#divGraves").html();
             }
               break;
             case "Kalista":{
              var img0 = $("#divKalista").html();
              var img1 = $("#divAshe").html();
              var img2 = $("#divTwitch").html();
              var img3 = $("#divMissFortune").html();
              var img4 = $("#divGraves").html();
              var img5 = $("#divSivir").html();
              var img6 = $("#divEzreal").html();
              var img7 = $("#divCaitlyn").html();
              var img8 = $("#divVayne").html();
             }
               break;
             case "Karma":{
              var img0 = $("#divKarma").html();
              var img1 = $("#divNautilus").html();
              var img2 = $("#divBlitzcrank").html();
              var img3 = $("#divJhin").html();
              var img4 = $("#divAshe").html();
              var img5 = $("#divAnnie").html();
              var img6 = $("#divPoppy").html();
              var img7 = $("#divTrundle").html();
              var img8 = $("#divMissFortune").html();
             }
               break;
             case "Karthus":{
              var img0 = $("#divKarthus").html();
              var img1 = $("#divZed").html();
              var img2 = $("#divAhri").html();
              var img3 = $("#divKatarina").html();
              var img4 = $("#divYasuo").html();
              var img5 = $("#divAzir").html();
              var img6 = $("#divLux").html();
              var img7 = $("#divFizz").html();
              var img8 = $("#divLeblanc").html();
             }
               break;
             case "Kassadin":{
              var img0 = $("#divKassadin").html();
              var img1 = $("#divZed").html();
              var img2 = $("#divTalon").html();
              var img3 = $("#divAnivia").html();
              var img4 = $("#divAhri").html();
              var img5 = $("#divMorgana").html();
              var img6 = $("#divEkko").html();
              var img7 = $("#divOrianna").html();
              var img8 = $("#divViktor").html();
             }
               break;
             case "Katarina":{
              var img0 = $("#divKatarina").html();
              var img1 = $("#divZed").html();
              var img2 = $("#divVarus").html();
              var img3 = $("#divJayce").html();
              var img4 = $("#divVladimir").html();
              var img5 = $("#divSwain").html();
              var img6 = $("#divEkko").html();
              var img7 = $("#divBrand").html();
              var img8 = $("#divVeigar").html();
             }
               break;
             case "Kayle":{
              var img0 = $("#divKayle").html();
              var img1 = $("#divTryndamere").html();
              var img2 = $("#divEkko").html();
              var img3 = $("#divJarvanIV").html();
              var img4 = $("#divLissandra").html();
              var img5 = $("#divIllaoi").html();
              var img6 = $("#divFiora").html();
              var img7 = $("#divRenekton").html();
              var img8 = $("#divGaren").html();
             }
               break;
             case "Kennen":{
              var img0 = $("#divKennen").html();
              var img1 = $("#divMalphite").html();
              var img2 = $("#divRiven").html();
              var img3 = $("#divIrelia").html();
              var img4 = $("#divGangplank").html();
              var img5 = $("#divFiora").html();
              var img6 = $("#divDarius").html();
              var img7 = $("#divRenekton").html();
              var img8 = $("#divNautilus").html();
             }
               break;
             case "KhaZix":{
              var img0 = $("#divKhaZix").html();
              var img1 = $("#divKindred").html();
              var img2 = $("#divUdyr").html();
              var img3 = $("#divChoGath").html();
              var img4 = $("#divShyvana").html();
              var img5 = $("#divAatrox").html();
              var img6 = $("#divPantheon").html();
              var img7 = $("#divJarvanIV").html();
              var img8 = $("#divSion").html();
             }
               break;
             case "Kindred":{
              var img0 = $("#divKindred").html();
              var img1 = $("#divMasterYi").html();
              var img2 = $("#divVolibear").html();
              var img3 = $("#divJax").html();
              var img4 = $("#divUdyr").html();
              var img5 = $("#divQuinn").html();
              var img6 = $("#divMaokai").html();
              var img7 = $("#divPoppy").html();
              var img8 = $("#divZac").html();
             }
               break;
             case "KogMaw":{
              var img0 = $("#divKogMaw").html();
              var img1 = $("#divAshe").html();
              var img2 = $("#divJhin").html();
              var img3 = $("#divZilean").html();
              var img4 = $("#divVelKoz").html();
              var img5 = $("#divVayne").html();
              var img6 = $("#divTristana").html();
              var img7 = $("#divVarus").html();
              var img8 = $("#divKalista").html();
             }
               break;
             case "Leblanc":{
              var img0 = $("#divLeblanc").html();
              var img1 = $("#divQuinn").html();
              var img2 = $("#divZed").html();
              var img3 = $("#divKatarina").html();
              var img4 = $("#divMalzahar").html();
              var img5 = $("#divAkali").html();
              var img6 = $("#divCassiopeia").html();
              var img7 = $("#divVladimir").html();
              var img8 = $("#divRyze").html();
             }
               break;
             case "LeeSin":{
              var img0 = $("#divLeeSin").html();
              var img1 = $("#divKindred").html();
              var img2 = $("#divVolibear").html();
              var img3 = $("#divNidalee").html();
              var img4 = $("#divXinZhao").html();
              var img5 = $("#divOlaf").html();
              var img6 = $("#divChoGath").html();
              var img7 = $("#divDrMundo").html();
              var img8 = $("#divShaco").html();
             }
               break;
             case "Leona":{
              var img0 = $("#divLeona").html();
              var img1 = $("#divMorgana").html();
              var img2 = $("#divTrundle").html();
              var img3 = $("#divVelKoz").html();
              var img4 = $("#divJanna").html();
              var img5 = $("#divBlitzcrank").html();
              var img6 = $("#divAlistar").html();
              var img7 = $("#divPoppy").html();
              var img8 = $("#divTaric").html();
             }
               break;
             case "Lissandra":{
              var img0 = $("#divLissandra").html();
              var img1 = $("#divCorki").html();
              var img2 = $("#divSyndra").html();
              var img3 = $("#divTwistedFate").html();
              var img4 = $("#divXerath").html();
              var img5 = $("#divZiggs").html();
              var img6 = $("#divEkko").html();
              var img7 = $("#divGangplank").html();
              var img8 = $("#divKassadin").html();
             }
               break;
             case "Lucian":{
              var img0 = $("#divLucian").html();
              var img1 = $("#divTwitch").html();
              var img2 = $("#divJhin").html();
              var img3 = $("#divKogMaw").html();
              var img4 = $("#divGraves").html();
              var img5 = $("#divUrgot").html();
              var img6 = $("#divKalista").html();
              var img7 = $("#divVayne").html();
              var img8 = $("#divTristana").html();
             }
               break;
             case "Lulu":{
              var img0 = $("#divLulu").html();
              var img1 = $("#divSona").html();
              var img2 = $("#divBlitzcrank").html();
              var img3 = $("#divNami").html();
              var img4 = $("#divJhin").html();
              var img5 = $("#divPoppy").html();
              var img6 = $("#divKarma").html();
              var img7 = $("#divTrundle").html();
              var img8 = $("#divKalista").html();
             }
               break;
             case "Lux":{
              var img0 = $("#divLux").html();
              var img1 = $("#divXerath").html();
              var img2 = $("#divZed").html();
              var img3 = $("#divKatarina").html();
              var img4 = $("#divGalio").html();
              var img5 = $("#divSwain").html();
              var img6 = $("#divHeimerdinger").html();
              var img7 = $("#divKennen").html();
              var img8 = $("#divVeigar").html();
             }
               break;
             case "Malphite":{
              var img0 = $("#divMalphite").html();
              var img1 = $("#divMaokai").html();
              var img2 = $("#divSion").html();
              var img3 = $("#divNautilus").html();
              var img4 = $("#divTahmKench").html();
              var img5 = $("#divIrelia").html();
              var img6 = $("#divFiora").html();
              var img7 = $("#divJax").html();
              var img8 = $("#divOlaf").html();
             }
               break;
             case "Malzahar":{
              var img0 = $("#divMalzahar").html();
              var img1 = $("#divGalio").html();
              var img2 = $("#divTalon").html();
              var img3 = $("#divMorgana").html();
              var img4 = $("#divFizz").html();
              var img5 = $("#divVeigar").html();
              var img6 = $("#divKayle").html();
              var img7 = $("#divOrianna").html();
              var img8 = $("#divKassadin").html();
             }
               break;
             case "Maokai":{
              var img0 = $("#divMaokai").html();
              var img1 = $("#divPoppy").html();
              var img2 = $("#divGaren").html();
              var img3 = $("#divGraves").html();
              var img4 = $("#divTeemo").html();
              var img5 = $("#divJayce").html();
              var img6 = $("#divOlaf").html();
              var img7 = $("#divSion").html();
              var img8 = $("#divMalphite").html();
             }
               break;
             case "MasterYi":{
              var img0 = $("#divMasterYi").html();
              var img1 = $("#divJax").html();
              var img2 = $("#divTrundle").html();
              var img3 = $("#divAmumu").html();
              var img4 = $("#divRekSai").html();
              var img5 = $("#divAurelionSol").html();
              var img6 = $("#divChoGath").html();
              var img7 = $("#divMaokai").html();
              var img8 = $("#divPantheon").html();
             }
               break;
             case "MissFortune":{
              var img0 = $("#divMissFortune").html();
              var img1 = $("#divKogMaw").html();
              var img2 = $("#divGraves").html();
              var img3 = $("#divJinx").html();
              var img4 = $("#divTwitch").html();
              var img5 = $("#divKalista").html();
              var img6 = $("#divDraven").html();
              var img7 = $("#divTristana").html();
              var img8 = $("#divAshe").html();
             }
               break;
             case "Mordekaiser":{
              var img0 = $("#divMordekaiser").html();
              var img1 = $("#divGaren").html();
              var img2 = $("#divZyra").html();
              var img3 = $("#divSwain").html();
              var img4 = $("#divCassiopeia").html();
              var img5 = $("#divDiana").html();
              var img6 = $("#divFizz").html();
              var img7 = $("#divAkali").html();
              var img8 = $("#divTalon").html();
             }
               break;
             case "Morgana":{
              var img0 = $("#divMorgana").html();
              var img1 = $("#divSona").html();
              var img2 = $("#divVelKoz").html();
              var img3 = $("#divJhin").html();
              var img4 = $("#divGraves").html();
              var img5 = $("#divLeona").html();
              var img6 = $("#divTahmKench").html();
              var img7 = $("#divAlistar").html();
              var img8 = $("#divAnnie").html();
             }
               break;
             case "Nami":{
              var img0 = $("#divNami").html();
              var img1 = $("#divBlitzcrank").html();
              var img2 = $("#divZilean").html();
              var img3 = $("#divBraum").html();
              var img4 = $("#divTaric").html();
              var img5 = $("#divTahmKench").html();
              var img6 = $("#divLulu").html();
              var img7 = $("#divTrundle").html();
              var img8 = $("#divKalista").html();
             }
               break;
             case "Nasus":{
              var img0 = $("#divNasus").html();
              var img1 = $("#divJax").html();
              var img2 = $("#divYasuo").html();
              var img3 = $("#divVolibear").html();
              var img4 = $("#divDarius").html();
              var img5 = $("#divIllaoi").html();
              var img6 = $("#divChoGath").html();
              var img7 = $("#divVladimir").html();
              var img8 = $("#divDrMundo").html();
             }
               break;
             case "Nautilus":{
              var img0 = $("#divNautilus").html();
              var img1 = $("#divMorgana").html();
              var img2 = $("#divJanna").html();
              var img3 = $("#divNami").html();
              var img4 = $("#divSivir").html();
              var img5 = $("#divKarma").html();
              var img6 = $("#divKalista").html();
              var img7 = $("#divCaitlyn").html();
              var img8 = $("#divAlistar").html();
             }
               break;
             case "Nidalee":{
              var img0 = $("#divNidalee").html();
              var img1 = $("#divKindred").html();
              var img2 = $("#divRengar").html();
              var img3 = $("#divMasterYi").html();
              var img4 = $("#divShaco").html();
              var img5 = $("#divRammus").html();
              var img6 = $("#divAurelionSol").html();
              var img7 = $("#divJarvanIV").html();
              var img8 = $("#divRekSai").html();
             }
               break;
             case "Nocturne":{
              var img0 = $("#divNocturne").html();
              var img1 = $("#divNidalee").html();
              var img2 = $("#divKindred").html();
              var img3 = $("#divGraves").html();
              var img4 = $("#divMasterYi").html();
              var img5 = $("#divSejuani").html();
              var img6 = $("#divRammus").html();
              var img7 = $("#divDiana").html();
              var img8 = $("#divAurelionSol").html();
             }
               break;
             case "Nunu":{
              var img0 = $("#divNunu").html();
              var img1 = $("#divMasterYi").html();
              var img2 = $("#divDiana").html();
              var img3 = $("#divSkarner").html();
              var img4 = $("#divNidalee").html();
              var img5 = $("#divLeeSin").html();
              var img6 = $("#divKhaZix").html();
              var img7 = $("#divVi").html();
              var img8 = $("#divWukong").html();
             }
               break;
             case "Olaf":{
              var img0 = $("#divOlaf").html();
              var img1 = $("#divTrundle").html();
              var img2 = $("#divKayle").html();
              var img3 = $("#divGraves").html();
              var img4 = $("#divIllaoi").html();
              var img5 = $("#divSion").html();
              var img6 = $("#divLulu").html();
              var img7 = $("#divRyze").html();
              var img8 = $("#divFiora").html();
             }
               break;
             case "Orianna":{
              var img0 = $("#divOrianna").html();
              var img1 = $("#divQuinn").html();
              var img2 = $("#divTalon").html();
              var img3 = $("#divVelKoz").html();
              var img4 = $("#divZed").html();
              var img5 = $("#divRyze").html();
              var img6 = $("#divMordekaiser").html();
              var img7 = $("#divAkali").html();
              var img8 = $("#divZyra").html();
             }
               break;
             case "Pantheon":{
              var img0 = $("#divPantheon").html();
              var img1 = $("#divChoGath").html();
              var img2 = $("#divVolibear").html();
              var img3 = $("#divKayle").html();
              var img4 = $("#divGaren").html();
              var img5 = $("#divTeemo").html();
              var img6 = $("#divJax").html();
              var img7 = $("#divFiora").html();
              var img8 = $("#divIrelia").html();
             }
               break;
             case "Poppy":{
              var img0 = $("#divPoppy").html();
              var img1 = $("#divRumble").html();
              var img2 = $("#divAurelionSol").html();
              var img3 = $("#divKayle").html();
              var img4 = $("#divRammus").html();
              var img5 = $("#divIllaoi").html();
              var img6 = $("#divFiora").html();
              var img7 = $("#divGnar").html();
              var img8 = $("#divRiven").html();
             }
               break;
             case "Quinn":{
              var img0 = $("#divQuinn").html();
              var img1 = $("#divSion").html();
              var img2 = $("#divWukong").html();
              var img3 = $("#divMalphite").html();
              var img4 = $("#divRammus").html();
              var img5 = $("#divVladimir").html();
              var img6 = $("#divLissandra").html();
              var img7 = $("#divEkko").html();
              var img8 = $("#divJayce").html();
             }
               break;
             case "Rammus":{
              var img0 = $("#divRammus").html();
              var img1 = $("#divNidalee").html();
              var img2 = $("#divElise").html();
              var img3 = $("#divSejuani").html();
              var img4 = $("#divXinZhao").html();
              var img5 = $("#divJarvanIV").html();
              var img6 = $("#divPoppy").html();
              var img7 = $("#divHecarim").html();
              var img8 = $("#divRengar").html();
             }
               break;
             case "RekSai":{
              var img0 = $("#divRekSai").html();
              var img1 = $("#divNidalee").html();
              var img2 = $("#divXinZhao").html();
              var img3 = $("#divDiana").html();
              var img4 = $("#divEkko").html();
              var img5 = $("#divShaco").html();
              var img6 = $("#divAmumu").html();
              var img7 = $("#divElise").html();
              var img8 = $("#divLeeSin").html();
             }
               break;
             case "Renekton":{
              var img0 = $("#divRenekton").html();
              var img1 = $("#divTeemo").html();
              var img2 = $("#divKayle").html();
              var img3 = $("#divRammus").html();
              var img4 = $("#divQuinn").html();
              var img5 = $("#divIllaoi").html();
              var img6 = $("#divVladimir").html();
              var img7 = $("#divLissandra").html();
              var img8 = $("#divAkali").html();
             }
               break;
             case "Rengar":{
              var img0 = $("#divRengar").html();
              var img1 = $("#divXinZhao").html();
              var img2 = $("#divKhaZix").html();
              var img3 = $("#divMasterYi").html();
              var img4 = $("#divShyvana").html();
              var img5 = $("#divFizz").html();
              var img6 = $("#divHecarim").html();
              var img7 = $("#divPantheon").html();
              var img8 = $("#divFiddlesticks").html();
             }
               break;
             case "Riven":{
              var img0 = $("#divRiven").html();
              var img1 = $("#divGraves").html();
              var img2 = $("#divVolibear").html();
              var img3 = $("#divRenekton").html();
              var img4 = $("#divPoppy").html();
              var img5 = $("#divDarius").html();
              var img6 = $("#divHecarim").html();
              var img7 = $("#divLulu").html();
              var img8 = $("#divVladimir").html();
             }
               break;
             case "Rumble":{
              var img0 = $("#divRumble").html();
              var img1 = $("#divGraves").html();
              var img2 = $("#divNautilus").html();
              var img3 = $("#divNasus").html();
              var img4 = $("#divMalphite").html();
              var img5 = $("#divPoppy").html();
              var img6 = $("#divVladimir").html();
              var img7 = $("#divShen").html();
              var img8 = $("#divYorick").html();
             }
               break;
             case "Ryze":{
              var img0 = $("#divRyze").html();
              var img1 = $("#divIrelia").html();
              var img2 = $("#divChoGath").html();
              var img3 = $("#divRenekton").html();
              var img4 = $("#divFiora").html();
              var img5 = $("#divRiven").html();
              var img6 = $("#divPantheon").html();
              var img7 = $("#divDarius").html();
              var img8 = $("#divMalphite").html();
             }
               break;
             case "Sejuani":{
              var img0 = $("#divSejuani").html();
              var img1 = $("#divShyvana").html();
              var img2 = $("#divKindred").html();
              var img3 = $("#divTrundle").html();
              var img4 = $("#divNocturne").html();
              var img5 = $("#divRammus").html();
              var img6 = $("#divAurelionSol").html();
              var img7 = $("#divFizz").html();
              var img8 = $("#divRekSai").html();
             }
               break;
             case "Shaco":{
              var img0 = $("#divShaco").html();
              var img1 = $("#divSkarner").html();
              var img2 = $("#divRekSai").html();
              var img3 = $("#divDiana").html();
              var img4 = $("#divRengar").html();
              var img5 = $("#divMaokai").html();
              var img6 = $("#divElise").html();
              var img7 = $("#divHecarim").html();
              var img8 = $("#divTrundle").html();
             }
               break;
             case "Shen":{
              var img0 = $("#divShen").html();
              var img1 = $("#divGnar").html();
              var img2 = $("#divTryndamere").html();
              var img3 = $("#divEkko").html();
              var img4 = $("#divVolibear").html();
              var img5 = $("#divTahmKench").html();
              var img6 = $("#divIllaoi").html();
              var img7 = $("#divNasus").html();
              var img8 = $("#divMalphite").html();
             }
               break;
             case "Shyvana":{
              var img0 = $("#divShyvana").html();
              var img1 = $("#divKindred").html();
              var img2 = $("#divPantheon").html();
              var img3 = $("#divJax").html();
              var img4 = $("#divChoGath").html();
              var img5 = $("#divWukong").html();
              var img6 = $("#divSejuani").html();
              var img7 = $("#divPoppy").html();
              var img8 = $("#divJarvanIV").html();
             }
               break;
             case "Singed":{
              var img0 = $("#divSinged").html();
              var img1 = $("#divDarius").html();
              var img2 = $("#divGnar").html();
              var img3 = $("#divGraves").html();
              var img4 = $("#divFiora").html();
              var img5 = $("#divRammus").html();
              var img6 = $("#divGangplank").html();
              var img7 = $("#divMalphite").html();
              var img8 = $("#divGaren").html();
             }
               break;
             case "Sion":{
              var img0 = $("#divSion").html();
              var img1 = $("#divYasuo").html();
              var img2 = $("#divGraves").html();
              var img3 = $("#divOlaf").html();
              var img4 = $("#divMaokai").html();
              var img5 = $("#divIllaoi").html();
              var img6 = $("#divTeemo").html();
              var img7 = $("#divQuinn").html();
              var img8 = $("#divMalphite").html();
             }
               break;
             case "Sivir":{
              var img0 = $("#divSivir").html();
              var img1 = $("#divTwitch").html();
              var img2 = $("#divQuinn").html();
              var img3 = $("#divKogMaw").html();
              var img4 = $("#divSoraka").html();
              var img5 = $("#divVarus").html();
              var img6 = $("#divTristana").html();
              var img7 = $("#divDraven").html();
              var img8 = $("#divKalista").html();
             }
               break;
             case "Skarner":{
              var img0 = $("#divSkarner").html();
              var img1 = $("#divUdyr").html();
              var img2 = $("#divEkko").html();
              var img3 = $("#divMasterYi").html();
              var img4 = $("#divSejuani").html();
              var img5 = $("#divZac").html();
              var img6 = $("#divShaco").html();
              var img7 = $("#divRengar").html();
              var img8 = $("#divLeeSin").html();
             }
               break;
             case "Sona":{
              var img0 = $("#divSona").html();
              var img1 = $("#divBlitzcrank").html();
              var img2 = $("#divNami").html();
              var img3 = $("#divJhin").html();
              var img4 = $("#divJinx").html();
              var img5 = $("#divBard").html();
              var img6 = $("#divPoppy").html();
              var img7 = $("#divTaric").html();
              var img8 = $("#divLulu").html();
             }
               break;
             case "Soraka":{
              var img0 = $("#divSoraka").html();
              var img1 = $("#divBlitzcrank").html();
              var img2 = $("#divNami").html();
              var img3 = $("#divLeona").html();
              var img4 = $("#divKogMaw").html();
              var img5 = $("#divTaric").html();
              var img6 = $("#divAnnie").html();
              var img7 = $("#divPoppy").html();
              var img8 = $("#divCorki").html();
             }
               break;
             case "Swain":{
              var img0 = $("#divSwain").html();
              var img1 = $("#divKatarina").html();
              var img2 = $("#divLux").html();
              var img3 = $("#divCorki").html();
              var img4 = $("#divDiana").html();
              var img5 = $("#divYasuo").html();
              var img6 = $("#divTwistedFate").html();
              var img7 = $("#divAnnie").html();
              var img8 = $("#divAzir").html();
             }
               break;
             case "Syndra":{
              var img0 = $("#divSyndra").html();
              var img1 = $("#divXerath").html();
              var img2 = $("#divZed").html();
              var img3 = $("#divKatarina").html();
              var img4 = $("#divLux").html();
              var img5 = $("#divViktor").html();
              var img6 = $("#divLissandra").html();
              var img7 = $("#divAurelionSol").html();
              var img8 = $("#divKassadin").html();
             }
               break;
             case "TahmKench":{
              var img0 = $("#divTahmKench").html();
              var img1 = $("#divNami").html();
              var img2 = $("#divSona").html();
              var img3 = $("#divSivir").html();
              var img4 = $("#divJhin").html();
              var img5 = $("#divTaric").html();
              var img6 = $("#divLulu").html();
              var img7 = $("#divAshe").html();
              var img8 = $("#divKalista").html();
             }
               break;
             case "Talon":{
              var img0 = $("#divTalon").html();
              var img1 = $("#divAnivia").html();
              var img2 = $("#divZed").html();
              var img3 = $("#divKatarina").html();
              var img4 = $("#divLulu").html();
              var img5 = $("#divKassadin").html();
              var img6 = $("#divOrianna").html();
              var img7 = $("#divTwistedFate").html();
              var img8 = $("#divAurelionSol").html();
             }
               break;
             case "Taric":{
              var img0 = $("#divTaric").html();
              var img1 = $("#divSona").html();
              var img2 = $("#divSoraka").html();
              var img3 = $("#divKogMaw").html();
              var img4 = $("#divCorki").html();
              var img5 = $("#divAlistar").html();
              var img6 = $("#divLulu").html();
              var img7 = $("#divTristana").html();
              var img8 = $("#divGraves").html();
             }
               break;
             case "Teemo":{
              var img0 = $("#divTeemo").html();
              var img1 = $("#divPantheon").html();
              var img2 = $("#divIrelia").html();
              var img3 = $("#divQuinn").html();
              var img4 = $("#divYasuo").html();
              var img5 = $("#divRenekton").html();
              var img6 = $("#divMaokai").html();
              var img7 = $("#divGaren").html();
              var img8 = $("#divTryndamere").html();
             }
               break;
             case "Thresh":{
              var img0 = $("#divThresh").html();
              var img1 = $("#divSona").html();
              var img2 = $("#divMorgana").html();
              var img3 = $("#divJhin").html();
              var img4 = $("#divSivir").html();
              var img5 = $("#divNunu").html();
              var img6 = $("#divVelKoz").html();
              var img7 = $("#divAnnie").html();
              var img8 = $("#divKalista").html();
             }
               break;
             case "Tristana":{
              var img0 = $("#divTristana").html();
              var img1 = $("#divKogMaw").html();
              var img2 = $("#divSivir").html();
              var img3 = $("#divAshe").html();
              var img4 = $("#divJhin").html();
              var img5 = $("#divKalista").html();
              var img6 = $("#divQuinn").html();
              var img7 = $("#divTrundle").html();
              var img8 = $("#divAnnie").html();
             }
               break;
             case "Trundle":{
              var img0 = $("#divTrundle").html();
              var img1 = $("#divRiven").html();
              var img2 = $("#divLissandra").html();
              var img3 = $("#divKayle").html();
              var img4 = $("#divAatrox").html();
              var img5 = $("#divIllaoi").html();
              var img6 = $("#divOlaf").html();
              var img7 = $("#divDrMundo").html();
              var img8 = $("#divMaokai").html();
             }
               break;
             case "Tryndamere":{
              var img0 = $("#divTryndamere").html();
              var img1 = $("#divTeemo").html();
              var img2 = $("#divQuinn").html();
              var img3 = $("#divPoppy").html();
              var img4 = $("#divPantheon").html();
              var img5 = $("#divChoGath").html();
              var img6 = $("#divGangplank").html();
              var img7 = $("#divShen").html();
              var img8 = $("#divOlaf").html();
             }
               break;
             case "TwistedFate":{
              var img0 = $("#divTwistedFate").html();
              var img1 = $("#divQuinn").html();
              var img2 = $("#divZed").html();
              var img3 = $("#divFizz").html();
              var img4 = $("#divTalon").html();
              var img5 = $("#divChoGath").html();
              var img6 = $("#divVladimir").html();
              var img7 = $("#divLissandra").html();
              var img8 = $("#divOrianna").html();
             }
               break;
             case "Twitch":{
              var img0 = $("#divTwitch").html();
              var img1 = $("#divCorki").html();
              var img2 = $("#divKogMaw").html();
              var img3 = $("#divGraves").html();
              var img4 = $("#divSona").html();
              var img5 = $("#divKalista").html();
              var img6 = $("#divDraven").html();
              var img7 = $("#divVarus").html();
              var img8 = $("#divJinx").html();
             }
               break;
             case "Udyr":{
              var img0 = $("#divUdyr").html();
              var img1 = $("#divTrundle").html();
              var img2 = $("#divWarwick").html();
              var img3 = $("#divVolibear").html();
              var img4 = $("#divAmumu").html();
              var img5 = $("#divPoppy").html();
              var img6 = $("#divZac").html();
              var img7 = $("#divFizz").html();
              var img8 = $("#divJarvanIV").html();
             }
               break;
             case "Urgot":{
              var img0 = $("#divUrgot").html();
              var img1 = $("#divYasuo").html();
              var img2 = $("#divVladimir").html();
              var img3 = $("#divQuinn").html();
              var img4 = $("#divVolibear").html();
              var img5 = $("#divIllaoi").html();
              var img6 = $("#divJarvanIV").html();
              var img7 = $("#divRengar").html();
              var img8 = $("#divNautilus").html();
             }
               break;
             case "Varus":{
              var img0 = $("#divVarus").html();
              var img1 = $("#divAshe").html();
              var img2 = $("#divTwitch").html();
              var img3 = $("#divKogMaw").html();
              var img4 = $("#divJinx").html();
              var img5 = $("#divVayne").html();
              var img6 = $("#divKalista").html();
              var img7 = $("#divCaitlyn").html();
              var img8 = $("#divCorki").html();
             }
               break;
             case "Vayne":{
              var img0 = $("#divVayne").html();
              var img1 = $("#divKogMaw").html();
              var img2 = $("#divVarus").html();
              var img3 = $("#divAshe").html();
              var img4 = $("#divTwitch").html();
              var img5 = $("#divKalista").html();
              var img6 = $("#divTristana").html();
              var img7 = $("#divCaitlyn").html();
              var img8 = $("#divLucian").html();
             }
               break;
             case "Veigar":{
              var img0 = $("#divVeigar").html();
              var img1 = $("#divZed").html();
              var img2 = $("#divAnivia").html();
              var img3 = $("#divFizz").html();
              var img4 = $("#divKatarina").html();
              var img5 = $("#divEkko").html();
              var img6 = $("#divLulu").html();
              var img7 = $("#divAurelionSol").html();
              var img8 = $("#divLeblanc").html();
             }
               break;
             case "VelKoz":{
              var img0 = $("#divVelKoz").html();
              var img1 = $("#divKatarina").html();
              var img2 = $("#divFizz").html();
              var img3 = $("#divCorki").html();
              var img4 = $("#divEkko").html();
              var img5 = $("#divViktor").html();
              var img6 = $("#divAzir").html();
              var img7 = $("#divOrianna").html();
              var img8 = $("#divZiggs").html();
             }
               break;
             case "Vi":{
              var img0 = $("#divVi").html();
              var img1 = $("#divKindred").html();
              var img2 = $("#divDiana").html();
              var img3 = $("#divMasterYi").html();
              var img4 = $("#divXinZhao").html();
              var img5 = $("#divPantheon").html();
              var img6 = $("#divWarwick").html();
              var img7 = $("#divRammus").html();
              var img8 = $("#divRekSai").html();
             }
               break;
             case "Viktor":{
              var img0 = $("#divViktor").html();
              var img1 = $("#divZed").html();
              var img2 = $("#divVelKoz").html();
              var img3 = $("#divSyndra").html();
              var img4 = $("#divCorki").html();
              var img5 = $("#divYasuo").html();
              var img6 = $("#divLulu").html();
              var img7 = $("#divTalon").html();
              var img8 = $("#divMalzahar").html();
             }
               break;
             case "Vladimir":{
              var img0 = $("#divVladimir").html();
              var img1 = $("#divQuinn").html();
              var img2 = $("#divGraves").html();
              var img3 = $("#divVolibear").html();
              var img4 = $("#divIrelia").html();
              var img5 = $("#divTeemo").html();
              var img6 = $("#divMalphite").html();
              var img7 = $("#divChoGath").html();
              var img8 = $("#divNautilus").html();
             }
               break;
             case "Volibear":{
              var img0 = $("#divVolibear").html();
              var img1 = $("#divGraves").html();
              var img2 = $("#divFiddlesticks").html();
              var img3 = $("#divSkarner").html();
              var img4 = $("#divShaco").html();
              var img5 = $("#divHecarim").html();
              var img6 = $("#divZac").html();
              var img7 = $("#divRammus").html();
              var img8 = $("#divAurelionSol").html();
             }
               break;
             case "Warwick":{
              var img0 = $("#divWarwick").html();
              var img1 = $("#divTrundle").html();
              var img2 = $("#divVi").html();
              var img3 = $("#divRekSai").html();
              var img4 = $("#divXinZhao").html();
              var img5 = $("#divOlaf").html();
              var img6 = $("#divSion").html();
              var img7 = $("#divQuinn").html();
              var img8 = $("#divFizz").html();
             }
               break;
             case "WuKong":{
              var img0 = $("#divWukong").html();
              var img1 = $("#divShyvana").html();
              var img2 = $("#divMasterYi").html();
              var img3 = $("#divDiana").html();
              var img4 = $("#divEvelynn").html();
              var img5 = $("#divElise").html();
              var img6 = $("#divNocturne").html();
              var img7 = $("#divZac").html();
              var img8 = $("#divLeeSin").html();
             }
               break;
             case "Xerath":{
              var img0 = $("#divXerath").html();
              var img1 = $("#divZed").html();
              var img2 = $("#divFizz").html();
              var img3 = $("#divDiana").html();
              var img4 = $("#divKatarina").html();
              var img5 = $("#divSyndra").html();
              var img6 = $("#divAnivia").html();
              var img7 = $("#divLux").html();
              var img8 = $("#divAzir").html();
             }
               break;
             case "XinZhao":{
              var img0 = $("#divXinZhao").html();
              var img1 = $("#divAatrox").html();
              var img2 = $("#divQuinn").html();
              var img3 = $("#divKindred").html();
              var img4 = $("#divUdyr").html();
              var img5 = $("#divDrMundo").html();
              var img6 = $("#divZac").html();
              var img7 = $("#divEvelynn").html();
              var img8 = $("#divRumble").html();
             }
               break;
             case "Yasuo":{
              var img0 = $("#divYasuo").html();
              var img1 = $("#divAnnie").html();
              var img2 = $("#divKennen").html();
              var img3 = $("#divSwain").html();
              var img4 = $("#divViktor").html();
              var img5 = $("#divGalio").html();
              var img6 = $("#divZilean").html();
              var img7 = $("#divVarus").html();
              var img8 = $("#divTwistedFate").html();
             }
               break;
             case "Yorick":{
              var img0 = $("#divYorick").html();
              var img1 = $("#divRengar").html();
              var img2 = $("#divQuinn").html();
              var img3 = $("#divYasuo").html();
              var img4 = $("#divGangplank").html();
              var img5 = $("#divVladimir").html();
              var img6 = $("#divAkali").html();
              var img7 = $("#divJayce").html();
              var img8 = $("#divIllaoi").html();
             }
               break;
             case "Zac":{
              var img0 = $("#divZac").html();
              var img1 = $("#divXinZhao").html();
              var img2 = $("#divKindred").html();
              var img3 = $("#divHecarim").html();
              var img4 = $("#divSkarner").html();
              var img5 = $("#divShaco").html();
              var img6 = $("#divAurelionSol").html();
              var img7 = $("#divFiddlesticks").html();
              var img8 = $("#divSejuani").html();
             }
               break;
             case "Zed":{
              var img0 = $("#divZed").html();
              var img1 = $("#divChoGath").html();
              var img2 = $("#divKennen").html();
              var img3 = $("#divKayle").html();
              var img4 = $("#divAkali").html();
              var img5 = $("#divVeigar").html();
              var img6 = $("#divKassadin").html();
              var img7 = $("#divViktor").html();
              var img8 = $("#divSyndra").html();
             }
               break;
             case "Ziggs":{
              var img0 = $("#divZiggs").html();
              var img1 = $("#divZed").html();
              var img2 = $("#divDiana").html();
              var img3 = $("#divLeblanc").html();
              var img4 = $("#divKatarina").html();
              var img5 = $("#divAzir").html();
              var img6 = $("#divAnnie").html();
              var img7 = $("#divOrianna").html();
              var img8 = $("#divViktor").html();
             }
               break;
             case "Zilean":{
              var img0 = $("#divZilean").html();
              var img1 = $("#divSona").html();
              var img2 = $("#divSoraka").html();
              var img3 = $("#divJanna").html();
              var img4 = $("#divJhin").html();
              var img5 = $("#divBraum").html();
              var img6 = $("#divThresh").html();
              var img7 = $("#divLulu").html();
              var img8 = $("#divJinx").html();
             }
               break;
             case "Zyra":{
              var img0 = $("#divZyra").html();
              var img1 = $("#divNami").html();
              var img2 = $("#divSona").html();
              var img3 = $("#divSoraka").html();
              var img4 = $("#divJhin").html();
              var img5 = $("#divBraum").html();
              var img6 = $("#divTahmKench").html();
              var img7 = $("#divBrand").html();
              var img8 = $("#divLulu").html();
             }
               break;
             default:

           }

           img0 = img0.split(" ").join("}{");
           img0 = img0.split("<").join("./");
           img0 = img0.split(">").join("/.");
           img0 = img0.split('"').join("[]");

           img1 = img1.split(" ").join("}{");
           img1 = img1.split("<").join("./");
           img1 = img1.split(">").join("/.");
           img1 = img1.split('"').join("[]");

           img2 = img2.split(" ").join("}{");
           img2 = img2.split("<").join("./");
           img2 = img2.split(">").join("/.");
           img2 = img2.split('"').join("[]");

           img3 = img3.split(" ").join("}{");
           img3 = img3.split("<").join("./");
           img3 = img3.split(">").join("/.");
           img3 = img3.split('"').join("[]");

           img4 = img4.split(" ").join("}{");
           img4 = img4.split("<").join("./");
           img4 = img4.split(">").join("/.");
           img4 = img4.split('"').join("[]");

           img5 = img5.split(" ").join("}{");
           img5 = img5.split("<").join("./");
           img5 = img5.split(">").join("/.");
           img5 = img5.split('"').join("[]");

           img6 = img6.split(" ").join("}{");
           img6 = img6.split("<").join("./");
           img6 = img6.split(">").join("/.");
           img6 = img6.split('"').join("[]");

           img7 = img7.split(" ").join("}{");
           img7 = img7.split("<").join("./");
           img7 = img7.split(">").join("/.");
           img7 = img7.split('"').join("[]");

           img8 = img8.split(" ").join("}{");
           img8 = img8.split("<").join("./");
           img8 = img8.split(">").join("/.");
           img8 = img8.split('"').join("[]");

//            Concatena os nomes e o endereço da pagina
           var novaURL = "resultcounter.html?"+img0+"_"+img1+"_"+img2+"_"+img3+"_"+img4+"_"+img5+"_"+img6+"_"+img7+"_"+img8;
//            executa URL concatenada
           $(window.document.location).attr('href',novaURL);

         });
    
});
