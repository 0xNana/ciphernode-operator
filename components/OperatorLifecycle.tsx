const states = [
  ["Unbonded", "No ciphernode bond; cannot register."],
  ["Bonded", "Full FOLD position established, but not registered."],
  ["Registered", "In the registry, but not yet ticket-eligible."],
  ["Active", "Eligible to participate in committee sortition."],
];

export function OperatorLifecycle() {
  return (
    <figure className="lifecycle-figure" aria-labelledby="lifecycle-title">
      <figcaption id="lifecycle-title" className="sr-only">
        A ciphernode progresses from unbonded to bonded, registered, and active. It can become inactive if requirements are no longer met or enter exit pending after deregistration. Slashing is a policy event, not a lifecycle state.
      </figcaption>

      <ol className="lifecycle-primary" aria-label="Ciphernode activation states">
        {states.map(([name, description]) => (
          <li key={name}>
            <strong>{name}</strong>
            <span>{description}</span>
          </li>
        ))}
      </ol>

      <div className="lifecycle-branches">
        <div>
          <strong>Inactive</strong>
          <span>Registered, but below current bond or ticket requirements.</span>
        </div>
        <div>
          <strong>ExitPending</strong>
          <span>Deregistered; collateral remains queued until the exit delay passes.</span>
        </div>
        <div className="lifecycle-event">
          <strong>Slashing event</strong>
          <span>May penalize collateral, affect committee duty, deactivate, or ban.</span>
        </div>
      </div>
    </figure>
  );
}
