import { Stage, Layer, Line } from "react-konva";
import { useRef, useEffect, useState } from "react";
import buildingAMap from "../assets/buildingAMap2.jpg";

export default function MapWithLine({ path }) {
  const imgRef = useRef(null);
  const [imgSize, setImgSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      if (imgRef.current) {
        const rect = imgRef.current.getBoundingClientRect();
        setImgSize({ width: rect.width, height: rect.height });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const originalWidth = 1024;
  const originalHeight = 1024;

  // Scale points
  const scaledPoints = path.map((pt) => ({
    x: (pt.x / originalWidth) * imgSize.width,
    y: (pt.y / originalHeight) * imgSize.height,
  }));

  // Flatten points for Konva Line
  const flatPoints = scaledPoints.flatMap((p) => [p.x, p.y]);

  return (
    <div className="relative w-full max-w-4xl mx-auto">
      <img
        src={buildingAMap}
        alt="Building A map"
        ref={imgRef}
        className="w-full h-auto"
        style={{ display: "block" }}
      />

      <Stage
        width={imgSize.width}
        height={imgSize.height}
        className="absolute top-0 left-0 pointer-events-none"
      >
        <Layer>
          {flatPoints.length > 0 && (
            <Line
              points={flatPoints}
              stroke="blue"
              strokeWidth={4}
              lineCap="round"
            />
          )}
        </Layer>
      </Stage>
    </div>
  );
}
