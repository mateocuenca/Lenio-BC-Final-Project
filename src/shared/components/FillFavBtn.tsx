//External dependencies
import { AiFillStar } from "react-icons/ai";
import { styled } from "styled-components";

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  &:hover {
    background-color: white;
  }

  &:focus {
    background-color: white;
    outline: none; /* Remove the default focus outline */
    box-shadow: none; /* Remove any box shadow on focus */
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const FillFavBtn = ({ onClick, className }) => (
  <Button onClick={onClick} className={className}>
    <AiFillStar />
  </Button>
);

export { FillFavBtn };
