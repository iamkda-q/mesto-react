function PopupWithForm(props) {

  return (
    <div className={`popup popup_${props.name} ${props.isOpen ? "popup_opened" : ""}`}>
      <div className="popup__container popup__container_type_form">
          <form className="popup__form" name={`popup-form-${props.name}`} novalidate>
              <h2 className="popup__option">{props.title}</h2>
              <fieldset className="popup__info page__fieldset">
                  <div className="popup__input-with-error">
                      <input id='form-name' type="text" className="popup__text popup__text_parameter_name" name="name"
                      placeholder="Ваше имя" minlength="2" maxlength="40" required />
                      <span className="popup__error-text form-name-error"></span>
                  </div>
                  <div className="popup__input-with-error">
                      <input id='form-vocation' type="text" className="popup__text popup__text_parameter_vocation" name="vocation"
                      placeholder="Род деятельности" minlength="2" maxlength="200" required />
                      <span className="popup__error-text form-vocation-error"></span>
                  </div>
                  <button type="submit" className="popup__save-button page__hover page__hover_shade_light">Сохранить</button>
              </fieldset>
          </form>
          <button type="button" className="popup__close-button page__hover page__hover_shade_dark" aria-label></button>
      </div>
    </div>
  )
}

export default PopupWithForm;