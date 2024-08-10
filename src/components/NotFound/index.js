import {
  NotFountImageContainer,
  NotFoundImg,
  NotFoundHeading,
  NotFoundNote,
  NotFoundVideoView,
} from './styledComponents'

const NotFound = () => (
  <>
    <NotFountImageContainer>
      <NotFoundVideoView>
        <NotFoundImg
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png"
          alt="not found"
        />
        <NotFoundHeading>Page Not Found</NotFoundHeading>
        <NotFoundNote>
          we are sorry, the page you requested could not be found.
        </NotFoundNote>
      </NotFoundVideoView>
    </NotFountImageContainer>
  </>
)

export default NotFound
