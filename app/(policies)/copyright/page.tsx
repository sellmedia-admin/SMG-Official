import { Hero, Policies } from "@/components";
import { GROUP_SOCIAL_MEDIA_POLICY } from "@/policies";
import React from "react";

const Copyright = () => {
  return (
    <div>
      <Hero
        noTitle
        title=""
        titleColor=""
        leftIcon=""
        mainHeading={"SellMedia Group Copyright Notice"}
        textContent={"Updated: May 3, 2024"}
      />

      <div className="max-w-[1248px] mx-auto py-[33px] px-[5%] pb-20">
        <p className="mb-4 text-[#460B32] font-[600]">
          Welcome to SellMedia Group's Copyright Notice.
        </p>
        <p>
          © 2024 SellMedia Group. All rights reserved.
          <br />
          No part of this material, including logos, graphics, images, sounds,
          or text, may be reproduced, distributed, or transmitted in any form or
          by any means, including photocopying, recording, or other electronic
          or mechanical methods, without the prior written permission of
          SellMedia Group. For permission requests, write to the publisher at
          hello@sellmedia.africa or contact us via mail at Suite 101, Plot 9
          Gbagada - Oworonshoki Expy, beside UPS, Araromi 105102, Lagos,
          Nigeria.
        </p>
        <p className="my-4 text-[#460B32] font-[600]">For More Information:</p>
        <p>
          If you have any questions or concerns about our use of cookies, please
          contact us at support@sellmedia.africa.{" "}
        </p>
        <p> Thank you for visiting SellMedia Group.</p>
      </div>
    </div>
  );
};

export default Copyright;
