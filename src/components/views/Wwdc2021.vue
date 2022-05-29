<template>
<div>
    <img src="@/assets/Wwdc/ssc2021.jpg" alt="Swift Student Challenge" class="hero"/>
    <div class="inner-content">
        <h3 class="heading"><b>Apple WWDC Swift Student Challenge 2021</b></h3>
        <p class="paragraph">I began my swift journey in early 2020 after starting work on the early phases of NOSSAFLEX. From then on, I started picking up SwiftUI, a declarative frontend framework for the Swift language.</p>
    </div>
    <img src="@/assets/Wwdc/2021_1.jpg" class="images" />
    <h6 class="subtitle">Page 1 of Submission</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Ideation</b></h3>
        <p class="paragraph">Ideation begin when Apple announced that submissions were open to all students around the world. I promptly selected an area of development work I had particular interest in, web development. I built on the idea of web development in an app and began building prototypes for the project, I first created a simple app that allowed live editing of HTML/CSS pages with SwiftUI.</p>
    </div>
    <img src="@/assets/Wwdc/2021_2.jpg" class="images" />
    <h6 class="subtitle">Page 2 of Submission</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Content</b></h3>
        <p class="paragraph">What I quickly realised was that simply having an app that 'worked' was just part of a successful submission, one had to back it up with interesting content while demonstrating the technical prowess that the developer could pull off. I hence decided to create a tutorial-esque playground project that taugh users how to use HTML/CSS.</p>
        <p class="paragraph">Furthermore, by picking up simple HTML/CSS skills, users could find out more about me, through interesting facts about me, by simply participating in the simple challenges handed to them within the project. This enabled users to learn more about me while also having a fruitful learning experience. </p>
    </div>
    <img src="@/assets/Wwdc/2021_3.jpg" class="images" />
    <h6 class="subtitle">Page 3 of the Submission</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Submission</b></h3>
        <p class="paragraph">After wrapping up the development process of the project, I had to submit two 500 word essays regarding the project and my experiences with computer science outside of WWDC. Here's a pro-tip to anybody wishing to participate in WWDC SSC, submit both essays even if it might state that it's optional! Apple will judge your entire submission alongside the essays and they definitely do play a large part in the judging process.</p>
    </div>
    <img src="@/assets/Wwdc/wwdc2021_win.jpg" class="images" />
    <h6 class="subtitle">Winner's Page for 2021</h6>
    <div class="inner-content">
        <h3 class="heading"><b>2021's Success</b></h3>
        <p class="paragraph">I successfully clinched WWDC SSC 2021 and was one of the 350 students worldwide that was awarded the winning prize. Alongside my win, I was also offered a media opportunity with the local media outlet that year and I had the chance to appear on local news the next month, discussing about my development journey.</p>
    </div>
    <img src="@/assets/Wwdc/swag2021.jpg" class="images-full" />
    <h6 class="subtitle" style="padding-bottom: 30px;">WWDC Swag!</h6>
    <div class="images">
        <embed src="https://www.youtube.com/embed/qGlhv0LeLVE?autohide=1&autoplay=0" wmode="transparent" type="video/mp4" width="100%" height="100%" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen title="WWDC Interview"> 
    </div>
    
</div>
</template>

<style scoped>
.hero {
    width: 100%;
    background-position: center center;
    background-size: 100%;
    background-repeat: no-repeat;
    border: 1px solid rgb(0, 0, 0, 0.1);
}

.images {
    width: 100%;
    height: 350px ;
    /* object-fit: cover; */
}

.images-full {
    width: 100%;
    height: auto ;
    object-fit: cover;
}

.subtitle {
    font-size: 12px;
    color: gray;
    text-align: center;
}

.heading {
    padding-bottom: 5px;
}

.inner-content {
    padding-top: 30px;
    padding-bottom: 30px;
}

h6, h3 {
    margin: 0;
    padding: 0;
}
</style>
