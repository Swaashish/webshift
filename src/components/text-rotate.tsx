
import {
  AnimatePresence,
  motion,
  type Transition,
  type TargetAndTransition,
} from "motion/react";

import { useEffect, useState } from "react";

interface TextRotateProps {
  texts: string[];
  mainClassName?: string;
  splitLevelClassName?: string;
  elementLevelClassName?: string;
  rotationInterval?: number;
  transition?: Transition;
  initial?: TargetAndTransition;
  animate?: TargetAndTransition;
  exit?: TargetAndTransition;
  splitBy?: "words" | "characters";
  staggerFrom?: "first" | "last" | "center";
  staggerDuration?: number;
  animatePresenceMode?: "sync" | "wait" | "popLayout";
  auto?: boolean;
}

export function TextRotate({
  texts,
  mainClassName = "",
  splitLevelClassName = "",
  elementLevelClassName = "",
  rotationInterval = 2000,
  transition = { duration: 0.4 },
  initial = { y: "100%", opacity: 0 },
  animate = { y: 0, opacity: 1 },
  exit = { y: "-100%", opacity: 0 },
  splitBy = "words",
  staggerDuration = 0.025,
  auto = true,
  animatePresenceMode = "wait",
}: TextRotateProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (!auto || texts.length <= 1) return;

    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, rotationInterval);

    return () => clearInterval(interval);
  }, [auto, rotationInterval, texts.length]);

  const elements =
    splitBy === "words"
      ? (texts[index] ?? "").split(" ")
      : Array.from(texts[index] ?? "");

  return (
    <span className={`inline-flex overflow-hidden ${mainClassName}`}>
      <AnimatePresence mode={animatePresenceMode}>
        <motion.span
          key={index}
          className={`inline-flex flex-wrap ${splitLevelClassName}`}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={{
            initial: {},
            animate: {},
            exit: {},
          }}
        >
          {elements.map((element, i) => (
            <motion.span
              key={`${index}-${i}`}
              className={`inline-block ${elementLevelClassName}`}
              initial={initial}
              animate={animate}
              exit={exit}
              transition={{
                ...transition,
                delay: i * staggerDuration,
              }}
            >
              {element}
              {splitBy === "words" && i !== elements.length - 1
                ? "\u00A0"
                : ""}
            </motion.span>
          ))}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

export default TextRotate;
