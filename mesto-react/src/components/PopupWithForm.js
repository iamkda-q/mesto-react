function PopupWithForm(props) {
    return (
        <div
            className={`popup popup_${props.name} ${
                props.isOpen ? "popup_opened" : ""
            }`}
        >
            <div className="popup__container popup__container_type_form">
                <form
                    className="popup__form"
                    name={`popup-form-${props.name}`}
                    novalidate
                >
                    <h2 className="popup__option">{props.title}</h2>
                    <fieldset className="popup__info page__fieldset">
                        {props.children}
                        <button
                            type="submit"
                            className="popup__save-button page__hover page__hover_shade_light"
                        >
                            Сохранить
                        </button>
                    </fieldset>
                </form>
                <button
                    type="button"
                    className="popup__close-button page__hover page__hover_shade_dark"
                    aria-label
                    onClick={props.onClose}
                ></button>
            </div>
        </div>
    );
}

export default PopupWithForm;
