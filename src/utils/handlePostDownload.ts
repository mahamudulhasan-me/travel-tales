import { IPost } from "@/type/post";
import { jsPDF } from "jspdf";
import moment from "moment";
import { parseHTMLContent } from "./parseHTMLContent";

// Function to strip HTML tags and return formatted content

/**
 * @param {IPost} post - The post to download as a PDF
 * @returns {void} - No return value, just saves the PDF
 */
export const handleDownload = (post: IPost): void => {
  const doc = new jsPDF();
  doc.setFontSize(12);

  // Margins
  const margin = 10;
  let yOffset = margin; // Starting y position

  // Title (Bold)
  doc.setFont("helvetica", "bold");
  doc.text(`Title: ${post.category}`, margin, yOffset);
  yOffset += 10; // Increase y position

  // Author (Italic)
  doc.setFont("helvetica", "normal");
  doc.text(`Author: ${post.author.name}`, margin, yOffset);
  yOffset += 10; // Increase y position

  // Created At (Regular)
  doc.setFont("helvetica", "normal");
  doc.text(
    `Created At: ${moment(post.createdAt).format("MMMM Do YYYY, h:mm a")}`,
    margin,
    yOffset
  );
  yOffset += 10; // Increase y position

  // Content (Formatted)
  const contentLines = parseHTMLContent(post.content);

  contentLines.forEach((line) => {
    if (typeof line === "string") {
      const wrappedText = doc.splitTextToSize(line, 180); // Adjust the width as necessary
      doc.setFont("helvetica", "normal");
      wrappedText.forEach((text: string) => {
        doc.text(`Content: ${text}`, margin, yOffset);
        yOffset += 10; // Increase y position for next line
      });
    } else {
      // If the line is an object with style
      //@ts-ignore
      if (line.style === "bold") {
        doc.setFont("helvetica", "bold");
        //@ts-ignore
      } else if (line.style === "italic") {
        doc.setFont("helvetica", "italic");
      } else {
        doc.setFont("helvetica", "normal");
      }
      //@ts-ignore
      const wrappedText = doc.splitTextToSize(line.text, 180); // Adjust the width as necessary
      wrappedText.forEach((text: string) => {
        doc.text(`Content: ${text}`, margin, yOffset);
        yOffset += 10; // Increase y position for next line
      });
    }
  });

  // Save the PDF
  doc.save(`${post.category} - ${post.author.name} - ${post._id}.pdf`);
};
