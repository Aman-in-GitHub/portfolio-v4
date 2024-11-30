import useCanvasCursor from "@/utils/useCanvasCursor";

function CanvasCursor() {
  useCanvasCursor();

  return (
    <canvas
      className="pointer-events-none fixed inset-0 hidden lg:block"
      id="canvas"
    />
  );
}

export default CanvasCursor;
