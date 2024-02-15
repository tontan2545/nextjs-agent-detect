"use client";

import React, { useEffect, useState } from "react";
import UAParser from "ua-parser-js";

type Props = {};

const Page = (props: Props) => {
  const [userAgentData, setUserAgentData] = useState<any>();
  useEffect(() => {
    const parser = new UAParser(navigator.userAgent);
    setUserAgentData({
      browser: parser.getBrowser(),
      device: parser.getDevice(),
      engine: parser.getEngine(),
      os: parser.getOS(),
    });
  }, []);

  return (
    <div>
      Client:
      {userAgentData && <pre>{JSON.stringify(userAgentData, null, 2)}</pre>}
    </div>
  );
};

export default Page;
