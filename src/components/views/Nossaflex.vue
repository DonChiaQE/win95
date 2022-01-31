<template>
<div>
    <img src="@/assets/Nossaflex/hero_light.webp" alt="NOSSAFLEX logo" class="hero"/>
    <div class="inner-content">
        <h3 class="heading"><b>Phase One: The Beginning</b></h3>
        <p class="paragraph">NOSSAFLEX started as two separate entities in the beginning. An idea that festered in my mind as an EXIF data logger app... for the Apple Watch. Sketches of the original app exist in images and they were created using Apple's Storyboarding system. It didn't make much sense to me but when I uploaded it onto online platforms like Reddit, the concept took off and it was an instant hit.</p>
    </div>
    <img src="@/assets/Nossaflex/watch.webp" class="images" />
    <h6 class="subtitle">Initial Idea</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Two: LUCE</b></h3>
        <p class="paragraph">Within my Reddit post was a request for help. I had just learnt how to create storyboards in Swift and was honestly afraid of letting my newfound audience down, I requested anybody with experience working with Swift to come forward and help out. By stroke of luck, I met Diego. Diego was a skilled CS graduate, he had plenty of experience with iOS development and he was more than happy to help out with development.</p>
        <p class="paragraph">I was glad to have found some help for the app as I quickly learnt that an editor from The Phoblographer had contacted me asking about the Reddit post. Thankfully, Diego came to my rescue and mocked up some ideas for the app really swiftly (pun intended). The Phoblographer article can be found <a href="https://www.thephoblographer.com/2020/03/09/luce-an-app-that-could-help-analog-photographers-log-exif-data/">here</a>. Pretty neat eh?</p>
    </div>
    <img src="@/assets/Nossaflex/luce.webp" class="images-full" />
    <h6 class="subtitle">LUCE</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Three: Merger</b></h3>
        <p class="paragraph">Development started but around April we were contacted by a fan of ours about another app out there that was pretty similar to ours. It was named NOSSAFLEX and it piqued our interests. We quickly got into contact and realised that our idea were pretty much the same. Enter Josh, the brainchild of NOSSAFLEX. A naming system that gave meaning to a bunch of meaningless EXIF strings. NO stood for shot number, SS stood for shutter speed, A stood for aperture, FL stood for focal length and EX stood for exposure.</p>
        <p class="paragraph">We quickly jumped aboard the idea and progress was made to discuss the app's layout. It was eventually decided that the app would be built with SwiftUI with Firebase as its Database. Josh sprang into action to sketch up some mockups and we got cracking.</p>
    </div>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Four: Neumorphism</b></h3>
        <p class="paragraph">The first variation of the app featured a UI fad called neumorphism. The design was a fad created by users at dribbble.com who felt that skeumorphism needed to make a comeback again. Now what is skeumorphism exactly? Remember the pre-iOS 9? That's skeumorphism. Book apps that looked like shelves, a calculator that looked like its real life counterpart and a notepad that looked like a real life notepad. That's skeumorphism.</p>
        <p class="paragraph">Then what's neumorphism? Well, neumorphism is skeumorphism reimagined with a dash of latex. Soft shadows coupled with muted whites and buttons that often created inner shadows gave a feel of pressing a rubber button. It looked and felt good the first few times, but after awhile, the design became a huge eyesore and also an accessibility issue. The shadows were unsightly and it got difficult to use the app after some time.</p>
        <p class="paragraph">Thankfully, the design was quickly scrapped during the beta phase and we opted for a much simpler and friendly design.</p>
    </div>
    <img src="@/assets/Nossaflex/neumorphism.webp" class="images-full" />
    <h6 class="subtitle">Why neumorphism is a bad idea</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Five: Sketchbook</b></h3>
        <p class="paragraph">The next design we opted for was a much friendlier notebook-esque look. Grid paper, highlighted text coupled with a warm yellow tint for the sketchbook feel gave the app a welcoming feel. The app needed a makeover fast and I quickly got into action, converting all old components into the more clean and sleek design. Josh furthered the design by creating lottie animations that played whenever the users booted up the app, patents of a variety of camera equipments and accessories were painstakingly drawn out by Josh.</p>
        <p class="paragraph">Diego on the other hand tolled hard to ensure that our much anticipated feature, the lightmeter, got pushed out on time. The app was finally completed around the end of December and the final rounds of beta testing was ending.</p>
    </div>
    <img src="@/assets/Nossaflex/notebook.webp" class="images-full" />
    <h6 class="subtitle">Sketchbook Design</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Six: App Store Launch</b></h3>
        <p class="paragraph">The app was finally launched on 5th February of 2021 after over a year of development. It was an instant hit with the community, garnering support from Reddit, Youtube and Facebook forums alike. Users from all around the world signed up for the app and we had over a thousand users within the first week. Thousands of pieces of data was being logged daily by users and we were heartened to see daily usage in our app.</p>
    </div>
    <img src="@/assets/Nossaflex/appstore.webp" class="images-full" />
    <h6 class="subtitle">We're live!</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Seven: Beyond iOS</b></h3>
        <p class="paragraph">Now that iOS was done, we set our sights for the next frontier, the Web and Android. Our current goal is to create a web app that users are able to access through their phones or laptops, allowing them to attach EXIF data to their photo with much more ease.</p>
    </div>
    <br>
    <a href="https://www.nossaflex.io" style=" color: #FF5733;">NOSSAFLEX</a>
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
    object-fit: cover;
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
