import { FooterBrand } from "./FooterBrand";
import { FooterContact } from "./FooterContact";
import { FooterSocials } from "./FooterSocials";
import { FooterCopyright } from "./FooterCopyright";

function Divider() {
  return <div className="hidden md:block w-[1.5px] self-stretch bg-white" />;
}

export function Footer() {
  return (
    <footer className="bg-primary-500 text-white font-poppins">
      <div className="lg:max-w-7xl mx-auto w-full px-6 md:px-8 lg:px-4 xl:px-0 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-10 md:gap-0 ">
          <FooterBrand />
          <Divider />
          <FooterContact />
          <Divider />
          <FooterSocials />
        </div>
      </div>
      <FooterCopyright />
    </footer>
  );
}
