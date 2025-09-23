export const loadGoogleFont = async (
  fontFamily: string,
  weights: number[] = [100, 200, 300, 400, 500, 600, 700, 800, 900]
): Promise<void> => {
  const fontId = `google-font-${fontFamily.replace(/\s+/g, "-").toLowerCase()}`;

  document.getElementById(fontId)?.remove();

  const weightsStr = weights.join(";");
  const fontUrl = `https://fonts.googleapis.com/css2?family=${encodeURIComponent(
    fontFamily
  )}:wght@${weightsStr}&display=swap`;

  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.id = fontId;
    link.rel = "stylesheet";
    link.href = fontUrl;

    link.onload = () => resolve();
    link.onerror = () =>
      reject(new Error(`Failed to load font: ${fontFamily}`));

    document.head.appendChild(link);
  });
};
