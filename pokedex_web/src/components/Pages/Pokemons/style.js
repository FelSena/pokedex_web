import styled from "styled-components";
import seatchIcon from "../../assets/search.svg";
export const SearchForm = styled.form`
  width: 100%;
  height: 56px;
  display: flex;
  flex-direction: inline;
  align-items: center;
  justify-content: space-between;
  padding: 0 2.5%;
  box-sizing: border-box;
  margin-top: 1.5%;
`;

export const CustomInput = styled.div`
  width: 100%;
  height: 56px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 5%;
  box-sizing: border-box;
  border-radius: 40px;
  border: solid 1px rgb(207, 206, 206);
  box-shadow: 0px 8px 10px -2px rgba(0, 0, 0, 0.25);
`;

export const SearchButton = styled.button`
  width: 30px;
  height: 30px;
  background-image: url(${seatchIcon});
  background-repeat: no-repeat;
  background-position: center center;
  background-size: contain;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;
