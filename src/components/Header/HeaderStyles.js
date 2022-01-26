import styled from 'styled-components'

export const Container = styled.nav`
  display: flex;
  justify-content: space-between;
  padding-top: 2rem;
  max-width: 1040px;
  margin: auto;

  @media ${(props) => props.theme.breakpoints.sm} {
    ${
      '' /* display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 60px);
    grid-column-gap: 0.5rem;
    grid-row-gap: 0.5rem; 
    padding-top: 1rem;
    */
    }
  }
`

export const Div1 = styled.div`
  display: flex;
  gap: 2rem;
  align-content: center;

  }
`

export const Div2 = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

// Navigation Links
export const NavLink = styled.a`
  font-size: 2rem;
  line-height: 32px;
  color: rgba(255, 255, 255, 0.75);
  transition: all 0.5s ease-out;
  &:hover {
    color: teal;
    opacity: 1;
    cursor: pointer;
    transform: rotate(-6deg);
  }
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.5rem;
  }
`

export const SocialIcons = styled.a`
  transition: 0.4s ease;
  color: white;
  border-radius: 50px;
  padding: 8px;
  &:hover {
    background-color: #212d45;
    transform: scale(1.2);
    cursor: pointer;
  }
`
