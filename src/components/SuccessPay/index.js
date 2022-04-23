import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Spinner, Stack } from "@chakra-ui/react";
const SuccessPay = () => {
  const [seconds, setSeconds] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((seconds) => seconds - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  if (seconds <= 0) {
    setTimeout(() => {
      navigate("/Home");
    }, 500);
  }

  return (
    <div>
      <Stack direction="row" spacing={4} className="progress">
        <Spinner size="xl" />
      </Stack>
    </div>
  );
};

export default SuccessPay;
