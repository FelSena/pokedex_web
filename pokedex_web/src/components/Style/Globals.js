import styled from "styled-components";

export const Flex = styled.div`
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "100vh"};
  min-height: ${(props) => props.minheight || "78px"};
  display: flex;
  flex-direction: ${(props) => props.direction || "inline"};
  align-items: ${(props) => props.alignitems || "center"};
  justify-content: ${(props) => props.justifycontent || "center"};
  margin: ${(props) => props.margin || "0"};
  padding: ${(props) => props.padding || "0"};
  box-sizing: border-box;
`;

export const ThemeImg = styled.img`
  width: ${(props) => props.width};
  height: auto;
`;

export const ThemeTitle1 = styled.h1`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 900;
  font-size: 52px;
  line-height: 70px;
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0"};
`;

export const ThemeTitle2 = styled.h2`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 42px;
  line-height: 40px;
  color: ${(props) => props.color};
  margin: ${(props) => props.margin || "0"};
`;

export const ThemeSpan = styled.span`
  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 300;
  font-size: 16px;
  line-height: 20px;
  color: ${(props) => props.color};
`;

export const Main = styled.main`
  width: 100%;
  height: 100%;
`;

export const ThemeButton = styled.button`
  width: 196px;
  height: 56px;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  background-color: #48d0b0;
  box-shadow: 0px 8px 8px -2px rgba(0, 0, 0, 0.25);

  @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
  font-family: "Roboto", sans-serif;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  color: #fff;

  &:hover {
    background-color: #69d8be;
  }
`;

export const ThemeInput = styled.input`
  width: ${(props) => props.width};
  height: 75%;
  border: none;
  padding: 0 0.5%;
  box-sizing: border-box;

  ::placeholder {
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    color: #999;
  }
`;
