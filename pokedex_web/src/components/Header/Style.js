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
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: #999;
  }
`;
