import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import PopupWithForm from "./components/PopupWithForm";
import ImagePopup from "./components/ImagePopup";

function App() {



  const [isEditProfilePopupOpen, setProfileOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setPlaceOpen] =  React.useState(false);
  const [isEditAvatarPopupOpen, setAvatarOpen] =  React.useState(false);

  function handleEditAvatarClick() {
    setAvatarOpen(true);
  }

  function handleEditProfileClick() {
    setProfileOpen(true);
  }

  function handleAddPlaceClick() {
    setPlaceOpen(true);
  }

  return (
    <div className="page">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick}/>
      <Footer />
      <PopupWithForm name="edit-profile" title="Редактировать профиль" isOpen={isEditProfilePopupOpen}/>
      <PopupWithForm name="add-photo" title="Новое место" isOpen={isAddPlacePopupOpen}/>
      <ImagePopup />
      <PopupWithForm name="are-you-sure" title="Вы уверены?" isOpen={false}/>
      <PopupWithForm name="avatar" title="Обновить аватар" isOpen={isEditAvatarPopupOpen}/>

      <template id="gallery-item">
          <li className="gallery__element">
              <div className="gallery__photo-wrapper">
                <img src="#" alt="#" className="gallery__photo" />
              </div>
              <h2 className="gallery__figcaption"></h2>
              <div className="gallery__like-container">
                <button type="button" className="gallery__like page__hover page__hover_shade_super-dark" aria-label></button>
                <p className="gallery__like-count">0</p>
              </div>
              <button type="button" className="gallery__trash page__hover page__hover_shade_super-dark" aria-label></button>
          </li>
      </template>
    </div>
  );
}

export default App;
