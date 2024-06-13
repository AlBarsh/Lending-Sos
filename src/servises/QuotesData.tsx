import evan from "../resurses/evan.png";
import jada from "../resurses/jada.png";
import aaron from "../resurses/aaron.png";

export interface quotes {
  photo: string;
  name: string;
  workPlace: string;
  quote: string;
  data: string;
}
console.log(typeof { evan });
const QuotesData: quotes[] = [
  {
    photo: { evan },
    name: "Evan Lahti",
    workPlace: "PC Gamer",
    quote: "“One of my gaming highlights of the year.”",
    data: "October 18, 2018",
  },
  {
    photo: `${jada}`,
    name: "Evan Lahti",
    workPlace: "PC Gamer",
    quote: "“One of my gaming highlights of the year.”",
    data: "October 18, 2018",
  },
  {
    photo: `${aaron}`,
    name: "Evan Lahti",
    workPlace: "PC Gamer",
    quote: "“One of my gaming highlights of the year.”",
    data: "October 18, 2018",
  },
];

export default QuotesData;
