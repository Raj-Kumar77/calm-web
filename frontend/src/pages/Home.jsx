import React from "react";
import Header from "../components/Header";
import { Col, Row, Button, Card, Tabs, Tab } from "react-bootstrap";
import TestimonialSlier from "../components/TestimonialSlier";
import FaqAccordian from "../components/FaqAccordian";
import moon from "../assets/halfmoon.svg";
import bandge from "../assets/bandage.svg";
import leaf from "../assets/leaf.svg";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      {/* navbar  */}
      <Header />

      {/* hero-section  */}
      <section className="container mt-5">
        <Row className="align-items-center" style={{}}>
          <Col md={8} className="left-hero" style={{ padding: "0 7rem" }}>
            <h1 style={{ fontSize: "3rem", color: "#1a3e6f" }}>
              Calm your mind. Change your life.
            </h1>
            <p style={{ fontSize: "1.125rem", marginTop: "1rem" }}>
              Mental health is hard. Getting support doesn't need to be. Our app
              puts the tools to feel better in your back pocket, with
              personalized content to manage stress and anxiety, get better
              sleep, and feel more present in your life. Relax your mind, and
              wake up as the person you want to be.
            </p>
            <Button className="btn btnn mt-3">Try Calm For Free</Button>
          </Col>
          <Col md={4}>
            <div className="videoo">
              <video
                autoPlay
                loop
                muted
                src="https://www.calm.com/_n/videos/calm-content-preview.mp4"
                style={{
                  width: "70%",
                  borderRadius: "15px",
                  border: "8px solid #f1f1f1",
                }}
              ></video>
            </div>
          </Col>
        </Row>
      </section>

      {/* cards */}
      <section className="mt-5">
        <h1 className="headingg">We're here to help you feel better.</h1>
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <Card style={{ border: "none", padding: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={bandge}
                  style={{ width: "20%", marginBottom: "2rem" }}
                />

                <Card.Body>
                  <Card.Title>
                    <h1>Stress less</h1>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">Learn more</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card style={{ border: "none", padding: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={moon}
                  style={{ width: "20%", marginBottom: "2rem" }}
                />

                <Card.Body>
                  <Card.Title>
                    <h1>Stress less</h1>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">Learn more</Card.Link>
                </Card.Body>
              </Card>
            </div>
            <div className="col-md-4">
              <Card style={{ border: "none", padding: "1rem" }}>
                <Card.Img
                  variant="top"
                  src={leaf}
                  style={{ width: "20%", marginBottom: "2rem" }}
                />

                <Card.Body>
                  <Card.Title>
                    <h1>Stress less</h1>
                  </Card.Title>
                  <Card.Text>
                    Some quick example text to build on the card title and make
                    up the bulk of the card's content.
                  </Card.Text>
                </Card.Body>
                <Card.Body>
                  <Card.Link href="#">Learn more</Card.Link>
                </Card.Body>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* banner */}
      <section className="mt-5">
        <div className="banner"></div>
      </section>

      {/* tabs */}
      {/* <section className="mt-5">
        <div className="container">
          <Tabs
            defaultActiveKey="sleep"
            id="justify-tab-example"
            className="mb-3"
            fill
            style={{ border: "none" }}
          >
            <Tab eventKey="sleep" title="Sleep" className="tabb-title">
              Tab content for Home
            </Tab>
            <Tab
              eventKey="stress"
              title="Stress & Anxiety"
              className="tabb-title"
            >
              Tab content for Profile
            </Tab>
            <Tab eventKey="focus" title="Focus" className="tabb-title">
              Tab content for Profile
            </Tab>
            <Tab
              eventKey="relaxation"
              title="Relaxation"
              className="tabb-title"
            >
              Tab content for Profile
            </Tab>
            <Tab
              eventKey="building-habits"
              title="Building Habits"
              className="tabb-title"
            >
              Tab content for Loooonger Tab
            </Tab>
          </Tabs>
        </div>
      </section> */}

      {/* testimonials */}
      <section className="mt-5">
        <h1 className="headingg">Over 2 million 5-star reviews.</h1>
        <div className="container">
          <TestimonialSlier />
        </div>
      </section>

      {/* faq  */}
      <section className="mt-5">
        <h1 className="headingg">Frequently asked question</h1>
        <div className="container">
          <FaqAccordian />
        </div>
      </section>

      {/* footer  */}
      <section className="mt-5">
        <Footer/>
      </section>
    </div>
  );
};

export default Home;
