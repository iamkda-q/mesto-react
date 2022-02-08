function ImagePopup(props) {

  return (
    <div className="popup popup_full-photo">
      <div className="popup__container popup__container_type_photo">
          <img src="#" alt="#" className="popup__photo" />
          <p className="popup__figcaption"></p>
          <button type="button" className="popup__close-button page__hover page__hover_shade_dark" aria-label></button>
      </div>
    </div>
  )
}

export default ImagePopup;