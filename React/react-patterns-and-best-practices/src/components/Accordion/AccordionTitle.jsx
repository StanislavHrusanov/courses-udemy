import { useAccordionCtx } from "./Accordion.jsx";
import { useAccordionItemCtx } from "./AccordionItem.jsx";

export default function AccordionTitle({ children, className }) {
  const { toggleItem } = useAccordionCtx();
  const id = useAccordionItemCtx();

  return (
    <h3 onClick={() => toggleItem(id)} className={className}>
      {children}
    </h3>
  );
}
