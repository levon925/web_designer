/*jshint esversion: 6 */

const headerIcons = document.querySelector('.header_icons'),
      about = document.querySelector('.about'),
      concept = document.querySelector('.concept');


    

//console.log(width);

changeText();
window.onresize = changeText;


//hideButtons[1].remove();

function changeText() {
    const width = document.body.clientWidth;
    console.log(width);
    const mura = document.querySelector('.mura_description'),
    nestle = document.querySelector('.nestle_description'),
    eltrendy = document.querySelector('.eltrendy_description'),
    aston = document.querySelector('.aston_description'),
    skyNews = document.querySelector('.sky_news_description'),
    goldory = document.querySelector('.goldory_description');
    mura.setAttribute('style', 'white-space: pre;');
    nestle.setAttribute('style', 'white-space: pre;');
    eltrendy.setAttribute('style', 'white-space: pre;');
    aston.setAttribute('style', 'white-space: pre;');
    skyNews.setAttribute('style', 'white-space: pre;');
    goldory.setAttribute('style', 'white-space: pre;');
    headerIcons.innerHTML= "<img class='social' src='img/header/behance.svg' alt='behance'><img class='social_down' src='img/header/instagram.svg' alt='instagram'><img class='social' src='/img/header/facebook.svg' alt='facebook'>";
        concept.textContent = "first concept ";
    if(width < 1583 && width >= 983){
        resetProjectList();
        removeProjectButtons();
        const mura = document.querySelector('.mura_description'),
        nestle = document.querySelector('.nestle_description'),
        eltrendy = document.querySelector('.eltrendy_description'),
        aston = document.querySelector('.aston_description'),
        skyNews = document.querySelector('.sky_news_description'),
        goldory = document.querySelector('.goldory_description');
        mura.textContent = 'This project is a redesign of Mura boutique \r\nwebsite.  Mura is a female fashion boutique that \r\nstarted in 2011 by founder Asako Nakamura in \r\nNoosa, Australia. ';
        nestle.textContent = "Nestlé's products include baby food, medical \r\nfood, bottled water, breakfast cereals, coffee and \r\ntea, confectionery, dairy products, ice cream, \r\nfrozen food, pet foods, and snacks.";
        eltrendy.textContent = 'ElTrendy.store is an online store that contains the \r\nmost popular brands for harmony and beauty. \r\nElTrendy is one of the top 10 most famous studios \r\nin Russia.';
        aston.textContent = 'Aston Martin is the iconic British sport car brand \r\nthat has stood for beautiful, hand-crafted cars that \r\nare exhilarating to drive since 1913. This project is \r\na redesign of official Aston Martin website. ';
        skyNews.textContent = "Sky News is a British free-to-air television news \r\nchannel and organisation which started \r\nbroadcasting since February 1989, becoming the \r\nUK's first round-the-clock news channel. ";
        goldory.textContent = 'Goldory is a website concept made for a real \r\nestate company based in Moscow. The Goldory \r\nLuxury House has bright and spacious rooms, \r\nhight ceilings and geometric facade elements.';
        headerIcons.innerHTML= "<img class='social' src='img/header/behance.svg' alt='behance'><img class='social_down' src='img/header/instagram.svg' alt='instagram'><img class='social' src='/img/header/facebook.svg' alt='facebook'>";
        concept.textContent = "first concept ";
        imageChange(1000);
 
    } else if(width < 983 && width >= 623) {
        resetProjectList();
        removeProjectButtons();
        imageChange(640);
        const mura = document.querySelector('.mura_description'),
        nestle = document.querySelector('.nestle_description'),
        eltrendy = document.querySelector('.eltrendy_description'),
        aston = document.querySelector('.aston_description'),
        skyNews = document.querySelector('.sky_news_description'),
        goldory = document.querySelector('.goldory_description');
        mura.textContent ="This project is a redesign of Mura boutique \r\nwebsite. Mura offers beautiful clothing, \r\nshoes and accessories.";
        nestle.textContent ="Nestlé is a Swiss multinational food and \r\ndrink processing conglomerate \r\ncorporation. This project is a redesign of \r\nofficial Nestlé website.";
        eltrendy.textContent ="ElTrendy.store is an online store that \r\ncontains the most popular brands for \r\nharmony and beauty. ElTrendy is one of the \r\ntop 10 most famous studios in Russia.";
        aston.textContent ="This project is a redesign of official Aston \r\nMartin website. The main goal was to \r\nimprove UI and UX parts bringing Aston \r\nMartin spirit.";
        skyNews.textContent ="Sky News is a British free-to-air television \r\nnews channel and organisation which \r\nstarted broadcasting since February 1989, \r\nbecoming the UK's first round-the-clock \r\nnews channel. ";
        goldory.textContent ="Goldory is a website concept made for a \r\nreal estate company. The Goldory Luxury \r\nHouse has bright and spacious rooms, \r\nhight ceilings and geometric facade \r\nelements.";
        headerIcons.innerHTML= "<img class='social' src='img/header/behance.svg' alt='behance'><img class='social_down' src='img/header/instagram.svg' alt='instagram'><img class='social' src='/img/header/facebook.svg' alt='facebook'>";
        concept.textContent = "first concept ";
    } else if(width < 623 && width >= 0) {
        
        imageChange(320);
        removeProjectButtons();
        const projects = [`<div class="project">
        <div class="project_content">
            <div class="project_buttons">
                <div class="project_button">online store</div>
                <div class="project_button project_hide">fashion</div>
                <div class="project_button">redesign</div>
            </div>
            <img class="project_image mura_image" src="img/projects/320/mura.png" alt="">
            <div class="project_info">
                <div class="project_title">
                    <p>mura boutique</p>
                    <img src="img/projects/arrow.svg" alt="">
                </div>
                <span class="mura_description">
                    This project is a redesign of Mura boutique website. 
                    <br> Mura is a female fashion boutique that started in 2011 by founder Asako Nakamura in Noosa, Australia. Mura offers beautiful clothing, shoes and accessories.
                </span>
            </div>
        </div>
    </div>`,
` <div class="project">
<div class="project_content">
    <div class="project_buttons">
        <div class="project_button">corporate</div>
        <div class="project_button project_hide">food</div>
        <div class="project_button">redesign</div>
    </div>
    <img class="project_image nestle_image" src="img/projects/320/nestle.png" alt="">
    <div class="project_info">
        <div class="project_title">
            <p>Nestlé website</p>
            <img src="img/projects/arrow.svg" alt="">
        </div>
        <span class="nestle_description">
            Nestlé is a Swiss multinational food and drink processing conglomerate corporation. Nestlé's products include baby food, medical food, bottled water, breakfast cereals, coffee and tea, confectionery, dairy products, ice cream, frozen food, pet foods, and snacks.
        </span>
    </div>
</div>
</div>`,
`<div class="project">
<div class="project_content">
    <div class="project_buttons">
        <div class="project_button">online store</div>
        <div class="project_button">cosmetics</div>
        <div class="project_button project_hide">redesign</div>
    </div>
    <img class="project_image eltrendy_image" src="img/projects/320/eltrendy.png" alt="">
    <div class="project_info">
        <div class="project_title">
            <p>eltrendy store</p>
            <img src="img/projects/arrow.svg" alt="">
        </div>
        <span class="eltrendy_description">
            ElTrendy.store is an online store that contains the most popular brands <br>for harmony and beauty. ElTrendy is one of the top 10 most famous <br>studios in Russia.
        </span>
    </div>
</div>
</div>`,
`<div class="project">
<div class="project_content">
    <div class="project_buttons">
        <div class="project_button">corporate</div>
        <div class="project_button project_hide">ui</div>
        <div class="project_button">redesign</div>
    </div>
    <img class="project_image aston_image" src="img/projects/320/aston.png" alt="">
    <div class="project_info">
        <div class="project_title">
            <p>aston martin</p>
            <img src="img/projects/arrow.svg" alt="">
        </div>
        <span class="aston_description">
            Aston Martin is the iconic British sport car brand that has stood for beautiful, hand-crafted cars that are exhilarating to drive since 1913. This project is a redesign of official Aston Martin website. The main goal was to improve UI and UX parts bringing Aston Martin spirit.
        </span>
    </div>
</div>
</div>`,
`<div class="project">
<div class="project_content">
    <div class="project_buttons">
        <div class="project_button">news website</div>
        <div class="project_button">ui/ux</div>
        <div class="project_button project_hide">redesign</div>
    </div>
    <img class="project_image sky_news_image" src="img/projects/320/sky_news.png" alt="">
    <div class="project_info">
        <div class="project_title">
            <p>sky news</p>
            <img src="img/projects/arrow.svg" alt="">
        </div>
        <span class="sky_news_description">
            Sky News is a British free-to-air television news channel and organisation which started broadcasting since February 1989, becoming the UK's first round-the-clock news channel. The audience is estimated at 150 million people worldwide.
        </span>
    </div>
</div>
</div>`,
`<div class="project">
<div class="project_content">
    <div class="project_buttons">
        <div class="project_button">landing page</div>
        <div class="project_button">real estate</div>
        <div class="project_button project_hide">concept</div>
    </div>
    <img class="project_image goldory_image" src="img/projects/320/goldory.png" alt="">
    <div class="project_info">
        <div class="project_title">
            <p>goldory</p>
            <img src="img/projects/arrow.svg" alt="">
        </div>
        <span class="goldory_description">
            Goldory is a website concept made for a real estate company based in Moscow. The Goldory Luxury House has bright and spacious rooms, hight ceilings and geometric facade elements.
        </span>
    </div>
</div>
</div>`
];






        const headerIconsImages = headerIcons.querySelectorAll('img'),
              projectsCols = document.querySelectorAll('.projects_col');
        //projectsCols.innerHTML="<div class='projects_col'><p class='projects_title'>selected projects</p><div class='projects_column'></div></div>";
            projectsCols[1].remove();
            //removeProjectButtons();
        const projectsColumn = projectsCols[0].querySelector('.projects_column');
        
        console.log(projectsColumn);
              projectsColumn.innerHTML = projects[0] + projects[3] + projects[1] + projects[4] + projects[2] + projects[5];
              




              const mura = document.querySelector('.mura_description'),
              nestle = document.querySelector('.nestle_description'),
              eltrendy = document.querySelector('.eltrendy_description'),
              aston = document.querySelector('.aston_description'),
              skyNews = document.querySelector('.sky_news_description'),
              goldory = document.querySelector('.goldory_description');
              mura.textContent ="This project is a redesign of Mura boutique \r\nwebsite. Mura offers beautiful clothing, \r\nshoes and accessories.";
              nestle.textContent ="Nestlé is a Swiss multinational food and \r\ndrink processing conglomerate \r\ncorporation. This project is a redesign of \r\nofficial Nestlé website.";
              eltrendy.textContent ="ElTrendy.store is an online store that \r\ncontains the most popular brands for \r\nharmony and beauty. ElTrendy is one of the \r\ntop 10 most famous studios in Russia.";
              aston.textContent ="This project is a redesign of official Aston \r\nMartin website. The main goal was to \r\nimprove UI and UX parts bringing Aston \r\nMartin spirit.";
              skyNews.textContent ="Sky News is a British free-to-air television \r\nnews channel and organisation which \r\nstarted broadcasting since February 1989, \r\nbecoming the UK's first round-the-clock \r\nnews channel. ";
              goldory.textContent ="Goldory is a website concept made for a \r\nreal estate company. The Goldory Luxury \r\nHouse has bright and spacious rooms, \r\nhight ceilings and geometric facade \r\nelements.";
              headerIcons.innerHTML= "<img class='social' src='img/header/behance.svg' alt='behance'><img class='social_down' src='img/header/instagram.svg' alt='instagram'><img class='social' src='/img/header/facebook.svg' alt='facebook'>";



              removeProjectButtons();
              //imageChange(320);
              
        // for(i = 0; i < 3; i++){
        //     headerIcons.removeChild(headerIconsImages[i]);
        // }
        headerIconsImages.forEach(element => {
            element.remove();
        });
        // const burgerMenu = document.createElement('img');
        // burgerMenu.src = 'img/projects/menu.svg';
        // burgerMenu.classList.add('burger_menu');
        const burgerMenu = "<img class='burger_menu' src='img/projects/menu.svg'>";
        headerIcons.innerHTML=burgerMenu;
        // headerIcons.appendChild(burgerMenu);
        // console.log(burgerMenu);
        about.innerHTML="<p>about me</p><div class='about_col'><span class='first_text'>I'm Lana Topchyan, junior web designer based in Tbilisi, Georgia, working remotely all over the world. I‘m in love with web design, typography and minimal style.</span><img class='about_img' src='img/lana/lana_2.svg'><span class='second_text'>I design thoughtful web interfaces that are comfortable to interact with. I like the minimalist aesthetic, simple effective solutions and light animation.</span></div>";
        concept.textContent = "concept ";
    }
    else {
        resetProjectList();
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
    const muraImage = document.querySelector('.mura_image'),
    nestleImage = document.querySelector('.nestle_image'),
    eltrendyImage = document.querySelector('.eltrendy_image'),
    astonImage = document.querySelector('.aston_image'),
    skyNewsImage = document.querySelector('.sky_news_image'),
    goldoryImage = document.querySelector('.goldory_image');
    muraImage.src='img/projects/'+x+'/mura.png';
    nestleImage.src='img/projects/'+x+'/nestle.png';
    eltrendyImage.src='img/projects/'+x+'/eltrendy.png';
    astonImage.src='img/projects/'+x+'/aston.png';
    skyNewsImage.src='img/projects/'+x+'/sky_news.png';
    goldoryImage.src='img/projects/'+x+'/goldory.png';
}

function removeProjectButtons(){
    const hideButtons = document.querySelectorAll('.project_hide');
    for(i=0;i<6;i++){
        //hideButtons[i].remove();
        hideButtons[i].classList.add('dn');
        hideButtons[i].classList.remove('project_button');
    }
}
function addProjectButtons(){
    const hideButtons = document.querySelectorAll('.project_hide');
    for(i=0;i<6;i++){
        //hideButtons[i].remove();
        if(hideButtons[i].classList.contains('dn')){
            hideButtons[i].classList.remove('dn');
            hideButtons[i].classList.add('project_button');
        } 

    }
}

function resetProjectList(){
    const projectList = document.querySelector('.projects_cols');
    projectList.innerHTML = "";
    console.log('reset');
    projectList.innerHTML = `<div class="projects_col">
    <p class="projects_title">selected projects</p>
    <div class="projects_column">
        <div class="project">
            <div class="project_content">
                <div class="project_buttons">
                    <div class="project_button">online store</div>
                    <div class="project_button project_hide">fashion</div>
                    <div class="project_button">redesign</div>
                </div>
                <img class="project_image mura_image" src="img/projects/1000/mura.png" alt="">
                <div class="project_info">
                    <div class="project_title">
                        <p>mura boutique</p>
                        <img src="img/projects/arrow.svg" alt="">
                    </div>
                    <span class="mura_description">
                    This project is a redesign of Mura boutique website. 
                    <br> Mura is a female fashion boutique that started in 2011 by founder Asako Nakamura in Noosa, Australia. Mura offers beautiful clothing, shoes and accessories.
                    </span>
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project_content">
                <div class="project_buttons">
                    <div class="project_button">corporate</div>
                    <div class="project_button project_hide">food</div>
                    <div class="project_button">redesign</div>
                </div>
                <img class="project_image nestle_image" src="img/projects/1000/nestle.png" alt="">
                <div class="project_info">
                    <div class="project_title">
                        <p>Nestlé website</p>
                        <img src="img/projects/arrow.svg" alt="">
                    </div>
                    <span class="nestle_description">
                        Nestlé is a Swiss multinational food and drink processing conglomerate corporation. Nestlé's products include baby food, medical food, bottled water, breakfast cereals, coffee and tea, confectionery, dairy products, ice cream, frozen food, pet foods, and snacks.
                    </span>
                </div>
            </div>
        </div>
        <div class="project">
            <div class="project_content">
                <div class="project_buttons">
                    <div class="project_button">online store</div>
                    <div class="project_button">cosmetics</div>
                    <div class="project_button project_hide">redesign</div>
                </div>
                <img class="project_image eltrendy_image" src="img/projects/1000/eltrendy.png" alt="">
                <div class="project_info">
                    <div class="project_title">
                        <p>eltrendy store</p>
                        <img src="img/projects/arrow.svg" alt="">
                    </div>
                    <span class="eltrendy_description">
                        ElTrendy.store is an online store that contains the most popular brands <br>for harmony and beauty. ElTrendy is one of the top 10 most famous <br>studios in Russia.
                    </span>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="projects_col">
    <div class="project">
        <div class="project_content">
            <div class="project_buttons">
                <div class="project_button">corporate</div>
                <div class="project_button project_hide">ui</div>
                <div class="project_button">redesign</div>
            </div>
            <img class="project_image aston_image" src="img/projects/1000/aston.png" alt="">
            <div class="project_info">
                <div class="project_title">
                    <p>aston martin</p>
                    <img src="img/projects/arrow.svg" alt="">
                </div>
                <span class="aston_description">
                    Aston Martin is the iconic British sport car brand that has stood for beautiful, hand-crafted cars that are exhilarating to drive since 1913. This project is a redesign of official Aston Martin website. The main goal was to improve UI and UX parts bringing Aston Martin spirit.
                </span>
            </div>
        </div>
    </div>
    <div class="project">
        <div class="project_content">
            <div class="project_buttons">
                <div class="project_button">news website</div>
                <div class="project_button">ui/ux</div>
                <div class="project_button project_hide">redesign</div>
            </div>
            <img class="project_image sky_news_image" src="img/projects/1000/sky_news.png" alt="">
            <div class="project_info">
                <div class="project_title">
                    <p>sky news</p>
                    <img src="img/projects/arrow.svg" alt="">
                </div>
                <span class="sky_news_description">
                    Sky News is a British free-to-air television news channel and organisation which started broadcasting since February 1989, becoming the UK's first round-the-clock news channel. The audience is estimated at 150 million people worldwide.
                </span>
            </div>
        </div>
    </div>
    <div class="project">
        <div class="project_content">
            <div class="project_buttons">
                <div class="project_button">landing page</div>
                <div class="project_button">real estate</div>
                <div class="project_button project_hide">concept</div>
            </div>
            <img class="project_image goldory_image" src="img/projects/1000/goldory.png" alt="">
            <div class="project_info">
                <div class="project_title">
                    <p>goldory</p>
                    <img src="img/projects/arrow.svg" alt="">
                </div>
                <span class="goldory_description">
                    Goldory is a website concept made for a real estate company based in Moscow. The Goldory Luxury House has bright and spacious rooms, hight ceilings and geometric facade elements.
                </span>
            </div>
        </div>
    </div>
</div>`;
nestle = document.querySelector('.nestle_description');
}




