import { useEffect, useRef, useState } from "react";
import { Canvas as FabricCanvas, PencilBrush } from "fabric";
import { Eraser, Paintbrush, RotateCcw } from "lucide-react";

const MiniCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [fabricCanvas, setFabricCanvas] = useState<FabricCanvas | null>(null);
  const [activeColor, setActiveColor] = useState("#2d3436");
  const [brushSize, setBrushSize] = useState(3);

  const colors = ["#2d3436", "#e86b4a", "#74b49b", "#f6b93b", "#e84393", "#0984e3"];

  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = new FabricCanvas(canvasRef.current, {
      width: 280,
      height: 200,
      backgroundColor: "#faf8f5",
      isDrawingMode: true,
    });

    const brush = new PencilBrush(canvas);
    brush.color = activeColor;
    brush.width = brushSize;
    canvas.freeDrawingBrush = brush;

    setFabricCanvas(canvas);

    return () => {
      canvas.dispose();
    };
  }, []);

  useEffect(() => {
    if (!fabricCanvas?.freeDrawingBrush) return;
    fabricCanvas.freeDrawingBrush.color = activeColor;
    fabricCanvas.freeDrawingBrush.width = brushSize;
  }, [activeColor, brushSize, fabricCanvas]);

  const handleClear = () => {
    if (!fabricCanvas) return;
    fabricCanvas.clear();
    fabricCanvas.backgroundColor = "#faf8f5";
    fabricCanvas.renderAll();
  };

  return (
    <div className="bg-paper p-4 shadow-lg rotate-2 inline-block">
      <div className="tape" />
      <p className="font-handwritten text-ink/60 text-sm mb-2 -rotate-1">try drawing here! ↓</p>
      <div className="border-2 border-ink/20 rounded-sm overflow-hidden">
        <canvas ref={canvasRef} />
      </div>
      <div className="flex items-center justify-between mt-3 gap-2">
        <div className="flex gap-1.5">
          {colors.map((color) => (
            <button
              key={color}
              onClick={() => setActiveColor(color)}
              className={`w-6 h-6 rounded-full border-2 transition-transform hover:scale-110 ${
                activeColor === color ? "border-ink scale-110" : "border-transparent"
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </div>
        <div className="flex gap-2">
          <button
            onClick={() => setBrushSize(brushSize === 3 ? 8 : 3)}
            className="p-1.5 hover:bg-muted rounded transition-colors"
            title="Brush size"
          >
            <Paintbrush className="w-4 h-4 text-ink" />
          </button>
          <button
            onClick={handleClear}
            className="p-1.5 hover:bg-muted rounded transition-colors"
            title="Clear"
          >
            <RotateCcw className="w-4 h-4 text-ink" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default MiniCanvas;