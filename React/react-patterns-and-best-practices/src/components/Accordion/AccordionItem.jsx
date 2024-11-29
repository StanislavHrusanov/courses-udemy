import { createContext, useContext } from "react";

const AccordionItemCtx = createContext();

export function useAccordionItemCtx() {
  const ctx = useContext(AccordionItemCtx);

  if (!ctx) {
    throw new Error(
      "AccordionItem-related components must be wrapped by <Accordion.Item>."
    );
  }

  return ctx;
}

export default function AccordionItem({ id, children, className }) {
  return (
    <AccordionItemCtx.Provider value={id}>
      <li className={className}>{children}</li>
    </AccordionItemCtx.Provider>
  );
}
