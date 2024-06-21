import { Box, Text } from "@chakra-ui/react";

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
        <img src="/icons/pink-phone.svg" alt="contact" width={35} height={35} />

        <div>
          <Text className="text-b-pink mb-2">Phone Number</Text>
          <Text className="text-[#7C7C7C] text-base leading-[30px]">
            <a href="tel:+2347064191282 "> +234706 419 1282 </a>
          </Text>
        </div>
      </div>
    </Box>
  );
};

export default Contact;
