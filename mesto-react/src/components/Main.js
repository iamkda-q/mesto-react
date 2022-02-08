function Main(props) {

  return (
    <main className="main">
      <section className="profile">
          <img src='#' alt="аватар пользователя" className="profile__avatar" onClick={props.onEditAvatar}/>
          <img src='./images/change_profile.svg' alt="!" className="profile__change-avatar" />
          <div className="profile__info">
              <h1 className="profile__name"></h1>
              <button type="button" className="profile__edit-profile-button page__hover page__hover_shade_dark" aria-label
              onClick={props.onEditProfile}></button>
              <p className="profile__vocation"></p>
          </div>
          <button type="button" className="profile__edit-gallery-button page__hover page__hover_shade_dark"
          onClick={props.onAddPlace}></button>
      </section>

      <section className="gallery">
          <ul className="gallery__list"></ul>
      </section>
    </main>
  )
}

export default Main;