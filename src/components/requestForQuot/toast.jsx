import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { CheckCircle, XCircle, Info, AlertTriangle, X } from "lucide-react";

export default function Toast({ show, type = "success", message, onClose }) {
  useEffect(() => {
    if (show) {
      const timer = setTimeout(() => onClose(), 4000);
      return () => clearTimeout(timer);
    }
  }, [show, onClose]);

  const colors = {
    success: "#FF7A00", // orange
    error: "#D93025",
    info: "#0D6EFD",
    warning: "#FFC107",
  };

  const icons = {
    success: <CheckCircle className="w-6 h-6" style={{ color: colors.success }} />,
    error: <XCircle className="w-6 h-6" style={{ color: colors.error }} />,
    info: <Info className="w-6 h-6" style={{ color: colors.info }} />,
    warning: <AlertTriangle className="w-6 h-6" style={{ color: colors.warning }} />,
  };

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ type: "spring", stiffness: 400, damping: 30 }}
          className="fixed top-6  md:left-1/2 -translate-x-1/2 z-[9999]"
        >
          <div
            className="flex items-center gap-3 px-5 py-3 rounded-xl shadow-2xl border-l-4"
            style={{
              backgroundColor: "#fff",
              borderColor: colors[type],
              color: "#222",
              minWidth: "320px",
              boxShadow: "0 6px 20px rgba(0,0,0,0.15)",
            }}
          >
            {icons[type]}
            <div className="flex-1 font-semibold text-gray-800">{message}</div>
            <button
              onClick={onClose}
              className="ml-2 text-gray-400 hover:text-gray-700 transition"
            >
              <X size={18} />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
