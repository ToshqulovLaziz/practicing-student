import Login from "./Login";
// eslint-disable-next-line react/prop-types
const Authentication = ({ onLoginSuccess }) => {
  return (
    <>
      <Login onLoginSuccess={onLoginSuccess} />
    </>
  );
};

export default Authentication;
