import { HeroCard, Size } from "components/hero-card";
import { Dota2Heroes } from "utility/hero-types";

type HeroCardsProps = {
  cards: Dota2Heroes;
  cardSize?: Size;
};

export const HeroCards = ({ cards, cardSize }: HeroCardsProps) => {
  return (
    <>
      {cards.map((card, index) => {
        return <HeroCard key={index} hero={card} size={cardSize} />;
      })}
    </>
  );
};
