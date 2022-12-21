import Wrapper from "../wrappers/Wrapper";
import Link from "next/link";
import Image from "next/image";
import ArrowSmall from "../../public/assets/images/arrow_small.svg";

const Header = () => {
  return (
    <Wrapper>
      <div className="flex flex-col tablet:flex-row desktop:gap-98 tablet:gap-25 mt-12 tablet:justify-between ipad:leading-8 ipad:-tracking-thin leading-7 -tracking-thiner">
        <h1 className="text-xl ipad:text-2xl pb-4.5 font-normal leading-7 -tracking-thiner">
          Ape Unit
        </h1>
        <div className="hidden ipad:block">
          <h2 className="font-normal text-2xl ipad:pt-0 desktop:min-w-806 tablet:w-757 tablet:-tracking-thin">
            Unit➇ is a pioneering technology company specialing in decentralised
            technologies that creates end-to-end digital experiences for
            protocols including{" "}
            <span className="text-purple">
              Ethereum, Tezos, Near, Algorand, Celo{" "}
            </span>
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.{" "}
            <span className="inline-block">
              <Link href={"mailto:web3@apeunit.com"} target="_blank">
                <div className="flex gap-1 items-center group cursor-pointer">
                  <span
                    className={`font-normal leading-8 tracking-thiner ipad:tracking-thin font-sans ipad:underline group-hover:no-underline`}
                  >
                    Contact us
                  </span>
                  <span className="group-hover:-translate-y-1 transition-transform duration-300 group-hover:translate-x-1">
                    <Image alt="arrow" src={ArrowSmall} />
                  </span>
                </div>
              </Link>
            </span>
          </h2>
        </div>
        <div className="block ipad:hidden">
          <h2 className="font-normal text-xl">
            Unit➇ is a pioneering technology and marketing services company that
            creates end-to-end digital experiences for brands such as{" "}
            <span className="text-purple">
              Google, Philips, Audi, Twitch, Patagonia, eBay
            </span>{" "}
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.
            <span className="inline-block">
            <Link href={"mailto:web3@apeunit.com"} target="_blank">
                <div className="flex gap-1 items-center group cursor-pointer">
                  <span
                    className={`font-normal leading-8 -tracking-thiner -ipad:tracking-thin font-sans`}
                  >
                     Contact us
                  </span>
                  <span className="group-hover:-translate-y-1 transition-transform duration-300 group-hover:translate-x-1">
                    <Image alt="arrow" src={ArrowSmall} />
                  </span>
                </div>
              </Link>
            </span>
          </h2>
        </div>
      </div>
    </Wrapper>
  );
};

export default Header;
