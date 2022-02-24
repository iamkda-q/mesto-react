import React from "react";
import PopupWithForm from "./PopupWithForm";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {

    const [avatar, setAvatar] = React.useState("");
    const currentAvatar = React.useRef();

    function handleChange(evt) {
        setAvatar(evt.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
      
        onUpdateAvatar({
          avatar: currentAvatar.current.value,
        });
        setAvatar("");
      } 

      
    function handleClosePopup() {
        onClose();
        setAvatar("");
    }


    return (
        <PopupWithForm
            name="avatar"
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={handleClosePopup}
            buttonText="Обновить"
            onSubmit={handleSubmit}
        >
            <div className="popup__input-with-error">
                <input
                    id="form-avatar"
                    type="url"
                    className="popup__text popup__text_parameter_avatar"
                    name="avatar"
                    placeholder="Ссылка на аватар"
                    required
                    ref={currentAvatar}
                    onChange={handleChange}
                    value={avatar}
                />
                <span className="popup__error-text form-avatar-error"></span>
            </div>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;
