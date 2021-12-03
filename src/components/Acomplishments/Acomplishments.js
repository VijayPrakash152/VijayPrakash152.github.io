import React from "react";

import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { Box, Boxes, BoxNum, BoxText } from "./AcomplishmentsStyles";
import {
  FaBlogger,
  FaTwitterSquare,
  FaYoutubeSquare,
  FaInstagram,
} from "react-icons";

const data = [
  { number: 1, text: "Blog" },
  { number: 2, text: "Youtube Channel" },
  { number: 3, text: "Twitter Handle" },
  { number: 4, text: "Instagram Page" },
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Coming soon &raquo; </SectionTitle>
    <Boxes>
      {data.map((card, idx) => (
        <Box key={idx}>
          <BoxNum>{card.number}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
