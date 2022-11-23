import Wrapper from "../wrappers/Wrapper";
import Button from "../ui/Button";

function Header() {
  return (
    <Wrapper>
      <div className="flex flex-col mt-12 md:flex-row  md:gap-x-13 lg:gap-x-81">
        <h1 className="sm:text-2xl sm:leading-8 sm:tracking-thin font-medium text-xl leading-7 tracking-thiner min-w-[100px]">
          Ape Unit
        </h1>
        <div className="hidden sm:block">
          <h2 className="font-medium sm:text-2xl sm:leading-8 sm:tracking-thin sm:pt-4.5 md:pt-0">
            Unit➇ is a pioneering technology company specialing in decentralised
            technologies that creates end-to-end digital experiences for
            protocols including{" "}
            <span className="text-purple">
              Ethereum, Tezos, Near, Algorand, Celo{" "}
            </span>
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.{" "}
            <span className="sm:inline-block md:block lg:inline-block">
              <Button
                style={"text-2xl underline hover:no-underline"}
                link={"mailto:web3@apeunit.com"}
              >
                Contact Us
              </Button>
            </span>
          </h2>
        </div>
        <div className="block sm:hidden">
          <h2 className="font-medium text-xl leading-7 tracking-thiner pt-4.5">
            Unit➇ is a pioneering technology and marketing services company that
            creates end-to-end digital experiences for brands such{" "}
            <span className="text-purple">
              Google, Philips, Audi, Twitch, Patagonia, eBay
            </span>
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.
          </h2>
          <div className="pt-0.0894rem">
            <Button style={"text-xl"} link={"mailto:web3@apeunit.com"}>
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default Header;
