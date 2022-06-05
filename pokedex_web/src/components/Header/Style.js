import styled from "styled-components";

export const HeaderDefault = styled.div`
  width: 100%;
  height: 12%;
  min-height: 98px;
  display: flex;
  flex-direction: inline;
  align-items: center;
  justify-content: space-between;
  margin: 0;
  padding: 0 20% 0 12%;
  box-sizing: border-box;
  box-shadow: 0px 8px 10px -2px rgba(0, 0, 0, 0.25);
`;

export const NavList = styled.ul`
  width: 35%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  a {
    text-decoration: none;
    color: #000;
  }

  a:hover {
    color: #999;
  }

  li {
    @import url("https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");
    font-family: "Roboto", sans-serif;
    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 22px;
  }

  .active {
    li {
      font-weight: 900;
      border-bottom: 3px solid black;
      line-height: 1.5em;
    }
  }
`;
