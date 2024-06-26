import styled from 'styled-components'
import { Colors } from '../../global'

export const ProductButtonContainer = styled.div`
  button {
    padding: 8px;
    background-color: ${Colors.cancelButtonColor};
    color: ${Colors.whiteColor};
    border: none;
    cursor: pointer;
    transition: all ease-in-out 0.2s;
    text-transform: uppercase;
    margin-top: 20px;
    width: 44px;
    height: 44px;
    font-size: 20px;
    border-radius: 4px;

    &:hover {
      opacity: 80%;
      transition: all ease-in-out 0.2s;
    }

    @media screen and (max-width: 767px) {
      margin-top: 0;
      margin-left: 10px;
    }
  }
`
