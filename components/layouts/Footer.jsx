import React from "react";
import Wrapper from "../wrappers/Wrapper";
import Button from "../../components/ui/Button";
import Link from "next/link";

function Footer() {
  return (
    <Wrapper>
      <div className="mt-32 max-w-6.5xl flex flex-col ipad:flex-row justify-between gap-y-12 ipad:gap-y-0 text-xl ipad:text-2xl font-normal leading-7 ipad:leading-8 tracking-thiner ipad:tracking-thin pb-12">
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
          </span>
          <span> / </span>
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
