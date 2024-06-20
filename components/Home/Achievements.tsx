import { ACHIEVEMENTS } from "@/data";
import { Box, Text } from "@chakra-ui/react";
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

      <h2 className="mt-[40px] mb-6 text-white text-[36px] leading-[57px]">
        Our Stories in Numbers
      </h2>
    </Box>
    <Box className="flex justify-between w-full max-w-[1299px] mx-auto px-[5%] pb-[80px]">
      <img
        src="/imgs/highlight-left-white.png"
        alt="highlight icon"
        width={60}
        height={65}
      />
      <img
        src="/imgs/highlight-right-white.png"
        alt="highlight icon"
        width={60}
        height={65}
      />
    </Box>
    <Box className="max-w-[1205px] mx-auto px-[5%] grid grid-cols-3 gap-[18px] -mt-5">
      {ACHIEVEMENTS.map((achievement) => (
        <Box
          key={achievement.title}
          className="rounded-10 border-2 border-white text-white text-center h-[223px] flex flex-col items-center justify-center gap-6 "
        >
          <div className="text-center mx-auto max-w-[259px]">
            <h2>{achievement.title}</h2>
          </div>
          <Text className="max-w-[339px]">{achievement.text}</Text>
        </Box>
      ))}
    </Box>
  </>
);

export default AchievementsSection;
