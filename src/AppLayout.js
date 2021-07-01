import Auth from "./Auth";

export const AppLayout = (props) => {
  return (
    <div>
      <h2>App Layout</h2>
      <button
        onClick={() => {
          Auth.logOut(() => {
            props.history.push("./");
          });
        }}
      >
        LogOut
      </button>
    </div>
  );
};
