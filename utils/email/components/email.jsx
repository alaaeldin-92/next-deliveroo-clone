import * as React from "react";
import { Html, Button } from "@react-email/components";

export function Email(props) {
  const { url } = props;

  return (
    <Html lang="en">
      <Button href={url}>Verify Email</Button>
    </Html>
  );
}

export default Email;
