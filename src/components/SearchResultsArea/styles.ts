import styled from 'styled-components'

export const SearchResultsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  background: #ffffff;

  width: 70%;
  max-height: 60%;

  margin-top: 10px;
  padding: 24px;
`

export const ScrollableArea = styled.div`
  height: 100%;
  width: 100%;

  margin-right: 16px;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar-track {
    background-color: white;
  }

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-thumb {
    background-color: #06092b;
    border-radius: 20px;
  }
`
