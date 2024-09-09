// Code to PDF Converter
document.getElementById('convert-code-pdf-btn').addEventListener('click', function() {
    const { jsPDF } = window.jspdf;
    const doc = new jsPDF();
    
    let codeInput = document.getElementById('code-input').value;
    
    if (codeInput.trim() === '') {
        alert('Please enter some code to convert!');
        return;
    }
    
    let lines = codeInput.split('\n');
    let y = 10;
    
    lines.forEach((line) => {
        if (y > 280) { // New page if the content overflows
            doc.addPage();
            y = 10;
        }
        doc.text(10, y, line);
        y += 10;
    });
    
    doc.save('code.pdf');
});

// PDF to Word Conversion
document.getElementById('pdf-input').addEventListener('change', function() {
    let pdfInput = document.getElementById('pdf-input').files[0];
    if (pdfInput) {
        document.getElementById('convert-pdf-word-btn').disabled = false;
    } else {
        document.getElementById('convert-pdf-word-btn').disabled = true;
    }
});

document.getElementById('convert-pdf-word-btn').addEventListener('click', function() {
    let pdfInput = document.getElementById('pdf-input').files[0];
    
    if (!pdfInput) {
        alert('Please select a PDF file to convert!');
        return;
    }

    // Simulate the conversion process
    alert('Converting PDF to Word requires a backend or third-party service. Please upload the file to a service like Aspose or Zamzar for conversion.');
});

// Word to PDF Conversion
document.getElementById('word-input').addEventListener('change', function() {
    let wordInput = document.getElementById('word-input').files[0];
    if (wordInput) {
        document.getElementById('convert-word-pdf-btn').disabled = false;
    } else {
        document.getElementById('convert-word-pdf-btn').disabled = true;
    }
});

document.getElementById('convert-word-pdf-btn').addEventListener('click', function() {
    let wordInput = document.getElementById('word-input').files[0];
    
    if (!wordInput) {
        alert('Please select a Word file to convert!');
        return;
    }

    // Simulate the conversion process
    alert('Converting Word to PDF requires a backend or third-party service. Please upload the file to a service like Aspose or Zamzar for conversion.');
});
