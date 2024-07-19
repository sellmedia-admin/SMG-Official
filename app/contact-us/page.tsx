"use client";
import { CustomButton, Hero, Input } from "@/components";
import { Box, Flex, FormLabel, Text, Textarea } from "@chakra-ui/react";
import { useState } from "react";

const ContactUsPage = () => {
  const SM = [
    {
      link: "https://www.facebook.com",
      icon: "/icons/sm/fb.svg",
    },
    {
      link: "https://www.twitter.com",
      icon: "/icons/sm/twitter.svg",
    },
    {
      link: "https://www.instagram.com",
      icon: "/icons/sm/ig.svg",
    },
    {
      link: "https://www.linkedin.com",
      icon: "/icons/sm/linkedin.svg",
    },
  ];

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [companyEmail, setCompanyEmail] = useState("");
  const [message, setMessage] = useState("");
  const [file, setFile] = useState(null);
  const [fileName, setFileName] = useState("");
  const [fileSize, setFileSize] = useState("");
  const [loading, setLoading] = useState(false);

  const handleFileChange = (event: any) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setFileName(selectedFile.name);
      setFileSize((selectedFile.size / 1024).toFixed(2) + " KB");
    }
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("SingleLine", firstName);
    formData.append("SingleLine1", lastName);
    formData.append("PhoneNumber_countrycode", phoneNumber);
    formData.append("Email", companyEmail);
    formData.append("MultiLine", message);
    if (file) {
      formData.append("FileUpload", file);
    }

    try {
      const response = await fetch(
        "https://forms.zohopublic.com/sellmediaafrica/form/Contactform1/formperma/cXRxDy7KlbHjEjSPI8F7aX58tQK1eMtBcpRb1sNYvvA/htmlRecords/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      if (response) {
        console.log(response);
        alert("Thank you. We will be in touch shortly.");
        // Reset form fields if needed
      }
    } catch (error) {
      alert("Thank you. We will be in touch shortly.");
      console.error("Error submitting form:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Hero
        title="Connect with SellMedia Group"
        titleColor="text-b-pink"
        leftIcon="pink-star"
        mainHeading="Your Gateway to Innovative Media-Tech Solutions"
        textContent="Discover how our cutting-edge technologies and tailored marketing strategies can drive your business forward. Reach out to our global team in the US, UK, Canada, and Africa, and let's start transforming your vision into reality."
      />
      <Box className="text-start max-w-[1200px] mx-auto pb-[80px] px-5 md:px-0">
        <Text className="my-[31px]">
          We appreciate your interest in Sellmedia Group. For any inquiries,
          please use the contact information below or fill out the form, and our
          team will get back to you promptly.
        </Text>

        <div className="flex gap-6 flex-col md:flex-row">
          <div className="space-y-6 order-1 md:order-none">
            <div className="border border-[#E5E5EA] flex items-start gap-6 p-6">
              <img
                src="/icons/pink-contact.svg"
                alt="contact"
                width={35}
                height={35}
              />
              <div>
                <Text className="text-b-pink mb-2">Contact us </Text>
                <Text className="text-[#7C7C7C] text-base leading-[30px]">
                  For technical assistance or support-related queries, please
                  contact our dedicated support team at
                </Text>
                <Text className=" text-base leading-[30px]">
                  hello@sellmedia.africa{" "}
                </Text>
                <Text className=" text-base leading-[30px]">
                  sales@sellmedia.africa{" "}
                </Text>
              </div>
            </div>

            <div className="border border-[#E5E5EA] flex items-start gap-6 p-6">
              <img
                src="/icons/pink-phone.svg"
                alt="contact"
                width={35}
                height={35}
              />
              <div>
                <Text className="text-b-pink mb-2">Phone Number</Text>
                <Text className="text-[#7C7C7C] text-base leading-[30px]">
                  +234706 419 1282 
                </Text>
              </div>
            </div>

            <div className="border border-[#E5E5EA] flex items-start gap-6 p-6">
              <img
                src="/icons/pink-phone.svg"
                alt="contact"
                width={35}
                height={35}
              />
              <div>
                <Text className="text-b-pink mb-2">Social Media</Text>
                <Flex gap={1}>
                  {SM.map((sm) => (
                    <a
                      href={sm.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      key={sm.icon}
                    >
                      <img src={sm.icon} alt={sm.link} width={35} height={35} />
                    </a>
                  ))}
                </Flex>
              </div>
            </div>
          </div>
          {/* ------ */}
          {/* form */}
          <div className="w-full">
            <form
              className="md:border rounded-2xl md:p-8 md:shadow-dark-blue"
              onSubmit={handleSubmit}
            >
              <Input
                id="first-name"
                name="SingleLine"
                label="First Name"
                type="text"
                placeholder="Enter first name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <Input
                id="last-name"
                name="SingleLine1"
                label="Last Name"
                type="text"
                placeholder="Enter last name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
              <Input
                id="phone-number"
                name="PhoneNumber_countrycode"
                label="Phone Number"
                type="number"
                placeholder="Enter phone number"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
              />
              <Input
                id="work-email"
                name="Email"
                label="Work Email"
                type="email"
                placeholder="Enter work email"
                value={companyEmail}
                onChange={(e) => setCompanyEmail(e.target.value)}
              />
              <FormLabel
                htmlFor={"message"}
                fontSize="14px"
                lineHeight="27px"
                fontWeight="400"
                mb="2"
              >
                Message
              </FormLabel>
              <Textarea
                required
                id="message"
                name="MultiLine"
                className="border-solid border-1 border-gray-300 !rounded-20 mb-6 !p-4"
                placeholder="Type in your message"
                _placeholder={{
                  color: "#7C7C7C",
                  fontSize: "16px",
                  lineHeight: "30px",
                }}
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></Textarea>
              <div className="flex items-center mb-8">
                <label
                  className="flex items-center py-2.5 px-4 max-w-max bg-[#F2F4F7] text-black border border-[#D0D5DD] rounded-[12px]"
                  htmlFor="file"
                >
                  <img src="/icons/attach.svg" width={24} height={24} />
                  <input
                    type="file"
                    name="FileUpload"
                    id="file"
                    hidden
                    onChange={handleFileChange}
                  />
                  Attach a file
                </label>
                {file && (
                  <div className="ml-4 inline-block">
                    {fileName} ({fileSize})
                  </div>
                )}
              </div>
              <CustomButton
                className="bg-b-black text-white !w-[194px]"
                isLoading={loading}
                type="submit"
              >
                Send us a message
              </CustomButton>
            </form>
          </div>
        </div>
      </Box>
    </div>
  );
};

export default ContactUsPage;
