import styled from "@emotion/styled";

export const CardWrapper = styled.div`
  list-style: none;
  position: relative;
  transition: opacity 0.3s;
`

export const CardLines = styled.ul`
  
`

export const CardLine = styled.li`
  
`

export const CardAvatarMeta = styled.div`
  padding-inline-end: 16px;
`

export const CardAvatar = styled.span`
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  overflow: hidden;
  vertical-align: middle;
  background: transparent;
  border: 1px solid transparent;
  width: 96px;
  height: 96px;
  border-radius: 50%;
`

export const CardAvatarImage = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`
