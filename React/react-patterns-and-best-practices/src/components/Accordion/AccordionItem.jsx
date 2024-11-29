import { useAccordionCtx } from "./Accordion";

export default function AccordionItem({ id, children, className, title }) {
  const { openItemId, toggleItem } = useAccordionCtx();

  const isOpen = openItemId === id;

  return (
    <li className={className}>
      <h3 onClick={() => toggleItem(id)}>{title}</h3>
      <div
        className={
          isOpen ? "accordion-item-content open" : "accordion-item-content"
        }
      >
        {children}
      </div>
    </li>
  );
}
