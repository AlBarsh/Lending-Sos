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

const QuotesData: quotes[] = [
  {
    photo: evan.toString(),
    name: "Evan Lahti",
    workPlace: "PC Gamer",
    quote: "“One of my gaming highlights of the year.”",
    data: "October 18, 2018",
  },
  {
    photo: jada.toString(),
    name: "Jada Griffin ",
    workPlace: "Nerdreactor",
    quote:
      "““The next big thing in the world of streaming and survival games.””",
    data: "December 21, 2018",
  },
  {
    photo: aaron.toString(),
    name: "Aaron Williams",
    workPlace: "Uproxx",
    quote:
      "““Snoop Dogg Playing The Wildly Entertaining ‘SOS’ Is Ridiculous.””",
    data: "December 24, 2018",
  },
];

export default QuotesData;
