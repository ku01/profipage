import React from 'react';

const PrintButton: React.FC = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <button
      onClick={handlePrint}
      className="print-button"
      data-testid="print-button"
      aria-label="Print"
    >
      Print
    </button>
  );
};

export default PrintButton; 