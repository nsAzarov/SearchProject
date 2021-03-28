import styled from 'styled-components'

export const FiltersArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  border-radius: 20px;
  background: #ffffff;

  width: 70%;
  max-height: 60%;

  margin-top: 10px;
  padding: 24px;

  color: black;
`

export const SelectedFilters = styled.div`
  display: flex;
  width: 100%;
`

export const SelectedOption = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  padding: 0 5px;
  margin: 0 2px 10px;

  border: 1px dashed black;
  border-radius: 5px;

  color: black;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  cursor: pointer;
`

export const CloseIcon = styled.img`
  display: inline-block;
  height: 14px;
  margin-left: 8px;
`
