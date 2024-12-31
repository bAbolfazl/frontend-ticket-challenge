import React, { useState } from "react";
import Seat from "../seat";
import TicketModal from "../ticket-modal";
import "./index.css";

const SeatMemo = React.memo(Seat, (prevProps, nextProps) => {
  return prevProps.seat.id === nextProps.seat.id;
});

const SeatList = ({ map }) => {
  const [ticket, setTicket] = useState(null);

  return (
    <div>
      <div className="seat-grid">
        {map.map((item) => (
          <div key={item.id} className="row">
            <SeatMemo seat={item} onClick={() => setTicket(item)} />
          </div>
        ))}
      </div>

      {ticket && (
        <TicketModal ticket={ticket} onClose={() => setTicket(null)} />
      )}
    </div>
  );
};

export default SeatList;
