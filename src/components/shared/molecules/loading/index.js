import Loader from "../../atoms/loader";

const loaderStyle = {
  height: "100vh",
  width: "100%",
  display: "grid",
  alignItems: "center",
  justifyContent: "center",
};

function Loading({ loading, style, children }) {
  return loading ? (
    <div style={style || loaderStyle}>
      <Loader />
    </div>
  ) : (
    children
  );
}

export default Loading;
