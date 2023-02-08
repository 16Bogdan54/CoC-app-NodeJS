import React from "react";

type Props = {
  err: unknown;
};

const Error = ({ err }: Props) => {
  return <pre>{JSON.stringify(err)}</pre>;
};

export default Error;
