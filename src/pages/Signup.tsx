import React, { ReactElement } from "react";
import { useHistory } from "react-router";
import { Link } from "react-router-dom";
import { AppContext } from "../AppContext";
import Button from "../components/Button";
import Input from "../components/Input";
import { Spacing, Wrapper } from "./Home";
import { Form } from "./Login";

export default function Signup(): ReactElement {
  const history = useHistory();
  const [displayName, setDisplayName] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [password, setPassword] = React.useState<string>("");
  const { registerUser, handleAuthChange, loading } = React.useContext(AppContext);

  React.useEffect(() => {
    handleAuthChange({
      cb: () => {
        history.push("/");
      },
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Wrapper>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          registerUser({ displayName, email, password });
        }}
      >
        <Spacing mb="20px">
          <Input
            name="displayName"
            type="text"
            required
            placeholder="Enter your username..."
            value={displayName}
            onChange={({ target }) => setDisplayName(target.value)}
          />
        </Spacing>

        <Spacing mb="20px">
          <Input
            name="email"
            type="email"
            required
            placeholder="Enter your email..."
            value={email}
            onChange={({ target }) => setEmail(target.value)}
          />
        </Spacing>

        <Spacing mb="20px">
          <Input
            name="password"
            type="password"
            required
            placeholder="Enter your password..."
            value={password}
            minLength={6}
            onChange={({ target }) => setPassword(target.value)}
          />
        </Spacing>

        <Spacing mt="20px" mb="10px">
          <Button>{loading ? "Loading..." : "Register"}</Button>
        </Spacing>

        <small>
          Already have an account ? <Link to="/login">Login</Link>
        </small>
      </Form>
    </Wrapper>
  );
}
