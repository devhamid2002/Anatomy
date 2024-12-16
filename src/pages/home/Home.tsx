import { useState } from "react";
import Body from "../../components/body/Body";
import Alert from "../../components/alert/Alert";

export default function Home() {
  const [alertMessage, setAlertMessage] = useState<string | null>(null);

  const handlePartClick = (partName: string): void => {
    setAlertMessage(`This is the ${partName}`);
    setTimeout(() => {
      setAlertMessage(null);
    }, 5000);
  };

  return (
    <>
      {alertMessage && <Alert message={alertMessage} />}
      <Body onPartClick={handlePartClick} />
    </>
  );
}
