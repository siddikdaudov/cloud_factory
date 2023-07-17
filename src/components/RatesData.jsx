import { useEffect, useRef, useState } from "react";
import { getRates } from "../api/getRates";
import Modal from "./Modal";
import Loader from "./Loader/Loader";
import Error from "./Error";

const RatesData = ({ isRatesA }) => {
  const [rates, setRates] = useState([]);
  const [modalData, setModalData] = useState([]);
  const [isOpenModal, setOpenModal] = useState(false);
  const [isLoading, setLoading] = useState(true);
  const modalRef = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
    getRates(setRates, setLoading, isRatesA);
  }, []);

  useEffect(() => {
    if (isOpenModal) {
      clearInterval(interval.current);
    } else {
      interval.current = setInterval(() => {
        getRates(setRates, setLoading, isRatesA);
      }, 5000);
    }
    return () => clearInterval(interval.current);
  }, [isOpenModal]);

  const openModal = (e) => {
    if (e.target.parentNode.nodeName === "TR") {
      const item = rates.find(
        (_, index) => index == e.target.parentNode.ariaColIndex
      );
      setModalData(item);
      setOpenModal(true);
      modalRef.current.showModal();
    }
  };

  if (isLoading)
    return (
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "-50% -50%",
        }}
      >
        <Loader />
      </div>
    );

  if (rates[0][0] == "error") {
    return <Error />;
  }

  return (
    <>
      <Modal modalRef={modalRef} data={modalData} handleClose={setOpenModal} />
      <table
        border={1}
        style={{ marginTop: "10px", width: "100%", borderCollapse: "collapse" }}
      >
        <tbody onClick={openModal}>
          {rates.map(([name, obj], index) => (
            <tr
              key={obj.id}
              style={{ cursor: "pointer" }}
              aria-colindex={index}
            >
              <td style={{ padding: "5px" }}>{name}</td>
              <td style={{ padding: "5px" }}>{obj.last}</td>
              <td style={{ padding: "5px" }}>{obj.highestBid}</td>
              <td style={{ padding: "5px" }}>{obj.percentChange}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default RatesData;
