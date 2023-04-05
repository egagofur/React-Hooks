import { useContext } from "react";
import { UserContext } from "./Context";

export default function UpdateProfile() {
  const [state, dispatch] = useContext(UserContext);

  return (
    <>
      <h2>Update Profile</h2>
      <p>Update your profile here.</p>
      <input
        type="text"
        onChange={(e) =>
          dispatch({
            type: "UPDATE_USER",
            payload: { ...state.user, name: e.target.value },
          })
        }
        value={state.user.name}
        placeholder="Name"
      />
    </>
  );
}
