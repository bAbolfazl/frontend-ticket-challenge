import { useEffect } from "react";
import { purchaseTicket } from "../../services/api";

import "./index.css";

const TicketModal = ({ ticket, onClose }) => {
  const handlePurchase = async () => {
    try {
      // TODO
      // const response = await purchaseTicket(mapId, seat);
      // TODO remove
      purchaseTicket();
      onClose();

      // TODO update status of current reserve seat (make it unavailable on successful purchase)
    } catch (error) {
      console.error("Purchase failed:", error);
    }
  };
  useEffect(() => {
    // TODO api call to get details of current seat to show in modal
    // fetchMapDetails()
  }, []);

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Ticket Purchased</h3>
        <p>Ticket ID: {ticket.id}</p>
        <div>
          <button onClick={handlePurchase}>Purchase Ticket</button>
        </div>
        <div>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default TicketModal;
