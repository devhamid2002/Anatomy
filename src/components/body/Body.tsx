import Cheest from "../cheest/Cheest";
import Head from "../head/Head";
import LeftHand from "../left hand/LeftHand";
import RightHand from "../right hand/RightHand";

type BodyProps = {
  onPartClick: (partName: string) => void;
};

export default function Body({ onPartClick }: BodyProps) {
  return (
    // تنظیمات Flexbox برای وسط‌چین کردن عمودی و افقی
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col items-center">
        <div onClick={() => onPartClick("Head")}>
          <Head />
        </div>
        <div className="flex flex-row">
          <div onClick={() => onPartClick("Right Hand")}>
            <RightHand />
          </div>
          <div onClick={() => onPartClick("Cheest")}>
            <Cheest />
          </div>
          <div onClick={() => onPartClick("Left Hand")}>
            <LeftHand />
          </div>
        </div>
      </div>
    </div>
  );
}
