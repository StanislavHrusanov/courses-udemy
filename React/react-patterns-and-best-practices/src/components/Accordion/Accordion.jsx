import { createContext, useContext, useState } from "react";
import AccordionItem from "./AccordionItem";
import AccordionTitle from "./AccordionTitle";
import AccordionContent from "./AccordionContent";

const AccordionCtx = createContext();

export function useAccordionCtx() {
  const ctx = useContext(AccordionCtx);

  if (!ctx) {
    throw new Error(
      "Accordion-related components must be wrapped by <Accordion>."
    );
  }

  return ctx;
}

export default function Accordion({ children, className }) {
  const [openItemId, setOpenItemId] = useState();

  function toggleItem(id) {
    setOpenItemId((state) => (state === id ? null : id));
  }

  return (
    <AccordionCtx.Provider value={{ openItemId, toggleItem }}>
      <ul className={className}>{children}</ul>
    </AccordionCtx.Provider>
  );
}

Accordion.Item = AccordionItem;
Accordion.Title = AccordionTitle;
Accordion.Content = AccordionContent;
