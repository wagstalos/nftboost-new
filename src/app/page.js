import { CardNFT } from "@/components/card-nft";
import { ContainerGrid } from "@/components/container";
import { TitleSection } from "@/components/title-section";

import ImageNft01 from "@/assets/nfts/01.jpg";
import ImageNft02 from "@/assets/nfts/02.jpg";
import ImageNft03 from "@/assets/nfts/03.jpg";
import ImageNft04 from "@/assets/nfts/04.jpg";

export default function Home() {
  return (
    <>
      <ContainerGrid className="flex">
        <CardNFT
          thumbnail={ImageNft01}
          name="Cat #221"
          value="0.0721"
          value_brl="602,02"
        />

        <CardNFT
          thumbnail={ImageNft02}
          name="Snike #2331"
          value="0.0721"
          value_brl="602,02"
        />

        <CardNFT
          thumbnail={ImageNft03}
          name="Snike #2331"
          value="0.0721"
          value_brl="602,02"
        />

        <CardNFT
          thumbnail={ImageNft04}
          name="Snike #2331"
          value="0.0721"
          value_brl="602,02"
        />
      </ContainerGrid>
    </>
  );
}
