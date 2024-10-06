import React from "react";
import styled from "styled-components";

const HomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  font-family: Roboto;
`;

const Home = () => {
  return (
    <HomeWrapper>
      <div>Hello</div>
    </HomeWrapper>
  );
};

export default Home;

let styles = {
  profilePicture: {
    borderRadius: 15,
    width: 500,
    height: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#DAC4F7",
  },
};
