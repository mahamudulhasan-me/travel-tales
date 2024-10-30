export const parseHTMLContent = (htmlContent: string | unknown) => {
  const tempDiv = document.createElement("div");
  tempDiv.innerHTML = htmlContent as string;

  const formattedText: unknown[] = [];
  Array.from(tempDiv.childNodes).forEach((node) => {
    // Ensure the node is an Element
    if (node.nodeType === Node.TEXT_NODE) {
      formattedText.push(node.textContent);
    } else if (node.nodeType === Node.ELEMENT_NODE) {
      const element = node as Element; // Type assertion
      switch (element.tagName) {
        case "STRONG":
          formattedText.push({ text: element.textContent, style: "bold" });
          break;
        case "EM":
        case "I":
          formattedText.push({ text: element.textContent, style: "italic" });
          break;
        case "BR":
          formattedText.push("\n"); // Line break
          break;
        default:
          formattedText.push(element.textContent);
      }
    }
  });

  return formattedText;
};
