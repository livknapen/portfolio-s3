// Arrow button to scroll
$(".arrow-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".divmainall").offset().top},
        'slow');
});

// Open PDF with button
function openPDF1() {
    const pdfPath = './includes/media/PortfolioLiv.pdf#page=4';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}

// Open PDF with button
function openPDF2() {
    const pdfPath = './includes/media/PortfolioLiv.pdf#page=23';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}

// Open PDF with button
function openPDF3() {
    const pdfPath = './includes/media/PortfolioLiv.pdf#page=29';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}

// Open PDF with button
function openPDF4() {
    const pdfPath = './includes/media/PortfolioLiv.pdf#page=37';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}

// Open PDF with button
function openPDF5() {
    const pdfPath = './includes/media/PortfolioLiv.pdf#page=63';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}