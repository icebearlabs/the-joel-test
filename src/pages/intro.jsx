import React from "react";
import { useContext } from "react";
import { Button } from "../components";
import { AppContext } from "../main";

export const IntroPage = () => {
  const { setStatus } = useContext(AppContext);

  const routeToJoel = () => {
    window.location.href =
      "https://www.joelonsoftware.com/2000/08/09/the-joel-test-12-steps-to-better-code/";
  };

  return (
    <div className="flex flex-col h-full">
      <h1>The Joel Test</h1>
      <p>
        The Joel test consists of 12 questions to rate the quality of a software
        team. It doesn’t guarantee success on a high score, nor failure on a low
        score, but it’s pretty good to check if the main requirements for a
        disciplined and able development team are matched.
      </p>
      <p>
        This test should not make you question everything you have done until
        now. It should make you think about ways to improve and get better.
      </p>
      <p>We’ll give you an assessment on your results at the end.</p>
      <div className="flex flex-1 justify-center items-end">
        <Button onClick={routeToJoel} type="secondary">
          Read more about the test
        </Button>
        <Button onClick={() => setStatus("test")}>Take the test</Button>
      </div>
    </div>
  );
};
