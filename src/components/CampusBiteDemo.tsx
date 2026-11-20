import { useState } from "react";
import { ArrowRight, Ticket, Utensils } from "lucide-react";

const pickupSlots = [
  { time: "12:30", capacity: 0 },
  { time: "12:45", capacity: 2 },
  { time: "1:00", capacity: 5 },
];

export default function CampusBiteDemo() {
  const [selectedSlot, setSelectedSlot] = useState(1);
  const [showTicket, setShowTicket] = useState(false);
  const slot = pickupSlots[selectedSlot];
  const availability = slot.capacity
    ? `${slot.capacity} spots available`
    : "Slot full. Choose another time.";

  return (
    <div className="pickup-demo" aria-label="CampusBite pickup demo">
      <div className="pickup-header">
        <Utensils size={17} aria-hidden="true" />
        <span>CampusBite</span>
        <small>Simulation</small>
      </div>
      <h4>Choose a pickup time</h4>
      <fieldset className="pickup-slots">
        <legend className="sr-only">Pickup time</legend>
        {pickupSlots.map(({ time, capacity }, index) => (
          <label key={time}>
            <input
              type="radio"
              name="campusbite-demo-slot"
              checked={selectedSlot === index}
              onChange={() => {
                setSelectedSlot(index);
                setShowTicket(false);
              }}
            />
            <span>
              <b>{time} PM</b>
              <small>{capacity ? `${capacity} spots` : "Full"}</small>
            </span>
          </label>
        ))}
      </fieldset>
      <div className="pickup-result">
        <div className="pickup-ticket" aria-live="polite">
          {showTicket && (
            <Ticket size={19} aria-hidden="true" />
          )}
          <span>
            <strong>{showTicket ? "Sample pickup ticket" : `${slot.time} PM pickup`}</strong>
            <small>{showTicket ? `Campus stall · ${slot.time} PM` : availability}</small>
          </span>
        </div>
        <button
          className="pickup-action"
          type="button"
          disabled={!slot.capacity}
          onClick={() => setShowTicket(!showTicket)}
        >
          {showTicket ? "Reset ticket" : "Create sample ticket"}
          <ArrowRight size={16} aria-hidden="true" />
        </button>
      </div>
    </div>
  );
}
