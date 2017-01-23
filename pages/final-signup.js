import React, { Component } from 'react';

import ProjectPage from '../components/ProjectPage/ProjectPage';
import ProjectBlock from '../components/ProjectBlock/ProjectBlock';
import ImageGallery from '../components/ImageGallery/ImageGallery';

class FinalDashboard extends Component {
  render() {
    return (
      <ProjectPage title={ "Final, Inc. Credit Application" }
        link={ "https://signup.getfinal.com" }
        linkText={ "Live application (sign up requires invite code)" }>
        <ProjectBlock
          floatingContent={
            <video
              style={{
                "margin": "20px",
                "display": "block",
                "float": "right",
                "boxShadow": "2px 2px 4px #4D4D4D",
                "borderRadius": "2px",
              }}
              width="300"
              autoPlay
              loop>
              <source src="/videos/final-signup.mp4" type="video/mp4"/>
              <img src="/video/final-signup.gif"
                alt="Video of signup website loading."
                width="300"/>
            </video>
          }
          textContent={"The Final credit application website serves the purposes of deliving product information, account creation, and applying for a credit card. Much like the dashboard application, I took on responsibilities beyond my role as developer and contributed to the user experience and visual design."}>
        </ProjectBlock>
        <ProjectBlock title={ "Early Product Design" }
          img={ require("../assets/images/signup-early.png") }
          imgAlt={ "Screenshot of early design for the credit application." }
          textContent={"This was my first project at Final and one of my first times working extensively with React. Initially the product design was just a rough outline of desired functionality and over time major changes were introduced that were leading to an unstable code base. Eventually, the framework I was developing for the customer dashboard application progressed to the point that I was able to migrate this entire application to that same framework which greatly improved the product stability."}>
        </ProjectBlock>
        <ProjectBlock
          img={ require("../assets/images/signup-early2.png") }
          imgAlt={ "Screenshot of early design for the credit application." }
          reverse
          textContent={"Over time as the visual style of the customer dashboard was beginning to crystallize, improving the design of the credit application became a matter of borrowing the same visual elements. As can be seen in the below gallery of the current application, over time the application header and separation of content floating above a background graphic were adopted into this product."}>
        </ProjectBlock>
        <ProjectBlock>
          <ImageGallery images={[
            {
              src: require("../assets/images/signup-start.png"),
              alt: "",
              description: ""
            },
            {
              src: require("../assets/images/signup-form.png"),
              alt: "",
              description: ""
            },
            {
              src: require("../assets/images/signup-review.png"),
              alt: "",
              description: ""
            },
            {
              src: require("../assets/images/signup-disclosures.png"),
              alt: "",
              description: ""
            },
            {
              src: require("../assets/images/signup-end.png"),
              alt: "",
              description: ""
            }
          ]}/>
        </ProjectBlock>
      </ProjectPage>
    );
  }
}

export default FinalDashboard;
