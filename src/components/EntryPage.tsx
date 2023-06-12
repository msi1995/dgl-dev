import { useState } from "react";

interface EntryPageProps {
  showQuestion?: boolean;
  setEntryPageActive: React.Dispatch<React.SetStateAction<boolean>>;
}

export const EntryPage = ({ setEntryPageActive, showQuestion }: EntryPageProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const entryAudio = new Audio("/entry.mp3")

  const playEntryAudio = () => {
    entryAudio.play()
  }

  const doEntryThings = async () => {
    playEntryAudio();
    setEntryPageActive(false);
  };

  return (
    <div id="bg-container" className="anim-bg">
      <div className="entry-container">
        <span
          id="hover-text"
          className={isHovered ? "hovered-enter-text noselect" : "enter-text noselect"}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => doEntryThings()}
        >
          Enter
        </span>
      </div>
    </div>
  );
};
