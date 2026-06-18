import { Loader2 } from "lucide-react";
import { motion } from "framer-motion";

function CreateButton({
  loading,
  onClick,
}) {
  return (
    <motion.button
      whileHover={{
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.98,
      }}
      transition={{
        duration: 0.2,
      }}
      disabled={loading}
      onClick={onClick}
      className="mt-8 flex h-14 w-full items-center justify-center gap-2 rounded-2xl bg-primary font-bold text-primary-foreground shadow-card transition-all disabled:cursor-not-allowed disabled:opacity-70"
    >
      {loading ? (
        <>
          <Loader2
            className="h-5 w-5 animate-spin"
          />
          Creating Checklist...
        </>
      ) : (
        "Create Order"
      )}
    </motion.button>
  );
}

export default CreateButton;