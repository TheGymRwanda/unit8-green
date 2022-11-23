import Wrapper from "../wrappers/Wrapper";

function Header(props) {
  return (
    <Wrapper>
      <div className="flex flex-col mt-18 font-medium text-xl leading-7">
        <h1>Ape Unit</h1>
        <h2 className="pt-4.5">
          Unit➇ is a pioneering technology and marketing services company that
          creates end-to-end digital experiences for brands such as Google,
          Philips, Audi, Twitch, Patagonia, eBay and more. Its team of 2,500+
          digital specialists across 30+ locations on 5 continents delivers
          pioneering work on a global scale with a boutique culture.{" "}
        </h2>
      </div>
    </Wrapper>
  );
}

export default Header;
