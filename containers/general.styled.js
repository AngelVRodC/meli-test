import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';


export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled(Grid)`
  background-color: #fff;
  margin-bottom: 20px;
  border-radius: 20px;
`;

export const ErrorContainer = styled.div`
  color: red;
  margin: auto;
  font-size: 14px;
`;