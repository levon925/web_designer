/*jshint esversion: 6 */

const mura = document.querySelector('.mura_description'),
      nestle = document.querySelector('.nestle_description'),
      eltrendy = document.querySelector('.eltrendy_description'),
      aston = document.querySelector('.aston_description'),
      skyNews = document.querySelector('.sky_news_description'),
      goldory = document.querySelector('.goldory_description'),
      hideButtons = document.querySelectorAll('.project_hide'),
      muraImage = document.querySelector('.mura_image'),
      nestleImage = document.querySelector('.nestle_image'),
      eltrendyImage = document.querySelector('.eltrendy_image'),
      astonImage = document.querySelector('.aston_image'),
      skyNewsImage = document.querySelector('.sky_news_image'),
      goldoryImage = document.querySelector('.goldory_image');


    

//console.log(width);

changeText();
window.onresize = changeText;


//hideButtons[1].remove();

function changeText() {
    const width = document.body.clientWidth;
    console.log(width);
    mura.setAttribute('style', 'white-space: pre;');
    nestle.setAttribute('style', 'white-space: pre;');
    eltrendy.setAttribute('style', 'white-space: pre;');
    aston.setAttribute('style', 'white-space: pre;');
    skyNews.setAttribute('style', 'white-space: pre;');
    goldory.setAttribute('style', 'white-space: pre;');
    
    if(width < 1583 && width >= 983){
        removeProjectButtons();
        mura.textContent = 'This project is a redesign of Mura boutique \r\nwebsite.  Mura is a female fashion boutique that \r\nstarted in 2011 by founder Asako Nakamura in \r\nNoosa, Australia. ';
        nestle.textContent = "Nestlé's products include baby food, medical \r\nfood, bottled water, breakfast cereals, coffee and \r\ntea, confectionery, dairy products, ice cream, \r\nfrozen food, pet foods, and snacks.";
        eltrendy.textContent = 'ElTrendy.store is an online store that contains the \r\nmost popular brands for harmony and beauty. \r\nElTrendy is one of the top 10 most famous studios \r\nin Russia.';
        aston.textContent = 'Aston Martin is the iconic British sport car brand \r\nthat has stood for beautiful, hand-crafted cars that \r\nare exhilarating to drive since 1913. This project is \r\na redesign of official Aston Martin website. ';
        skyNews.textContent = "Sky News is a British free-to-air television news \r\nchannel and organisation which started \r\nbroadcasting since February 1989, becoming the \r\nUK's first round-the-clock news channel. ";
        goldory.textContent = 'Goldory is a website concept made for a real \r\nestate company based in Moscow. The Goldory \r\nLuxury House has bright and spacious rooms, \r\nhight ceilings and geometric facade elements.';

        imageChange(1000);
 
    } else if(width < 983 && width >= 623) {
        removeProjectButtons();
        imageChange(640);

        mura.textContent ="This project is a redesign of Mura boutique \r\nwebsite. Mura offers beautiful clothing, \r\nshoes and accessories.";
        nestle.textContent ="Nestlé is a Swiss multinational food and \r\ndrink processing conglomerate \r\ncorporation. This project is a redesign of \r\nofficial Nestlé website.";
        eltrendy.textContent ="ElTrendy.store is an online store that \r\ncontains the most popular brands for \r\nharmony and beauty. ElTrendy is one of the \r\ntop 10 most famous studios in Russia.";
        aston.textContent ="This project is a redesign of official Aston \r\nMartin website. The main goal was to \r\nimprove UI and UX parts bringing Aston \r\nMartin spirit.";
        skyNews.textContent ="Sky News is a British free-to-air television \r\nnews channel and organisation which \r\nstarted broadcasting since February 1989, \r\nbecoming the UK's first round-the-clock \r\nnews channel. ";
        goldory.textContent ="Goldory is a website concept made for a \r\nreal estate company. The Goldory Luxury \r\nHouse has bright and spacious rooms, \r\nhight ceilings and geometric facade \r\nelements.";
    } else if(width < 623 && width >= 0) {

    }
    else {
        imageChange(1600);
        addProjectButtons();
        mura.textContent = 'This project is a redesign of Mura boutique website. \r\nMura is a female fashion boutique that started in 2011 by founder Asako \r\nNakamura in Noosa, Australia. Mura offers beautiful clothing, shoes and \r\naccessories.';
        nestle.textContent = "Nestlé is a Swiss multinational food and drink processing conglomerate \r\ncorporation. Nestlé's products include baby food, medical food, bottled water, \r\nbreakfast cereals, coffee and tea, confectionery, dairy products, ice cream, \r\nfrozen food, pet foods, and snacks.";
        eltrendy.textContent = 'ElTrendy.store is an online store that contains the most popular brands \r\nfor harmony and beauty. ElTrendy is one of the top 10 most famous \r\nstudios in Russia.';
        aston.textContent = 'Aston Martin is the iconic British sport car brand that has stood for beautiful, \r\nhand-crafted cars that are exhilarating to drive since 1913. This project is a \r\nredesign of official Aston Martin website. The main goal was to improve UI and \r\nUX parts bringing Aston Martin spirit.';
        skyNews.textContent = "Sky News is a British free-to-air television news channel and organisation which \r\nstarted broadcasting since February 1989, becoming the UK's first round-the-\r\nclock news channel. The audience is estimated at 150 million people worldwide.";
        goldory.textContent = 'Goldory is a website concept made for a real estate company based in Moscow. \r\nThe Goldory Luxury House has bright and spacious rooms, hight ceilings and \r\ngeometric facade elements.';
    }
}
function imageChange(x){
    muraImage.src='img/projects/'+x+'/mura.png';
    nestleImage.src='img/projects/'+x+'/nestle.png';
    eltrendyImage.src='img/projects/'+x+'/eltrendy.png';
    astonImage.src='img/projects/'+x+'/aston.png';
    skyNewsImage.src='img/projects/'+x+'/sky_news.png';
    goldoryImage.src='img/projects/'+x+'/goldory.png';
}

function removeProjectButtons(){
    for(i=0;i<6;i++){
        //hideButtons[i].remove();
        hideButtons[i].classList.add('dn');
        hideButtons[i].classList.remove('project_button');
    }
}
function addProjectButtons(){
    
    for(i=0;i<6;i++){
        //hideButtons[i].remove();
        if(hideButtons[i].classList.contains('dn')){
            hideButtons[i].classList.remove('dn');
            hideButtons[i].classList.add('project_button');
        } 

    }
}




