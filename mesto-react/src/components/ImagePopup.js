function ImagePopup(props) {
    return (
        <div
            className={`popup popup_full-photo ${
                props.card !== null ? "popup_opened" : ""
            }`}
        >
            <div className="popup__container popup__container_type_photo">
                <img
                    src={`${props.card !== null ? props.card.link : "#"}`}
                    alt={`${props.card !== null ? props.card.name : "#"}`}
                    className="popup__photo"
                />
                <p className="popup__figcaption">{`${
                    props.card !== null ? props.card.name : ""
                }`}</p>
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

export default ImagePopup;
