import * as Dialog from "@radix-ui/react-dialog";
import { motion } from "framer-motion";

function AppDialog({ trigger, title, children }) {
  return (
    <Dialog.Root>
      {/* Trigger stays visible */}
      <Dialog.Trigger asChild>{trigger}</Dialog.Trigger>

      <Dialog.Portal>
        {/* Overlay */}
        <Dialog.Overlay asChild>
          <motion.div
            className="fixed inset-0 bg-black/60 z-[100]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          />
        </Dialog.Overlay>

        {/* Content */}
        <Dialog.Content asChild>
          <motion.div
            className="fixed left-1/2 top-1/2 z-[101]
                       w-[90vw] 3xl:max-w-[1520px] max-h-[80vh] overflow-auto
                       -translate-x-1/2 -translate-y-1/2
                       rounded-[20px] bg-white p-[32px]
                       shadow-xl focus:outline-none"
            initial={{ opacity: 0, scale: 0.96, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 10 }}
          >

            <div className="mt-[16px]">{children}</div>

            <Dialog.Close className="cursor-pointer absolute right-[32px] top-[32px]">
              <div className='shrink-0'>
                <img src="/assets/icons/close.svg" alt="" className='w-[48px] h-[48px]' />
              </div>
            </Dialog.Close>
          </motion.div>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default AppDialog;
