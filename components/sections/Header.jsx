import Wrapper from "../wrappers/Wrapper";
import Button from "../ui/Button";

function Header() {
  return (
    <Wrapper>
      <div className="grid mt-12 tablet:grid-cols-[250px_minmax(0,_1fr)] desktop:grid-cols-3">
        <h1 className="text-xl ipad:text-2xl  desktop:col-span-1 mobile:pb-4.5 leading-7 ipad:leading-8 tracking-thiner ipad:tracking-thin font-normal">
          Ape Unit
        </h1>
        <div className="hidden ipad:block desktop:col-span-2">
          <h2 className="font-normal text-2xl leading-8 tracking-thin ipad:pt-0 ipad:block tablet:inline-block">
            Unit➇ is a pioneering technology company specialing in decentralised
            technologies that creates end-to-end digital experiences for
            protocols including{" "}
            <span className="text-purple">
              Ethereum, Tezos, Near, Algorand, Celo{" "}
            </span>
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.{" "}
            <span className="block tablet:inline-block">
              <Button
                style={"text-2xl underline hover:no-underline"}
                link={"mailto:web3@apeunit.com"}
              >
                Contact Us
              </Button>
            </span>
          </h2>
        </div>
        <div className="block ipad:hidden">
          <h2 className="font-normal text-xl leading-7 tracking-thiner">
            Unit➇ is a pioneering technology and marketing services company that
            creates end-to-end digital experiences for brands such{" "}
            <span className="text-purple">
              Google, Philips, Audi, Twitch, Patagonia, eBay
            </span>
            and more. Its team of 2,500+ digital specialists across 30+
            locations on 5 continents delivers pioneering work on a global scale
            with a boutique culture.
          </h2>
          <div>
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
