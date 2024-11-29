import { useAccordionCtx } from "./Accordion.jsx";
import { useAccordionItemCtx } from "./AccordionItem.jsx";

export default function AccordionContent({ children, className }) {
  const { openItemId } = useAccordionCtx();
  const id = useAccordionItemCtx();

  const isOpen = openItemId === id;

  return (
    <div className={`${className} ${isOpen ? "open" : "close"}`}>
      {children}
    </div>
  );
}
