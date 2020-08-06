import React from "react";
import { Modal } from "react-bootstrap";

import {
  Body,
  Button,
  Title,
  Header,
  Step,
  GifContainer,
  Gif,
  Icon,
} from "./ModalTutorial.styles";
import { LogoIcon } from "../../components/navbar.component/NavBar.styles";
import Nodes from "../../components/navbar.component/logo.svg";

const ModalTutorial = ({ handleTutorial }) => {
  return (
    <Modal size="lg" show={true} centered>
      <Header>
        <Title>
          PATHFINDER VISUALIZER
          <Icon>
            <LogoIcon img={Nodes} />
          </Icon>
        </Title>
      </Header>
      <Modal.Body>
        <Body>
          A pathfinder visualizer developed with React & Styled Components! In
          order to use it:
        </Body>
        <Step>◉ create obstacles yourself or generate them randomly</Step>
        <GifContainer>
          <Gif
            img={
              "https://firebasestorage.googleapis.com/v0/b/financial-v1.appspot.com/o/images%2Fgif0.gif?alt=media&token=ffb9649e-2b0a-4696-802b-c71ab74188c8"
            }
          />
          <Gif
            img={
              "https://firebasestorage.googleapis.com/v0/b/financial-v1.appspot.com/o/images%2Fgif1.gif?alt=media&token=09971a22-e490-408a-b74f-2a9a8729eac3"
            }
          />
        </GifContainer>
        <Step>◉ select the algorithm and visualize it!</Step>
        <GifContainer>
          <Gif
            img={
              "https://firebasestorage.googleapis.com/v0/b/financial-v1.appspot.com/o/images%2Fgif2.gif?alt=media&token=60f79b80-324e-444b-a2a4-d8aa5032ef6d"
            }
          />
          <Gif
            img={
              "https://firebasestorage.googleapis.com/v0/b/financial-v1.appspot.com/o/images%2Fgif3.gif?alt=media&token=69d2ad2a-6f93-45a8-94a9-f1f2fdde7ad7"
            }
          />
        </GifContainer>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={handleTutorial}>GOT IT</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ModalTutorial;
