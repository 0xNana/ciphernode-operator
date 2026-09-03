const operators = [
  { name: "CN1", tickets: 1 },
  { name: "CN2", tickets: 3, selected: true },
  { name: "CN3", tickets: 2 },
  { name: "CN4", tickets: 4, selected: true },
  { name: "CN5", tickets: 1 },
  { name: "CN6", tickets: 2, selected: true },
];

export function SortitionDiagram() {
  return (
    <figure className="sortition-figure" aria-labelledby="sortition-title">
      <figcaption id="sortition-title" className="sr-only">
        Ticket-weighted sortition selects CN2, CN4, and CN6 from six eligible ciphernode operators for an E3 committee.
      </figcaption>

      <div className="sortition-label">Eligible operator set</div>
      <div className="sortition-operators" role="list" aria-label="Eligible ciphernode operators and illustrative ticket counts">
        {operators.map((operator) => (
          <div className={`sortition-operator${operator.selected ? " is-selected" : ""}`} role="listitem" key={operator.name}>
            <strong>{operator.name}</strong>
            <span>{operator.tickets} {operator.tickets === 1 ? "ticket" : "tickets"}</span>
          </div>
        ))}
      </div>

      <div className="sortition-funnel" aria-hidden="true">
        <span />
        <b>SORTITION</b>
        <span />
      </div>

      <div className="sortition-committee">
        <span className="sortition-label">E3 committee</span>
        <strong>CN2 · CN4 · CN6</strong>
        <small>Illustrative result — more tickets improve odds, not certainty.</small>
      </div>
    </figure>
  );
}
