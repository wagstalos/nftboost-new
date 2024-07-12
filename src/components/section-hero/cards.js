import CardsLeft from "@/assets/cards-left.png";
import CardsRight from "@/assets/cards-right.png";
import Image from "next/image";
export function CardsHero() {
  return (
    <div className="relative w-area-cards-mobile desktop:w-full h-area-cards-mobile desktop:h-area-card-desk mt-12 desktop:mt-20">
      <Image
        src={CardsLeft}
        alt="CardsLeft"
        quality={70}
        className="absolute top-0 left-8 desktop:left-0 w-1/2 desktop:w-auto z-10"
      />
      <Image
        src={CardsRight}
        alt="CardsRight"
        className="absolute top-0 desktop:right-0 right-8 w-1/2 desktop:w-auto"
      />
    </div>
  );
}
