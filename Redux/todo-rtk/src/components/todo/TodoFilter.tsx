import { Filter } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterTask } from "../../redux/features/todo/todoSlice";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

const TodoFilter = () => {
  const dispatch = useDispatch();
  const [filterValue, setFilterValue] = useState<string>("All");

  const handleFilterChange = (value: string) => {
    setFilterValue(value);
    dispatch(filterTask(value));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button>
          Filter <Filter className="size-4 ml-1" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40">
        <DropdownMenuLabel>Filter By Priority</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup
          value={filterValue}
          onValueChange={handleFilterChange}
        >
          <DropdownMenuRadioItem value="All">All</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="High">High</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Medium">Medium</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="Low">Low</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TodoFilter;
