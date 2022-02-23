import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";

function App() {
    const [isEditProfilePopupOpen, setProfileOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setPlaceOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setAvatarOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const [currentUser, setCurrentUser] = React.useState({
        name: "Loading...",
        about: "Loading...",
    });

    React.useEffect(() => {
        api.getInitialUserInfo()
            .then((res) => {
                setCurrentUser(res);
            })
            .catch((res) => {
                console.log(
                    `${api.errorHandler(res.status)} Номер ошибки - ${
                        res.status ? res.status : "неизвестен"
                    }. Всего хорошего!`
                );
            });
    }, []);

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
        setSelectedCard(card);
    }

    /* Не понял зачем по заданию реализовывать новый обработчик, если можно в props onClose каждого попапа записать соответствующую функцию handle____
и попап также будет закрываться */
    function closeAllPopups() {
        setProfileOpen(false);
        setPlaceOpen(false);
        setAvatarOpen(false);
        setSelectedCard(null);
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
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
                    buttonText="Сохранить"
                >
                    <div className="popup__input-with-error">
                        <input
                            id="form-name"
                            type="text"
                            className="popup__text popup__text_parameter_name"
                            name="name"
                            placeholder="Ваше имя"
                            minLength="2"
                            maxLength="40"
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
                            minLength="2"
                            maxLength="200"
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
                    buttonText="Добавить"
                >
                    <div className="popup__input-with-error">
                        <input
                            id="form-figcaption"
                            type="text"
                            className="popup__text popup__text_parameter_figcaption"
                            name="name"
                            placeholder="Название"
                            minLength="2"
                            maxLength="30"
                            required
                        />
                        <span className="popup__error-text form-figcaption-error"></span>
                    </div>
                    <div className="popup__input-with-error">
                        <input
                            id="form-photo-link"
                            type="url"
                            className="popup__text popup__text_parameter_photo-link"
                            name="link"
                            placeholder="Ссылка на картинку"
                            required
                        />
                        <span className="popup__error-text form-photo-link-error"></span>
                    </div>
                </PopupWithForm>

                <PopupWithForm
                    name="are-you-sure"
                    title="Вы уверены?"
                    isOpen={false}
                    buttonText="Абсолютли!"
                />
                <PopupWithForm
                    name="avatar"
                    title="Обновить аватар"
                    isOpen={isEditAvatarPopupOpen}
                    onClose={closeAllPopups}
                    buttonText="Обновить"
                >
                    <div className="popup__input-with-error">
                        <input
                            id="form-avatar"
                            type="url"
                            className="popup__text popup__text_parameter_avatar"
                            name="avatar"
                            placeholder="Ссылка на аватар"
                            required
                        />
                        <span className="popup__error-text form-avatar-error"></span>
                    </div>
                </PopupWithForm>
                <ImagePopup card={selectedCard} onClose={closeAllPopups} />
            </div>
        </CurrentUserContext.Provider>
    );
}

export default App;
