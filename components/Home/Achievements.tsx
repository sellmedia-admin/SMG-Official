import { ACHIEVEMENTS } from "@/data";
import { Box, Flex, Text } from "@chakra-ui/react";
import SectionTitle from "../SectionTitles/SectionTitle";

const AchievementsSection = () => (
  <>
    <Box className="pt-[80px]">
      <Box className="w-max mx-auto">
        <SectionTitle
          title="Achievements"
          titleColor="text-b-white"
          leftIcon="white-star"
        />
      </Box>

      <h2 className="mt-4 md:mt-10 md:mb-6 text-white md:leading-[57px]">
        Our Stories in Numbers
      </h2>
    </Box>
    <Flex
      justifyContent={"space-between"}
      alignItems={"center"}
      marginTop={{ base: 10, md: 20 }}
      maxWidth={1300}
      className="mx-auto"
    >
      <div className="w-[22px] h-[24px] md:w-[60px] md:h-[65px]">
        <img
          src="/imgs/highlight-left-white.png"
          alt="highlight icon"
          width={"100%"}
          height={"100%"}
        />
      </div>

      <div className="w-[22px] h-[24px] md:w-[60px] md:h-[65px]">
        <img
          src="/imgs/highlight-right-white.png"
          alt="highlight icon"
          width={"100%"}
          height={"100%"}
        />
      </div>
    </Flex>
    <Box className="max-w-[1205px] mx-auto px-[5%] grid grid-cols-2 md:grid-cols-3 gap-[18px]">
      {ACHIEVEMENTS.map((achievement) => (
        <Box
          key={achievement.title}
          className="rounded-10 border-2 border-white text-white text-center h-[223px] flex flex-col items-center justify-center gap-6 py-6 px-4 md:py-0 md:px-0"
        >
          <div className="text-center mx-auto max-w-[259px]">
            <p className="text-base md:text-[40px] font-bold leading-[46px]">
              {achievement.title}
            </p>
          </div>
          <Text className="max-w-[339px] text-sm md:text-[12px]">
            {achievement.text}
          </Text>
        </Box>
      ))}
    </Box>
  </>
);

export default AchievementsSection;
