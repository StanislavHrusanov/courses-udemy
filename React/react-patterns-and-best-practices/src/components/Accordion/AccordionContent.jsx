import { useAccordionCtx } from "./Accordion.jsx";

export default function AccordionContent({ id, children, className }) {
  const { openItemId } = useAccordionCtx();

  const isOpen = openItemId === id;

  return (
    <div className={`${className} ${isOpen ? "open" : "close"}`}>
      {children}
    </div>
  );
}
