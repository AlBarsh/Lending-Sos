import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../components/ui/accordion";

const AccordionFeatures = () => {
  return (
    <Accordion type="single" collapsible className="">
      <AccordionItem value="item-1" className="border-0">
        <AccordionTrigger className="text-orange font-bebas text-[21px] desk:text-[30px] font-bold uppercase">
          SURVIVE AT ALL COSTS
        </AccordionTrigger>
        <AccordionContent className="text-white font-open text-[14px] desk:text-[18px]">
          You have 30 minutes to find a relic, signal for extraction, and grab
          one of three spots on the rescue chopper.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" className="border-0">
        <AccordionTrigger className="text-orange font-bebas text-[21px] desk:text-[30px] font-bold uppercase">
          CREATE ALLIES AND ENEMIES
        </AccordionTrigger>
        <AccordionContent className="text-white font-open text-[14px] desk:text-[18px]">
          You have 30 minutes to find a relic, signal for extraction, and grab
          one of three spots on the rescue chopper.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3" className="border-0">
        <AccordionTrigger className="text-orange font-bebas text-[21px] desk:text-[30px] font-bold uppercase">
          IMPRESS THE AUDIENCE
        </AccordionTrigger>
        <AccordionContent className="text-white font-open text-[14px] desk:text-[18px]">
          You have 30 minutes to find a relic, signal for extraction, and grab
          one of three spots on the rescue chopper.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordionFeatures;
