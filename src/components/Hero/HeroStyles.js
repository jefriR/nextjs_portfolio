import styled from 'styled-components';

export const LeftSection = styled.div`
  width: 100%;
  margin-top:10px;
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 80%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
  @media ${(props) => props.theme.breakpoints.md} {
    width: 100%;
    display: flex;
    flex-direction: column;

    margin: 0 auto;
  }
`;

export const FullSection = styled.div`
  width: 100%;
  @media ${(props) => props.theme.breakpoints.md} {
    height: 100vh;
  }
`;