function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="gallery__element">
            <div className="gallery__photo-wrapper">
                <img
                    src={card.link}
                    alt={card.name}
                    className="gallery__photo"
                    onClick={handleClick}
                />
            </div>
            <h2 className="gallery__figcaption">{card.name}</h2>
            <div className="gallery__like-container">
                <button
                    type="button"
                    className="gallery__like page__hover page__hover_shade_super-dark"
                    aria-label
                ></button>
                <p className="gallery__like-count">{card.likes.length}</p>
            </div>
            <button
                type="button"
                className="gallery__trash page__hover page__hover_shade_super-dark"
                aria-label
            ></button>
        </li>
    );
}

export default Card;
