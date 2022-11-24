import React from "react";
import Wrapper from "../wrappers/Wrapper";
import Button from "../../components/ui/Button";
import Link from "next/link";

function Footer() {
  return (
    <Wrapper>
      <div className="flex flex-col sm:flex-row justify-between gap-y-12 sm:gap-y-0 text-xl md:text-2xl font-normal leading-8 tracking-thiner md:tracking-thin">
        <p className="flex flex-col">
          <span>Ape Unit GmbH</span>
          <span className="w-56">Waldemarstraße 38, 10999 Berlin </span>
        </p>
        <div>
          <Button link={"https://twitter.com/apeunit"}>Twitter</Button>
          <Button link={"https://www.facebook.com/apeunit/"}>Facebook</Button>
          <Button
            link={
              "https://www.linkedin.com/company/ape-unit/?originalSubdomain=de"
            }
          >
            LinkedIn
          </Button>
        </div>
        <p>
          <span>
            <Link href={"https://apeunit.com/impressum.txt"} target="_blank">
              Impressum
            </Link>
          </span>{" "}
          /{" "}
          <span>
            <Link href={"https://apeunit.com/datenschutz.txt"} target="_blank">
              Privacy
            </Link>
          </span>
        </p>
      </div>
    </Wrapper>
  );
}

export default Footer;
