import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function HoverCards({ cards }) {
  const [active, setActive] = useState(0); // first card grown by default

  const baseWidth = 200; // default width in px
  const expandedWidth = 418; // width when hovered
  const baseImgHeight = 140;
  const expandedImgHeight = 200;
  const baseTitleSize = 16;
  const expandedTitleSize = 20;

  return (
    <div className="flex overflow-hidden flex-1 max-h-[500px] 3xl:max-h-[550px] w-full gap-[16px]">
      {cards.map((card, i) => {
        const isActive = active === i;

        return (
          <motion.div
            key={i}
            className="max-h-[500px] rounded-[40px] p-[24px] flex flex-col cursor-pointer border border-[#B0B0B0] shadow-[0px_10px_20px_0px_#0000000A] overflow-hidden"
            onMouseEnter={() => setActive(i)}
            onMouseLeave={() => setActive(null)}
            animate={{
              width: isActive ? expandedWidth : baseWidth,
            }}
            transition={{ type: "spring", stiffness: 200, damping: 24 }}
          >
            {/* Image */}
            <motion.div
              className="overflow-hidden w-full "
              animate={{ height: isActive ? expandedImgHeight : baseImgHeight }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="w-full h-full object-cover rounded-[30px]"
              />
            </motion.div>

            {/* Title */}
            <motion.div
              className="text-[15px] font-bold py-2"
              animate={{
                fontSize: isActive ? expandedTitleSize : baseTitleSize,
                opacity: isActive ? 1 : 0.6,
              }}
              transition={{ type: "spring", stiffness: 200, damping: 24 }}
            >
              {card.title}
            </motion.div>

            {/* Children text */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  className="text-[13px]"
                  initial={{ opacity: 0, }}
                  animate={{ opacity: 1, }}
                  exit={{ opacity: 0, }}
                  transition={{ duration: 0.25 }}
                >
                  {card.text}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Position number */}
            <AnimatePresence>
              {(
                <motion.div
                  className="font-roboto text-[20px] mt-2 px-2 flex flex-col justify-end flex-1"

                >
                  <div className="flex items-center gap-[8px]">
                    {card.position} {isActive && <div className="text-[14px] font-thin text-uppercase">//step</div>}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
