import styled from 'styled-components'

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  overflow: hidden;
`

export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  padding-top: 3rem;
  padding-bottom: 3rem;
  place-items: center stretch;
  column-gap: 3rem;
  row-gap: 4rem;
  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    padding: 2rem;
    padding-bottom: 0;
  }
`
export const BlogCard = styled.div`
  border-radius: 10px;
  box-shadow: 3px 3px 20px rgba(80, 78, 78, 0.5);
  text-align: center;
  width: 400px;
  transition: all .6s ease-in-out;
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
  }
  &:hover {
    box-shadow: 3px 3px 20px rgba(100, 98, 98, 0.9);
`
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
`

export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  color: #9cc9e3;
  padding: 0.5rem 0;
  font-size: ${(props) => (props.large ? '3rem' : '2rem')};
`

export const Hr = styled.hr`
  width: 80px;
  height: 4px;
  margin: 20px auto;
  border: 0;
  border-radius: 14px;
  background: #006666;
`

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`

export const CardInfo = styled.p`
  width: 100%;
  min-height: 15rem;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding: 0.3rem;
  }
`

export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`

export const ExternalLinks = styled.a`
  color: #fff8f8;
  font-size: 1.6rem;
  padding: 1rem 1.5rem;
  background: #003637;
  border-radius: 2rem;
  transition: 0.5s ease-out;
  &:hover {
    color: #d4c0c0;
    background: #006666;
  }
`

export const TagList = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 2rem;
`
export const Tag = styled.li`
  color: teal;
  font-size: 1.5rem;
`
