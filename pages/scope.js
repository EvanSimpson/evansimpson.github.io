import React, { Component } from 'react';

import ExternalLink from '../components/ExternalLink/ExternalLink';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import ProjectBlock from '../components/ProjectBlock/ProjectBlock';
import ImageGallery from '../components/ImageGallery/ImageGallery';

class SCOPE extends Component {
  render() {
    return (
      <ProjectPage title={ "Senior Capstone Consulting Project" }>
        <ProjectBlock
          img={ require("../assets/images/scope.png") }
          imgAlt={ "A photo of a whiteboard with post-it notes. \"Areas of opportunity\" is written above." }
          textContent={ "As a part of my engineering degree program, I participated in a senior capstone consulting project. The capstone program pairs teams of 5-6 undergraduate students with established companies looking for creative solutions to a particular problem they face. My team was tasked by Dassault Systèmes SolidWorks to explore and invent novel mobile interface extensions to the SolidWorks desktop software." }>
        </ProjectBlock>
        <ProjectBlock
          img={ require("../assets/images/process.png") }
          imgAlt={ "A diagram of the team's design and development process." }
          reverse
          textContent={"To focus our research, our team chose to explore how mobile experiences could shape an industrial designer's workflow. In all, we interviewed, observed, and co-designed with over a dozen different designers over an 8 month period. All the while, we were developing multiple prototypes to test our ideas."}>
        </ProjectBlock>
        <ProjectBlock textContent={"After a few months of initial research, we had narrowed our focus further to ideas around facillitating collaboration amongst industrial designers and their team members. With feedback from our contacts at Dassault Systèmes, we began pursuing applications of capturing and sharing ideas and sketches, facilitating design reviews with clients. A video of one of our later prototypes can be seen below."}>
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
            <source src="/videos/scope-demo.mp4" type="video/mp4"/>
            <img src="/video/scope-demo.gif"
              alt="Demo of prototype application."
              width="360"/>
          </video>
        </ProjectBlock>
        <ProjectBlock textContent={
            <span>
              After we handed off our research and our prototypes, Dassault Systèmes has since put many of the specific collaboration-centered features we developed into their new platform, <ExternalLink href="http://appsforkids.solidworks.com/">"Apps For Kids"</ExternalLink>. The extent of our publicly available research can be viewed in the image gallery below.
            </span>
            }>
          <ImageGallery images={[
            {
              src: require("../assets/images/scope-p1.png"),
              alt: "Project research poster, part 1."
            },
            {
              src: require("../assets/images/scope-p2.png"),
              alt: "Project research poster, part 2."
            }
          ]}/>
        </ProjectBlock>
      </ProjectPage>
    );
  }
}

export default SCOPE;
