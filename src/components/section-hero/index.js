import Image from "next/image";
import { ContainerGrid } from "../container";
import { CardsHero } from "./cards";

import IconBoost from "@/assets/icon-nftboost.svg";
import SmallNFT01 from "@/assets/nft-small-01.svg";
import SmallNFT02 from "@/assets/nft-small-02.svg";
import GooglePlay from "@/assets/google.svg";
import AppleStore from "@/assets/apple.svg";

export function SectionHero() {
  return (
    <section className=" overflow-hidden pt-36 bg-hero-pattern bg-no-repeat">
      <ContainerGrid className="flex flex-col items-center">
        <h3 className="flex items-center gap-2 text-sm tablet:text-base desktop:text-xl mb-3">
          <Image src={IconBoost} alt="icon boost" />
          <span>Adentre um reino de possibilidades infinitas</span>{" "}
        </h3>

        <h1
          className="text-5xl/normal
         text-center font-poppins desktop:text-7xl/normal mb-4"
        >
          Explore um Universo
          <div
            className="inline-block align-middle mx-2 p-1 bg-white 
          bg-opacity-5 border-white border-opacity-5 rounded-full w-24 desktop:w-32"
          >
            <Image
              src={SmallNFT01}
              alt="SmallNFT01"
              className="w-20 desktop:w-auto"
            />
          </div>
          Digital de
          <Image
            src={SmallNFT02}
            alt="SmallNFT02"
            className="inline-block w-16 desktop:w-auto mx-2"
          />
          Colecionáveis Únicos!
        </h1>

        <p className="w-full desktop:max-w-content-desc-hero text-center text-sm desktop:text-xl tablet:text-base mb-6 desktop:mb-9">
          Adentre um reino de possibilidades infinitas e mergulhe nas coleções
          de NFT, onde a arte, a cultura e a inovação se unem para criar
          experiências verdadeiramente exclusivas.
        </p>

        <div className="flex flex-col items-center tablet:flex-row gap-4">
          <Image src={GooglePlay} alt="google" />
          <Image src={AppleStore} alt="apple" />
        </div>

        <CardsHero />
        <div className="w-full border-t border-white border-opacity-5 mt-10 desktop:mt-36"></div>
      </ContainerGrid>
    </section>
  );
}
