import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setProfileOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setPlaceOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setAvatarOpen] = React.useState(false);
    const [selectedCard, setCardOpen] = React.useState(null);

    function handleEditProfileClick() {
        setProfileOpen(!isEditProfilePopupOpen);
    }

    function handleAddPlaceClick() {
        setPlaceOpen(!isAddPlacePopupOpen);
    }

    function handleEditAvatarClick() {
        setAvatarOpen(!isEditAvatarPopupOpen);
    }

    function handleCardClick(card) {
        setCardOpen(card);
    }

    /* Не понял зачем по заданию реализовывать новый обработчик, если можно в props onClose каждого попапа записать соответствующую функцию handle____
и попап также будет закрываться */
    function closeAllPopups() {
        setProfileOpen(false);
        setPlaceOpen(false);
        setAvatarOpen(false);
        setCardOpen(null);
    }

    return (
        <div className="page">
            <Header />
            <Main
                onEditProfile={handleEditProfileClick}
                onAddPlace={handleAddPlaceClick}
                onEditAvatar={handleEditAvatarClick}
                onCardClick={handleCardClick}
            />
            <Footer />

            <PopupWithForm
                name="edit-profile"
                title="Редактировать профиль"
                isOpen={isEditProfilePopupOpen}
                onClose={closeAllPopups}
            >
                <div className="popup__input-with-error">
                    <input
                        id="form-name"
                        type="text"
                        className="popup__text popup__text_parameter_name"
                        name="name"
                        placeholder="Ваше имя"
                        minlength="2"
                        maxlength="40"
                        required
                    />
                    <span className="popup__error-text form-name-error"></span>
                </div>
                <div className="popup__input-with-error">
                    <input
                        id="form-vocation"
                        type="text"
                        className="popup__text popup__text_parameter_vocation"
                        name="vocation"
                        placeholder="Род деятельности"
                        minlength="2"
                        maxlength="200"
                        required
                    />
                    <span className="popup__error-text form-vocation-error"></span>
                </div>
            </PopupWithForm>

            <PopupWithForm
                name="add-photo"
                title="Новое место"
                isOpen={isAddPlacePopupOpen}
                onClose={closeAllPopups}
            >
                <div class="popup__input-with-error">
                    <input
                        id="form-figcaption"
                        type="text"
                        class="popup__text popup__text_parameter_figcaption"
                        name="name"
                        placeholder="Название"
                        minlength="2"
                        maxlength="30"
                        required
                    />
                    <span class="popup__error-text form-figcaption-error"></span>
                </div>
                <div class="popup__input-with-error">
                    <input
                        id="form-photo-link"
                        type="url"
                        class="popup__text popup__text_parameter_photo-link"
                        name="link"
                        placeholder="Ссылка на картинку"
                        required
                    />
                    <span class="popup__error-text form-photo-link-error"></span>
                </div>
            </PopupWithForm>

            <PopupWithForm
                name="are-you-sure"
                title="Вы уверены?"
                isOpen={false}
            />
            <PopupWithForm
                name="avatar"
                title="Обновить аватар"
                isOpen={isEditAvatarPopupOpen}
                onClose={closeAllPopups}
            >
                <div class="popup__input-with-error">
                    <input
                        id="form-avatar"
                        type="url"
                        class="popup__text popup__text_parameter_avatar"
                        name="avatar"
                        placeholder="Ссылка на аватар"
                        required
                    />
                    <span class="popup__error-text form-avatar-error"></span>
                </div>
            </PopupWithForm>
            <ImagePopup card={selectedCard} onClose={closeAllPopups} />
        </div>
    );
}

export default App;
