import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 10;

  background: #e4e8f1;
  border-radius: 12px;

  padding: 24px;

  color: black;
  cursor: text;
`

export const MagnifierIcon = styled.img`
  display: inline-block;
  height: 16px;
  margin: 8px 8px 8px 0;
`

export const Input = styled.input`
  height: 100%;
  width: 100%;

  border: none;
  background: inherit;
  outline: none;

  font-weight: 500;
  font-size: 20px;
  line-height: 26px;
`

export const ClearIcon = styled.img`
  display: inline-block;
  height: 20px;
  margin: 8px 0 8px 8px;
  cursor: pointer;
`
