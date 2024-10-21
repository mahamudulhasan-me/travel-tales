import { Check } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

const PremiumUserToolTip = ({ iconSize }: { iconSize?: number }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Check
            absoluteStrokeWidth
            className="text-white bg-primary rounded-full p-0.5 border-dotted border-2"
            size={iconSize || 18}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Premium User</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default PremiumUserToolTip;
