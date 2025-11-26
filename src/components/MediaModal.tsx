import { X } from "lucide-react";
import { useRef, useState } from "react";

const MediaModal = ({ open, onClose, type, src }) => {
  const containerRef = useRef(null);
  const imgRef = useRef(null);

  const [scale, setScale] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [start, setStart] = useState({ x: 0, y: 0 });
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  if (!open) return null;

  /* -------------------
     ZOOM (Scroll Wheel)
  -------------------- */
  const handleWheel = (e) => {
    e.preventDefault();

    const newScale = Math.min(Math.max(1, scale + (e.deltaY * -0.001)), 4);
    setScale(newScale);
  };

  /* -------------------
      DRAG (Pan Image)
  -------------------- */
  const startDrag = (e) => {
    if (scale <= 1) return; // only drag when zoomed
    setIsDragging(true);
    setStart({ x: e.clientX - offset.x, y: e.clientY - offset.y });
  };

  const duringDrag = (e) => {
    if (!isDragging) return;
    setOffset({ x: e.clientX - start.x, y: e.clientY - start.y });
  };

  const stopDrag = () => setIsDragging(false);

  /* -------------------
      DOUBLE CLICK ZOOM
  -------------------- */
  const handleDoubleClick = () => {
    if (scale === 1) {
      setScale(2);
    } else {
      setScale(1);
      setOffset({ x: 0, y: 0 });
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-5xl w-full h-[90vh] p-4 overflow-hidden bg-transparent"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Visible Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 bg-white text-black p-2 rounded-full shadow-xl hover:bg-gray-200 z-50"
        >
          <X size={22} />
        </button>

        {/* IMAGE VIEWER */}
        {type === "image" ? (
          <div
            ref={containerRef}
            className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing select-none"
            onWheel={handleWheel}
            onMouseDown={startDrag}
            onMouseMove={duringDrag}
            onMouseUp={stopDrag}
            onMouseLeave={stopDrag}
            onDoubleClick={handleDoubleClick}
          >
            <img
              ref={imgRef}
              src={src}
              className="rounded-xl"
              style={{
                transform: `scale(${scale}) translate(${offset.x / scale}px, ${offset.y / scale}px)`,
                transformOrigin: "center center",
                transition: isDragging ? "none" : "transform 0.15s ease-out",
                maxWidth: "100%",
                height: "auto",
                userSelect: "none",
                pointerEvents: "none",
              }}
            />
          </div>
        ) : (
          <video
            src={src}
            controls
            autoPlay
            className="w-full h-auto rounded-xl"
          />
        )}
      </div>
    </div>
  );
};

export default MediaModal;
