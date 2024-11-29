import { useAccordionCtx } from "./Accordion.jsx";

export default function AccordionTitle({ id, children, className }) {
  const { toggleItem } = useAccordionCtx();

  return (
    <h3 onClick={() => toggleItem(id)} className={className}>
      {children}
    </h3>
  );
}
