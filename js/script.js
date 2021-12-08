let selectProcessor = document.querySelector('.select-processor');
let selectMother = document.querySelector('.select-mother');
let selectRAM = document.querySelector('.select-RAM');
let selectKorpus = document.querySelector('.select-korpus');
let selectBlock = document.querySelector('.select-block');
let selectVideoDriver = document.querySelector('.select-videoDriver');
let selectSsd = document.querySelector('.select-ssd');
let selectOC = document.querySelector('.select-OC');
let selectAntivirys = document.querySelector('.select-antivirys');
let itog = document.querySelector('.classs');
let button = document.querySelector('.button');
let price = 0;
let buttonClear = document.querySelector('.buttonClear');

selectProcessor.onchange = function () {
    if (selectProcessor.value == "Intel Core i5-10400")
    {
        price += 18500;
    }
    else if (selectProcessor.value == "Intel Core i5-10500")
    {
        price += 20400;
    }
    else
    {
        price += 21200;
    }
}
selectMother.onchange = function () {
    if (selectMother == "Gigabyte B550")
    {
        price += 23450;
    }
    else if (selectMother == "Asus Prime A520M")
    {
        price += 34500;
    }
    else
    {
        price += 65400;
    }
}
selectRAM.onchange = function () {
    if (selectRAM == "DDR4 4Gb 3200MHz")
    {
        price += 5034;
    }
    else if (selectRAM == "DDR4 8Gb 3200MHz")
    {
        price += 6345;
    }
    else
    {
        price += 9875;
    }
}
selectKorpus.onchange = function () {
    if (selectKorpus == "Thermaltake V200 RGB 120mm")
    {
        price += 10000;
    }
    else if (selectKorpus == "Power 200W LC-1402MI")
    {
        price += 5700;
    }
    else
    {
        price += 3755;
    }
}
selectBlock.onchange = function () {
    if (selectBlock == "Thermaltake ATX 630W")
    {
        price += 5000;
    }
    else if (selectBlock == "Gigabyte GP 1000W")
    {
        price += 7000;
    }
    else
    {
        price += 8500;
    }
}
selectVideoDriver.onchange = function () {
    if (selectVideoDriver == "Gigabyte Radeon RX 6600XT")
    {
        price += 150000;
    }
    else if (selectVideoDriver == "Gigabyte GeForce RTX 3070 Ti")
    {
        price += 170000;
    }
    else
    {
        price += 50000;
    }
}
selectSsd.onchange = function () {
    if (selectSsd == "SSD M.2 250Gb")
    {
        price += 5000;
    }
    else if (selectSsd == "SSD M.2 2Tb")
    {
        price += 10000;
    }
    else
    {
        price += 2500;
    }
}
selectOC.onchange = function () {
    if (selectOC == "Windows 10 Pro 32/64-bit")
    {
        price += 10000;
    }
    else if (selectOC == "Windows 10 Home 32/64-bit")
    {
        price += 18500;
    }
    else
    {
        price += 30450;
    }
}
selectAntivirys.onchange = function () {
    if (selectAntivirys == "Dr. Web Security Space")
    {
        price += 1230;
    }
    else if (selectAntivirys == "Eset NOD32")
    {
        price += 2500;
    }
    else
    {
        price += 1750;
    }
}
button.onclick = function () {
    itog.value = price + "₽";
}
buttonClear.onclick = function () {
    selectProcessor.value = "q";
    selectMother.value = 'w';
    selectRAM.value = 'e';
    selectKorpus.value = 'r';
    selectBlock.value = 't';
    selectVideoDriver.value = 'y';
    selectSsd.value = 'u';
    selectOC.value = 'i';
    selectAntivirys.value = 'o';
    itog.value = '';
    price = 0;
}