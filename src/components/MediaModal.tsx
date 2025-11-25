import { X } from "lucide-react";

const MediaModal = ({ open, onClose, type, src }) => {
  if (!open) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl w-full p-4"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-white p-2 rounded-full hover:bg-white/20"
        >
          <X size={24} />
        </button>

        {type === "image" ? (
          <img
            src={src}
            className="w-full h-auto rounded-xl"
          />
        ) : (
          <video
            src={src}
            controls
            autoPlay
            className="w-full rounded-xl"
          />
        )}
      </div>
    </div>
  );
};

export default MediaModal;
