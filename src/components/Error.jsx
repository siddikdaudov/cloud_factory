const Error = ({ error }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: 0,
        left: "50%",
        translate: "-50% 0%",
        backgroundColor: "red",
        padding: "40px 80px",
        color: "white",
      }}
    >
      Ошибка
    </div>
  );
};

export default Error;
