import React, { Component } from 'react';

import ProjectPage from '../components/ProjectPage/ProjectPage';
import ProjectBlock from '../components/ProjectBlock/ProjectBlock';
import ImageGallery from '../components/ImageGallery/ImageGallery';

class FinalDashboard extends Component {
  render() {
    return (
      <ProjectPage title={ "Final, Inc. Customer Dashboard" }
        link={ "https://dashboard.getfinal.com" }
        linkText={ "Live application (requires account)" }>
        <ProjectBlock
          textContent={"The Final customer dashboard allows Final’s credit card holders to view their account status, manage multiple merchant-locked cards, and make payments towards their accounts. Ultimately my role on this project involved not just developing the application, but also improving the product itself, the user experience, and in some cases the visual design."}
          img={require("../assets/images/final-dashboard.png")}
          imgAlt={ "Screenshot of Final customer dashboard" }/>
        <ProjectBlock title="Design Direction"
          textContent={
            "When I started on this project, there was only a rough outline of what the product should look like and what it should do. Through numerous rounds of user testing and working with external visual designers I was able to reorganize the site's information heirarchy into what it is today. The gallery below shows how the look changed over time in response to user testing and internal design reviews."
          }>
          <ImageGallery images={[
            {
              src: require("../assets/images/final-d1.png"),
              alt: "A screentshot of and early version of the website",
              caption: "The initial product design put customer transactions front and center, burying all other content and functionality."
            },
            {
              src: require("../assets/images/final-d2.png"),
              alt: "A screentshot of and early version of the website",
              caption: "Here you can see that the header in the previous image actually contained hidden controls to expand hidden menus with important account information."
            },
            {
              src: require("../assets/images/final-d3.png"),
              alt: "A screentshot of and early version of the website",
              caption: "After bringing the account overview out of hiding. Note there are still expanding sub menus which push page content around, making navigating on smaller screens difficult."
            },
            {
              src: require("../assets/images/final-d4.png"),
              alt: "A screentshot of and early version of the website",
              caption: "Adding a large call-to-action for generating a new virtual card number, the application's most frequently used function."
            },
            {
              src: require("../assets/images/final-dashboard.png"),
              alt: "A screentshot of the current website",
              caption: "A cleaned up account and statement overview. Moved payments and rewards functions to their own pages with links in the site header. Added a second link to the card generate functionality in the headed. Moved less-frequent account settings to a separate page."
            }
          ]}/>
        </ProjectBlock>
        <ProjectBlock textContent={"While not on the product roadmap, in my spare time I worked with internal feedback to tune some animation niceties for the application. The video below shows a selection of the resulting animations."}>
          <video
            style={{
              "margin": "auto",
              "display": "block",
              "boxShadow": "2px 2px 4px #4D4D4D",
              "borderRadius": "2px"
            }}
            width="360"
            autoPlay
            loop>
            <source src="/videos/final-animations.mp4" type="video/mp4"/>
            <img src="/video/final-animations.gif"
              alt="Demo of website animations."
              width="360"/>
          </video>
        </ProjectBlock>
        <ProjectBlock
          title="Responsive Layout"
          textContent={"Part of my role as developer on this project included taking existing mockups at desktop resolutions and making them responsive. Since the product launch was anticipated to precede the completion of the mobile applications, it was important that the website be accessible to mobile browsers. The images below provide an example of how some components with landscape layouts were modified to ensure he most releveant information always appears above the fold."}>
          <ImageGallery images={[
            {
              src: require("../assets/images/final-res1.png"),
              alt: "Screenshot of Final application at widescreen resolution."
            },
            {
              src: require("../assets/images/final-res2.png"),
              alt: "Screenshot of Final application at mobile resolution."
            }
          ]}/>
        </ProjectBlock>
        <ProjectBlock title="Separating Content From Code"
          textContent={"I developed a custom framework for this application on top of React-Redux-Webpack that allowed for extensive modularity. For one, the application framework itself is modular, which allows for reuse in other applications, like the credit application form. It also enforces separation of content and view components from application logic. Things like application's brand colors are loaded in through configuration files, which allows for some fun little tricks on the development server."}>
          <video
            style={{
              "margin": "auto",
              "display": "block",
              "boxShadow": "2px 2px 4px #4D4D4D",
              "borderRadius": "2px"
            }}
            width="360"
            autoPlay
            loop>
            <source src="/videos/color-change.mp4" type="video/mp4"/>
            <img src="/video/color-change.gif"
              alt="Demo of live updating website colors."
              width="360"/>
          </video>
        </ProjectBlock>
        <ProjectBlock textContent={"Keeping all of the site configuration and text content separate allows all members of the company to play around with quick experiments and easily request changes through GitHub's online editor. On the side of developer convenience, keeping all of the application logic separate means that it is able to be entirely reused on mobile in a React Native application. This means that mobile application development only requires native-specific session management/account security and views. This allowed me to create the following proof-of-concept Android application for Final as a foundation for future development."}>
          <ImageGallery images={[
            {
              src: require("../assets/images/final-m1.png"),
              alt: "Screenshot of Final Android app prototype login."
            },
            {
              src: require("../assets/images/final-m2.png"),
              alt: "Screenshot of Final Android app prototype account overview."
            }
          ]}/>
        </ProjectBlock>
      </ProjectPage>
    );
  }
}

export default FinalDashboard;
