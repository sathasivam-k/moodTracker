import {withRouter} from 'react-router-dom'
import Cookies from 'js-cookie'
import {
  HeaderNav,
  HeadingContainer,
  Heading,
  MenuContainer,
  HomeMenu,
  ReportMenu,
  ButtonContainer,
  LogoutButton,
} from './styledComponents'

const Header = props => {
  const onClickLogout = () => {
    const {history} = props
    Cookies.remove('jwt_token')
    history.replace('/login')
  }

  return (
    <HeaderNav>
      <HeadingContainer>
        <Heading>Daily Mood Tracker</Heading>
      </HeadingContainer>
      <MenuContainer>
        <HomeMenu>Home</HomeMenu>
        <ReportMenu>Reports</ReportMenu>
        <ButtonContainer>
          <LogoutButton type="button" onClick={onClickLogout}>
            Logout
          </LogoutButton>
        </ButtonContainer>
      </MenuContainer>
    </HeaderNav>
  )
}

export default withRouter(Header)
