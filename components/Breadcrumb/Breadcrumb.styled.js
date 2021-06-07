import styled from 'styled-components';
import { Grid } from 'react-styled-flexboxgrid';

export const BreadcrumbContainer = styled(Grid)`
  display: flex;
  justify-content: flex-start;

  min-height: 20px;
  margin: 10px auto;
`;

export const CategoryName = styled.div`
  font-size: 14px;
  margin: 0 5px;
  cursor: pointer;
  &:hover {
    color: blue;
  }
  &::after {
    margin-left: 5px;
    content: ">";
    color: gray;
  }
`;