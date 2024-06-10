import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../components/ui/select";

const SelectLang = () => {
  return (
    <Select>
      <SelectTrigger className="w-fit mr-[15px] bg-transparent text-white border-0">
        <SelectValue placeholder="EU" />
      </SelectTrigger>
      <SelectContent className="bg-transparent text-white  border-0">
        <SelectItem value="rus">RUS</SelectItem>
        <SelectItem value="fra">FRA</SelectItem>
        <SelectItem value="deu">DEU</SelectItem>
      </SelectContent>
    </Select>
  );
};

export default SelectLang;
