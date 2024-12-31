import "./index.css";

const Seat = ({ seat, onClick }) => {
  const seatIsSelected = seat.isSelected;

  return (
    <button
      disabled={seatIsSelected}
      className={`seat ${seatIsSelected ? "selected" : "available"}`}
      onClick={onClick}
    ></button>
  );
};

export default Seat;
