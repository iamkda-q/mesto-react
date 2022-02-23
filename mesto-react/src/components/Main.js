import React from "react";
import change_profile from "../images/change_profile.svg";
import api from "../utils/api";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const currentUser = React.useContext(CurrentUserContext);
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialCards()
            .then((res) => {
                setCards(res);
            })
            .catch((res) => {
                console.log(
                    `${api.errorHandler(res.status)} Номер ошибки - ${
                        res.status ? res.status : "неизвестен"
                    }. Всего хорошего!`
                );
            });
    }, []);

    function handleCardLike(card) {
        const isLiked = card.likes.some((like) => like._id === currentUser._id);
        api.changeLike(card._id, isLiked).then((newCard) => {
            setCards(
                cards.map((item) => {
                    if (newCard._id === item._id) {
                        return newCard;
                    }
                    return item;
                })
            );
        });
    }

    function handleCardDelete(card) {
        api.deleteCard(card._id).then(() => {
            setCards(cards.filter(item => item._id !== card._id))
        })
    }

    return (
        <main className="main">
            <section className="profile">
                <img
                    src={currentUser.avatar}
                    alt="аватар пользователя"
                    className="profile__avatar"
                    onClick={onEditAvatar}
                />
                <img
                    src={change_profile}
                    alt="!"
                    className="profile__change-avatar"
                />
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button
                        type="button"
                        className="profile__edit-profile-button page__hover page__hover_shade_dark"
                        aria-label
                        onClick={onEditProfile}
                    ></button>
                    <p className="profile__vocation">{currentUser.about}</p>
                </div>
                <button
                    type="button"
                    className="profile__edit-gallery-button page__hover page__hover_shade_dark"
                    onClick={onAddPlace}
                ></button>
            </section>

            <section className="gallery">
                <ul className="gallery__list">
                    {cards
                        ? cards.map((item) => (
                              <Card
                                  key={item._id}
                                  card={item}
                                  onCardClick={onCardClick}
                                  onCardLike={handleCardLike}
                                  onCardDelete={handleCardDelete}
                              />
                          ))
                        : null}
                </ul>
                res.
            </section>
        </main>
    );
}

export default Main;
