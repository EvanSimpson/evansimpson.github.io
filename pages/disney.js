import React, { Component } from 'react';

import ExternalLink from '../components/ExternalLink/ExternalLink';
import ProjectPage from '../components/ProjectPage/ProjectPage';
import ProjectBlock from '../components/ProjectBlock/ProjectBlock';

class Disney extends Component {
  render() {
    return (
      <ProjectPage title={ "Disney Technology Showcase" }
      link={"http://pdfaiw.uspto.gov/.aiw?PageNum=0&docid=20160358627&IDKey=C016AFB1DC30&HomeUrl=http%3A%2F%2Fappft.uspto.gov%2Fnetacgi%2Fnph-Parser%3FSect1%3DPTO2%2526Sect2%3DHITOFF%2526p%3D1%2526u%3D%25252Fnetahtml%25252FPTO%25252Fsearch-bool.html%2526r%3D1%2526f%3DG%2526l%3D50%2526co1%3DAND%2526d%3DPG01%2526s1%3D%252522simpson%2C%252Bevan%252522.IN.%2526OS%3DIN%2F%252522simpson%2C%252Bevan%252522%2526RS%3DIN%2F%252522simpson%2C%252Bevan%252522"}
      linkText={ "Link to patent application" }>
        <ProjectBlock textContent={
          <span>
            As a part of a 5 month internship with The Walt Disney Company, I developed a hardware and software package for authoring multi-media presentations which connect to and control various electronic devices in the presentation space. This project was designed to tie all of the technologies of the <ExternalLink href="https://disneysynclink.com/">Disney SyncLink platform</ExternalLink> together, without the need to be inside a Disney theme park for the technologies to work. The culmination of the work was the application for the patent linked above.
          </span> }
          img={require("../assets/images/patent-fig.png")}
          imgAlt={ "Patent illustration: A group of people seated around a table while one person gives a presentation with the Technology Showcase." }>
        </ProjectBlock>
        <ProjectBlock title={ "A Universal Remote" }
          textContent={"The selling point of the Technology Schowcase is that it is able to seamlessly interopt with desktop publishing suites and a range of devices which all use their own communication protocols on various wireless communication channels. The hardware package needed to support connecting to devices over Bluetooth, WiFi, and broadcasting information over infrafed light (like a television remote). Meanwhile, the desktop software has to manage displaying slide shows, videos, and other document formats, while communicating with the hardware package."}>
        </ProjectBlock>
        <ProjectBlock title={"Other Work"}
          textContent={"Having reached milestones on the Technology Showcase ahead of schedule, I also picked up other work on the SyncLink platform. The platform collects data from auditors at every park, kitchen, and maintenance bay owned by Disney around the world, daily. I took up the responsibility of developing a data pipeline to perform extract-transform-load operations and analytics processing, as well as automating daily backup archiving of that data."}/>
      </ProjectPage>
    );
  }
}

export default Disney;
