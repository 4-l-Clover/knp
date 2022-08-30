import { Button } from "@mui/material";
import Image from "next/image";
import { Container } from "src/components/container";
import blogImage from "public/images/blog.png";

export const PlatformMenuContent = () => {
  return (
    <Container>
      <div className="flex items-center h-[320px] py-10">
        <ul className="shrink-0 h-full flex flex-col justify-evenly text-[26px] font-bold text-[#003F5C] leading-loose flex-grow cursor-pointer">
          <li className="border-b-[#428BA6] border border-transparent hover:pl-4 transition-all duration-500 ease-out">
            Blog
          </li>
          <li className="border-b-[#428BA6] border border-transparent hover:pl-4 transition-all duration-500 ease-out">
            News
          </li>
          <li className="border-b-[#428BA6] border border-transparent hover:pl-4 transition-all duration-500 ease-out">
            Webinars
          </li>
          <li className="hover:pl-4 transition-all duration-500 ease-out">
            Case Studies
          </li>
        </ul>
        <Image src={blogImage} alt="blog" />
        <div className="flex flex-col justify-evenly h-full">
          <h6 className="text-2xl font-bold">
            Electronic record <br />
            keeping
          </h6>
          <p className="text-[20px] font-['Roboto'] text-[#707070]">
            Angela Aaron, KlearNow&apos;s Senior
            <br />
            Director of Compliance shares
            <br />
            how a Smart Logistic as a Service solution
            <br />
            drastically simplifies electronic ...
          </p>
          <Button
            color="secondary"
            variant="contained"
            disableElevation
            className="!text-[21px] !font-bold !capitalize !rounded-[32px] !px-8"
          >
            View Now
          </Button>
        </div>
      </div>
    </Container>
  );
};
