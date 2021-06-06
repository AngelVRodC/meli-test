import styled from 'styled-components';
import { Grid, Row } from 'react-styled-flexboxgrid';


export const GeneralContainer = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.secondary};
`;

export const Container = styled(Grid)`
  background-color: #fff;
  margin-top: 30px;
`;