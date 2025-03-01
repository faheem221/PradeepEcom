import React from "react";
import Logo from "../App chunks/Logo";
const Footer = () => {
  const menus = [
    {
      heading: "Menu",
      links: [
        { name: "Product" },
        { name: "For Agencies" },
        { name: "Pricing" },
      ],
    },
    {
      heading: "More",
      links: [{ name: "Updates" }, { name: "Careers" }, { name: "Meida Kit" }],
    },
  ];
  const year = new Date().getFullYear();
  return (
    <footer className="bg-gray-50 text-gray-600 pt-10">
      <div className="container grid grid-cols-[.6fr_.1fr_1.3fr] items-top gap-20">
        <div>
          <Logo />
          <p className="mt-3">
            Lorem ipsum odor amet, consectetuer adipiscing elit. Sagittis
            egestas velit vivamus lorem himenaeos class nibh magnis. Litora
            suspendisse risus cursus platea feugiat facilisis.
          </p>
        </div>
        <div></div>
        <div className="w-full grid grid-cols-3 gap-1">
          {menus.map((elem, idx) => (
            <div key={idx} className="">
              <div>
                <h3 className="text-xl font-[600] text-gray-900">
                  {elem.heading}
                </h3>
                <ul className="mt-3">
                  {elem.links.map((link, index) => (
                    <li key={index} className="mt-1">
                      {link.name}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}

          <div>
            <div>
              <h3 className="text-xl font-[600]">Address</h3>
              <ul className="mt-3">
                <li>Office- Address of the Office</li>
                <li>Phone- +01 23456 78900</li>
                <li>Email- info@Zaaviyan.com</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mt-8 flex w-full justify-between">
        <p>&#169; {year} Zaaviyan Copyright Protected</p>
      </div>
      <div className="container flex justify-center mt-10">
        <svg
          width="1320"
          height="195"
          viewBox="0 0 1320 195"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.5 195V161.5L84.5 63.5C88.3333 59 92.1667 54.5 96 50C100 45.5 104.333 41 109 36.5V30.5H9.5V-1.07288e-05H156.5V33.5L72 131.75C68.3333 136.083 64.5 140.5 60.5 145C56.5 149.5 52.1667 154 47.5 158.5V164.5H158.5V195H0.5ZM171.039 195V193.5L231.039 -1.07288e-05H291.539L351.539 193.5V195H312.039L263.039 29.75H257.039L207.539 195H171.039ZM217.789 144.25L226.289 114.75H293.539L302.039 144.25H217.789ZM356.488 195V193.5L416.488 -1.07288e-05H476.988L536.988 193.5V195H497.488L448.488 29.75H442.488L392.988 195H356.488ZM403.238 144.25L411.738 114.75H478.988L487.488 144.25H403.238ZM589.09 195L529.34 1.49999V-1.07288e-05H568.59L617.84 162H623.84L672.84 -1.07288e-05H709.84V1.49999L650.34 195H589.09ZM732.539 195V-1.07288e-05H770.789V195H732.539ZM855.598 195V113.25L793.098 1.49999V-1.07288e-05H834.848L861.348 48C863.681 52 865.931 56.1667 868.098 60.5C870.264 64.8333 872.431 69.8333 874.598 75.5H879.848C882.181 69.8333 884.348 64.8333 886.348 60.5C888.514 56.1667 890.681 52 892.848 48L918.848 -1.07288e-05H956.598V1.49999L894.098 113.75V195H855.598ZM943.598 195V193.5L1003.6 -1.07288e-05H1064.1L1124.1 193.5V195H1084.6L1035.6 29.75H1029.6L980.098 195H943.598ZM990.348 144.25L998.848 114.75H1066.1L1074.6 144.25H990.348ZM1146.55 195V-1.07288e-05H1213.55L1278.3 164.75H1284.3V-1.07288e-05H1319.05V195H1251.8L1187.05 30.25H1181.3V195H1146.55Z"
            fill="url(#paint0_linear_1639_81)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_1639_81"
              x1="665"
              y1="-498"
              x2="665"
              y2="287.083"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="#808080" />
              <stop offset="1" stopColor="white" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
