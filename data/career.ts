export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface CareerStat {
  label: string;
  value: string;
  subtext: string;
}

export const CAREER_STATS: CareerStat[] = [
  {
    label: "Rushing Yards",
    value: "4,897",
    subtext: "Kansas City Chiefs Franchise Legend",
  },
  {
    label: "Rushing Touchdowns",
    value: "40",
    subtext: "Unstoppable Goal Line Force",
  },
  {
    label: "1989 NFL Rushing Champion",
    value: "1,480",
    subtext: "Yards in 1989 (NFL Leader)",
  },
  {
    label: "Pro Bowl Selections",
    value: "2x",
    subtext: "1989 & 1991 AFC Selection",
  },
  {
    label: "Chiefs Hall of Fame",
    value: "2000",
    subtext: "Forever #35 in KC History",
  },
];

export const CAREER_TIMELINE: Milestone[] = [
  {
    year: "1982",
    title: "Arrival from Enugu, Nigeria",
    description: "Arrived in the United States to attend Azusa Pacific University on a track & field scholarship, dominating discus, shot put, and hammer throw before ever touching an American football.",
  },
  {
    year: "1984 - 1986",
    title: "College Football Phenomenon",
    description: "Picked up American football for the first time at APU. His sheer 6'1\", 260 lb frame combined with 4.45 40-yard dash speed earned him national NAIA dominance.",
  },
  {
    year: "1987",
    title: "Drafted by the Kansas City Chiefs",
    description: "Selected in the 2nd round (35th overall) by the Chiefs, quickly winning the starting fullback spot and captivating Arrowhead Stadium with bruising power runs.",
  },
  {
    year: "1989",
    title: "NFL Rushing Title & 'The Nigerian Nightmare'",
    description: "Led the entire NFL in rushing with 1,480 yards and 12 touchdowns. Awarded First-Team All-Pro, UPI AFC Offensive Player of the Year, and 1989 Pro Bowl honors.",
  },
  {
    year: "1991",
    title: "Second Pro Bowl & Playoff Run",
    description: "Earned his second AFC Pro Bowl selection, powering the Kansas City Chiefs back into AFC Championship contention.",
  },
  {
    year: "2000",
    title: "Kansas City Chiefs Hall of Fame",
    description: "Inducted into the Kansas City Chiefs Hall of Fame and honored on the Arrowhead Ring of Honor.",
  },
  {
    year: "Present",
    title: "The Christian Okoye Foundation",
    description: "Dedicated to providing athletic opportunities, annual celebrity golf tournaments, football camps, and mentorship to underprivileged youth.",
  },
];
