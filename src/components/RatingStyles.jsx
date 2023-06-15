import styled, { css } from 'styled-components';
 
export const Container = styled.div`
   display: flex;
   justify-content: inline;
   align-items: center;
   min-height: 1px;
   font-size: 20px;

   @media (max-width: 480px) {
    flex-direction: column;
    font-size: 16px;
  }

`
export const Radio = styled.input`
   display: none;
`
export const Rating = styled.div`
   cursor: pointer;

   ${({ responsive }) =>
    responsive &&
    css`
      @media (max-width: 480px) {
        font-size: 14px;
      }
    `}
`