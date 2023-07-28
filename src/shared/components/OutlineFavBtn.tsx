//External dependencies
import { AiOutlineStar } from "react-icons/ai";
import { styled } from "styled-components";

const Button = styled.button`
  background-color: white;
  border: none;
  padding: 8px;
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

const OutlineFavBtn = () => (
  <Button>
    <AiOutlineStar />
  </Button>
);

export { OutlineFavBtn };
