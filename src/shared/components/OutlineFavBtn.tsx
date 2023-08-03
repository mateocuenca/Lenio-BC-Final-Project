//External dependencies
import { AiOutlineStar } from "react-icons/ai";
import { styled } from "styled-components";

const Button = styled.button`
  background-color: transparent;
  border: none;
  padding: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  &:hover {
    background-color: transparent;
  }

  &:focus {
    background-color: transparent;
    outline: none; /* Remove the default focus outline */
    box-shadow: none; /* Remove any box shadow on focus */
  }

  svg {
    width: 20px;
    height: 20px;
  }
`;

const OutlineFavBtn = ({ onClick, className }: any) => (
  <Button onClick={onClick} className={className}>
    <AiOutlineStar />
  </Button>
);

export { OutlineFavBtn };
