import { CardCollectors } from "./card-collectors";
import { ContainerGrid } from "./container";
import { TitleSection } from "./title-section";

import Thumb01 from "@/assets/nfts/01.jpg";
import Thumb02 from "@/assets/nfts/02.jpg";
import Thumb03 from "@/assets/nfts/03.jpg";
import Thumb04 from "@/assets/nfts/04.jpg";

import Thumb05 from "@/assets/nfts/05.jpg";
import Thumb06 from "@/assets/nfts/06.jpg";
import Thumb07 from "@/assets/nfts/07.jpg";
import Thumb08 from "@/assets/nfts/08.jpg";

const collectrs = [
  {
    image: Thumb01,
    name: "Lorem Ipsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb02,
    name: "Lorem Ipsum",
    percent: "+20%",
    value_btc: "0.721",
  },

  {
    image: Thumb03,
    name: "Lorem Ipsum",
    percent: "+20%",
    value_btc: "0.721",
  },

  {
    image: Thumb04,
    name: "Lorem Ipsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb05,
    name: "Lorem Ipsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb06,
    name: "Lorem Ipsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb07,
    name: "Lorem Ipsum",
    percent: "+20%",
    value_btc: "0.721",
  },
  {
    image: Thumb08,
    name: "Lorem Ipsum",
    percent: "+20%",
    value_btc: "0.721",
  },
];
export function SectionCollectors() {
  return (
    <section className="py-28" id="Rank">
      <ContainerGrid>
        <TitleSection
          subtitle="Colecionadores"
          title="Principais colecionadores"
        />
        <div className="grid grid-cols-1 tablet:grid-cols-2 gap-x-4 desktop:gap-x-8 gap-y-4">
          {collectrs.map(({ image, name, percent, value_btc }, index) => (
            <CardCollectors
              key={index}
              position={index + 1}
              image={image}
              name={name}
              percent={percent}
              value_btc={value_btc}
            />
          ))}
        </div>
      </ContainerGrid>
    </section>
  );
}
