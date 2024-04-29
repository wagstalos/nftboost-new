import { CardNFT } from "@/components/card-nft";
import { ContainerGrid } from "@/components/container";
import { TitleSection } from "@/components/title-section";
import { CardCollectors } from "@/components/card-collectors";

import ImageNft01 from "@/assets/nfts/01.jpg";

export default function Home() {
  return (
    <>
      <h1>Home </h1>
      <ContainerGrid className="flex items-center justify-between">
        <CardNFT
          thumbnail={ImageNft01}
          name="Nft"
          value="250"
          value_brl="R$ 5000"
        />
        <CardNFT
          thumbnail={ImageNft01}
          name="Nft"
          value="250"
          value_brl="R$ 5000"
        />
        <CardNFT
          thumbnail={ImageNft01}
          name="Nft"
          value="250"
          value_brl="R$ 5000"
        />
        <CardNFT
          thumbnail={ImageNft01}
          name="Nft"
          value="250"
          value_brl="R$ 5000"
        />
      </ContainerGrid>

      <ContainerGrid className="flex items-center justify-between">
        <CardCollectors
          image={ImageNft01}
          name="Nft"
          value_btc="250"
          percent="3%"
        />
        <CardCollectors
          image={ImageNft01}
          name="Nft"
          value_btc="250"
          percent="3%"
        />
      </ContainerGrid>
    </>
  );
}
