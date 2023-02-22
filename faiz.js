function krediHesapla(){
    var anapara;
    var vadesayisi;
    var ayliktaksit,odenecektoplamtutar;

    anapara=document.getElementById("kreditutar").value;
    liste=document.getElementById("listevade");
    vadesayisi=liste.options[liste.selectedIndex].value;
    if(vadesayisi==12){
        odenecektoplamtutar=anapara*1.1
    }
    else if(vadesayisi==24){
        odenecektoplamtutar=anapara*1.2
    }
    else if(vadesayisi==36){
        odenecektoplamtutar=anapara*1.3
    }
    else if(vadesayisi==48){
        odenecektoplamtutar=anapara*1.4
    }

    
    ayliktaksit=odenecektoplamtutar/vadesayisi;
    document.querySelector("#sonuc").innerHTML="Geri ödeme toplam tutar: "+odenecektoplamtutar+"<br>"+"Aylik ödenecek toplam miktar: "+ayliktaksit;
}