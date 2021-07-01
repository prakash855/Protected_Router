import Auth from "./Auth";

const LandingPage = (props) => {
  return (
    <div>
      <h2>This is my Landing Page</h2>
      <button
        onClick={() => {
          Auth.logIn(() => {
            props.history.push("./app");
          });
        }}
      >
        Log In
      </button>
    </div>
  );
};

export default LandingPage;
