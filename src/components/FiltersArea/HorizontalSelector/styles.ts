import styled from 'styled-components'

export const HorizontalSelector = styled.div`
  display: flex;
  align-items: center;

  border-radius: 20px;
  background: #ffffff;

  width: 100%;

  font-size: 18px;
  color: black;
`

export const List = styled.div`
  display: flex;
  overflow-x: auto;
  margin-left: 20px;

  &::-webkit-scrollbar-track {
    background-color: white;
  }

  &::-webkit-scrollbar {
    height: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #06092b;
    border-radius: 20px;
  }
`

export const Option = styled.div`
  display: flex;
  align-items: center;

  background: #e4e8f1;
  border-radius: 20px;

  width: 100%;
  margin: 4px;
  padding: 18px 24px;

  white-space: nowrap;
  font-size: 18px;
  color: black;
  cursor: pointer;
`
