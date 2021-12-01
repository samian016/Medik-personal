import React from "react";
import { Accordion, Container } from "react-bootstrap";
import "./Question.css";
/* Question component , this one is statis now , in futute this will dynamic, user will be able to ask question using input field, but now this is static */
const Question = () => {
  return (
    <Container>
      <Accordion defaultActiveKey="0">
        <Accordion.Item eventKey="0">
          <Accordion.Header className="Qheader">
            Should I Go Gluten-Free?
          </Accordion.Header>
          <Accordion.Body>
            Only if you have celiac disease, when gluten (a protein in grains)
            damages your small intestine. Experts no longer think gluten causes
            rashes, stomachaches, or weight gain in people without the disease.
            It can’t hurt to skip gluten-rich foods like cookies and white
            bread. But don’t ditch whole grains unless your doctor says to. They
            fill you up and are full of healthy nutrients.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>Is a Daily Glass of Wine Healthy?</Accordion.Header>
          <Accordion.Body>
            Not for everyone. Small amounts of alcohol may stave off heart
            disease, and lower the odds of stroke and diabetes, too. But heavy
            drinking ups your chances for liver and heart damage, plus breast,
            colon, and other cancers. If you don’t drink, don’t start. If you
            do, limit yourself to one drink a day if you’re a woman, or two if
            you’re a man.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>Are Short Workouts Worth It?</Accordion.Header>
          <Accordion.Body>
            Yes. Longer is better, but you can get by with quick bouts of
            activity when that’s all you have time for. The CDC suggests 150
            minutes of moderate-intensity aerobic activity each week (like
            walking or biking at a medium-fast pace), plus two sessions of
            muscle-strengthening exercise. Several 10- minute bursts of exercise
            each day can get you to this goal and help keep you fit.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>Is Tap Water Safe to Drink?</Accordion.Header>
          <Accordion.Body>
            Yes. The U.S. has some of the safest drinking water in the world.
            Unless your water comes from a small community system or private
            well, the Environmental Protection Agency (EPA) checks it closely
            for bacteria and harmful chemicals like lead.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            Sugar or High Fructose Corn Syrup?
          </Accordion.Header>
          <Accordion.Body>
            5 / 11 High-fructose corn syrup, which does come from corn, gets a
            bad rap. But your body processes it almost the same way it does
            “table” or “regular” sugar, which is made from cane or beets. Your
            best bet is to go easy on both. High amounts of any added sugar can
            lead to weight gain and problems like high blood pressure, type 2
            diabetes, and heart disease.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default Question;
