import React from "react";
import change_profile from "../images/change_profile.svg";
import api from "../utils/api";
import Card from "./Card";

function Main({ onEditAvatar, onEditProfile, onAddPlace, onCardClick }) {
    const [userName, setUserName] = React.useState("Loading...");
    const [userDescription, setUserDescription] = React.useState("Loading...");
    const [userAvatar, setUserAvatar] = React.useState("#");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getInitialUserInfo()
            .then((res) => {
                setUserName(res.name);
                setUserDescription(res.about);
                setUserAvatar(res.avatar);
            })
            .catch((res) => {
                console.log(
                    `${api.errorHandler(res.status)} Номер ошибки - ${
                        res.status ? res.status : "неизвестен"
                    }. Всего хорошего!`
                );
            });
    }, []);

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

    return (
        <main className="main">
            <section className="profile">
                <img
                    src={userAvatar}
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
                    <h1 className="profile__name">{userName}</h1>
                    <button
                        type="button"
                        className="profile__edit-profile-button page__hover page__hover_shade_dark"
                        aria-label
                        onClick={onEditProfile}
                    ></button>
                    <p className="profile__vocation">{userDescription}</p>
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
