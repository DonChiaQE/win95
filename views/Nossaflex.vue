<template>
<div>
    <img src="@/assets/Nossaflex/hero_light.webp" alt="NOSSAFLEX logo" class="hero" />
    <div class="inner-content">
        <h3 class="heading"><b>Phase One: The Beginning</b></h3>
        <p class="paragraph">
            NOSSAFLEX began as two separate entities initially—an idea that simmered in my mind as an EXIF data logger app for the Apple Watch. Sketches of the original app exist in images, created using Apple's Storyboarding system. Initially, it didn't make much sense to me, but when I uploaded it onto online platforms like Reddit, the concept took off and became an instant hit.
        </p>
    </div>
    <img src="@/assets/Nossaflex/watch.webp" class="images" />
    <h6 class="subtitle">Initial Idea</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Two: LUCE</b></h3>
        <p class="paragraph">
            Within my Reddit post, I included a request for assistance. Having just learned how to create storyboards in Swift, I was honestly afraid of disappointing my newfound audience. I asked anyone with experience in Swift to step forward and offer their help. By a stroke of luck, I encountered Diego. Diego, a skilled Lead Engineer with years of experience in iOS development, was more than willing to assist with the development.
        </p>
        <p class="paragraph">
            I was relieved to have found assistance for the app, especially when I discovered that an editor from The Phoblographer had contacted me regarding the Reddit post. Fortunately, Diego came to my aid and swiftly mocked up some ideas for the app (pun intended). You can find The Phoblographer article
            <a class="underline text-blue-700" href="https://www.thephoblographer.com/2020/03/09/luce-an-app-that-could-help-analog-photographers-log-exif-data/">here</a>. Pretty neat eh?
        </p>
    </div>
    <img src="@/assets/Nossaflex/luce.webp" class="images-full" />
    <h6 class="subtitle">LUCE</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Three: Merger</b></h3>
        <p class="paragraph">
            Development was underway, but in April, a fan reached out to us about another app out there that seemed quite similar to ours—NOSSAFLEX. This piqued our interest, prompting us to swiftly establish contact. It turned out that our ideas were strikingly similar. Enter Josh, the mastermind behind NOSSAFLEX—a naming system that assigned meaning to a slew of otherwise meaningless EXIF strings. In this system, NO stood for shot number, SS for shutter speed, A for aperture, FL for focal length, and EX for exposure.
        </p>
        <p class="paragraph">
            We enthusiastically embraced Josh's concept and delved into discussions about the app's layout. Eventually, we settled on using SwiftUI with Firebase as its database. Josh wasted no time in sketching up some mockups, and we dove right into the development process.
        </p>
    </div>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Four: Neumorphism</b></h3>
        <p class="paragraph">
            The initial version of the app embraced a UI trend called neumorphism, which emerged as a revival of skeuomorphism, advocated by users on dribbble.com. Skeuomorphism, reminiscent of the pre-iOS 9 era, featured designs that mimicked real-world objects, such as book apps resembling shelves, calculators mirroring their physical counterparts, and notepads replicating actual notepads.
        </p>
        <p class="paragraph">
            Neumorphism, on the other hand, reimagined skeuomorphism with a modern twist, incorporating soft shadows, muted whites, and buttons with inner shadows, evoking the sensation of pressing a rubber button. While initially appealing, this design trend eventually became a glaring eyesore and posed accessibility challenges. The excessive shadows detracted from usability over time.
        </p>
        <p class="paragraph">
            Fortunately, during the beta phase, we swiftly abandoned this design approach in favor of a simpler and more user-friendly interface.
        </p>
    </div>
    <img src="@/assets/Nossaflex/neumorphism.webp" class="images-full" />
    <h6 class="subtitle">Why neumorphism is a bad idea</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Five: Sketchbook</b></h3>
        <p class="paragraph">
            We then opted for a much friendlier design reminiscent of a notebook. Featuring grid paper and highlighted text, along with a warm yellow tint to evoke a sketchbook feel, the app exuded a welcoming atmosphere. Recognizing the need for a makeover, I sprang into action, swiftly converting all old components into the cleaner and sleeker design. Josh contributed further by creating Lottie animations that played whenever users booted up the app, while meticulously drawing out patents of various camera equipment and accessories.
        </p>
        <p class="paragraph">
            Meanwhile, Diego worked tirelessly to ensure the timely release of our much-anticipated feature, the light meter. By the end of December, the app was finally completed, with the final rounds of beta testing coming to a close.
        </p>
    </div>
    <img src="@/assets/Nossaflex/notebook.webp" class="images-full" />
    <h6 class="subtitle">Sketchbook Design</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Six: App Store Launch</b></h3>
        <p class="paragraph">
            The app was officially launched on February 5th, 2021, after more than a year of development. It immediately captivated the community, receiving widespread support from Reddit, YouTube, and Facebook forums alike. Users from across the globe eagerly signed up for the app, resulting in over a thousand users within the first week alone. Thousands of pieces of data were logged daily by users, and we were delighted to witness consistent daily usage of our app.
        </p>
    </div>
    <img src="@/assets/Nossaflex/appstore.webp" class="images-full" />
    <h6 class="subtitle">We're live!</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Seven: Apple WWDC and Apple's Design Evangelist</b></h3>
        <p class="paragraph">
            With our app finally launched, it was a well-received hit by the community. However, we were far from satisfied with the product. In an attempt to improve the app, we reached out to Apple's Design Evangelist, who provided us with valuable feedback. We quickly came to realize that our app's sketchbook style UI with custom navigation and components was not in line with Apple's design guidelines.
        </p>
        <p class="paragraph">
            We were advised to adhere to Apple's Human Interface Guidelines, which would ensure that our app was more user-friendly and accessible. We were also encouraged to adopt a more conventional design approach, which would make our app more intuitive and easier to use.
        </p>
        <p class="paragraph">
            Josh got to work immediately, redesigning the app to align with Apple's guidelines. The new design featured a more conventional layout, with standard navigation and components that were consistent with Apple's design language. The app was also updated to include new features and improvements, making it more user-friendly and accessible.
        </p>
    </div>
    <img src="@/assets/Nossaflex/nossaflex_screenshot_1.webp" class="images-full" />
    <h6 class="subtitle">V3 of NOSSAFLEX</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Eight: Apple Entrepreneur Camp</b></h3>
        <p class="paragraph">
            Our third version was released in September 2023, and we were invited to participate in Apple's Entrepreneur Camp. The camp was a fantastic opportunity for us to learn from Apple's experts and receive valuable feedback on our app. We were able to connect with other entrepreneurs and developers, share our experiences, and gain insights into the latest trends in app development.
        </p>
        <p class="paragraph">
            The camp was a great success, and we returned home with a wealth of knowledge and new ideas for our app. We continued to work on NOSSAFLEX, incorporating the feedback we received and making improvements to the app. We were excited to see how our app would evolve and grow in the future.
        </p>
    </div>
    <img src="@/assets/Nossaflex/apple_camp.webp" class="images-full" />
    <h6 class="subtitle">NOSSAFLEX at Apple Entrepreneur Camp</h6>
    <div class="inner-content">
        <h3 class="heading"><b>Phase Nine: Shortlisted for Apple Design Awards and Beyond</b></h3>
        <p class="paragraph">
            NOSSAFLEX was recognized by Apple's South Asia DR team and was shortlisted to be considered for Apple's Design Awards in 2024. We were thrilled to be recognized by Apple and were excited to see how our app would be received by the wider community. We continued to work on NOSSAFLEX, incorporating new features and improvements to make the app even better.
        </p>
    </div>
    <br />
    <a href="https://www.nossaflex.io" style="color: #ff5733">NOSSAFLEX</a>
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
    height: 350px;
    object-fit: cover;
}

.images-full {
    width: 100%;
    height: auto;
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

h6,
h3 {
    margin: 0;
    padding: 0;
}
</style>
