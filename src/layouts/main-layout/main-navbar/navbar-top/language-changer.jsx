import { useRef, useState } from "react";
import { Button, List, ListItem, Popover } from "@mui/material";
import { US, CA } from "country-flag-icons/react/3x2";

export const LanguageChanger = () => {
  const ref = useRef(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button
        className="!font-bold !text-base xl:!ml-[18px] 2xl:!ml-4 !px-2 !text-white"
        ref={ref}
        onClick={() => setIsOpen(true)}
      >
        en us
      </Button>

      <Popover
        anchorEl={ref.current}
        onClose={() => setIsOpen(false)}
        open={isOpen}
        anchorOrigin={{
          vertical: "center",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <div className="p-4 w-[240px]">
          <div className="text-sm font-bold text-center pb-4 text-primary">Language Switcher</div>
          <List component="nav" className="p-2">
            <ListItem
              onClick={() => setIsOpen(false)}
              button
              className="!text-primary !rounded"
            >
              <US title="United States" className="w-8 mr-4" />
              United States
            </ListItem>
            <ListItem
              onClick={() => setIsOpen(false)}
              button
              className="!text-primary !rounded"
            >
              <CA title="Canada" className="w-8 mr-4" />
              Canada
            </ListItem>
          </List>
        </div>
      </Popover>
    </>
  );
};
