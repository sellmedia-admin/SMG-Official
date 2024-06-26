import { Box, Text } from "@chakra-ui/react";
import Link from "next/link";
import CustomButton from "../Button/Button";

const Contact = () => {
  return (
    <Box>
      <div className="border border-[#E5E5EA] flex flex-col items-start gap-6 p-6">
        <div className="flex items-start gap-6 ">
          {" "}
          <img
            src="/icons/pink-contact.svg"
            alt="contact"
            width={35}
            height={35}
          />
          <Text className="text-b-pink mb-2">Contact us </Text>
        </div>

        <div>
          <Text className="text-[#7C7C7C] text-base leading-[30px]">
            For technical assistance or support-related queries, please contact
            our dedicated support team at
          </Text>
          <Text className=" text-base leading-[30px]">
            <a href="mailto:hello@sellmedia.africa">hello@sellmedia.africa</a>
          </Text>
        </div>
      </div>

      <div className="border border-[#E5E5EA] flex items-start gap-6 p-6">
        <img
          src="/icons/social-media.svg"
          alt="contact"
          width={35}
          height={35}
        />

        <div>
          <Text className="text-b-pink mb-2">Phone Number</Text>
          <Text className="text-[#7C7C7C] text-base leading-[30px]">
            <a href="tel:+2347064191282 "> +234706419282 </a>
          </Text>
        </div>
      </div>

      <Link href={"/start-project"}>
        <CustomButton className="bg-custom-gradient hover:bg-darkCustom-gradient border-1 border-bd-grey-1 rounded-20 text-red-200 mt-3">
          Start a project
        </CustomButton>
      </Link>
    </Box>
  );
};

export default Contact;
