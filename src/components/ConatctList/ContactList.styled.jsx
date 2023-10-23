import styled from 'styled-components';

export const Item = styled.li`
  background-color: #ffffff;
  border: 1px solid #f08080;
  padding: 10px;
  border-radius: 4px;
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 20px;
  width: 466px;
  margin: 5px 0 auto;
  box-shadow: 10px 10px 10px 5px rgba(0, 0, 0, 0.5),
    inset 0px 10px 20px 2px rgba(0, 0, 0, 0.25);
`;

export const List = styled.ul`
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 400px;
  padding: 12px;
  border-radius: 4px;
  background-color: rgba(0, 0, 0, 0.3);
  border: 3px solid #f08080;
  list-style: none;
  margin-top: 20px;
`;
