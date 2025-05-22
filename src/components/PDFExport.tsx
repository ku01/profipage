import React from 'react';
import html2pdf from 'html2pdf.js';

const PDFExport: React.FC = () => {
  const handleExport = () => {
    const element = document.querySelector('.layout');
    const opt = {
      margin: 1,
      filename: 'professional-profile.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <button
      onClick={handleExport}
      className="pdf-export-button"
      data-testid="pdf-export-button"
      aria-label="Export profile as PDF"
    >
      Export as PDF
    </button>
  );
};

export default PDFExport; 