// Arrow button to scroll
$(".arrow-button").click(function() {
    $('html,body').animate({
        scrollTop: $(".divmainall").offset().top},
        'slow');
});

// Open PDF with button
function openPDF1() {
    const pdfPath = '/includes/media/Portfolio Liv.pdf#page=5';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}

// Open PDF with button
function openPDF2() {
    const pdfPath = '/includes/media/Portfolio Liv.pdf#page=36';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}

// Open PDF with button
function openPDF3() {
    const pdfPath = '/includes/media/Portfolio Liv.pdf#page=48';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}

// Open PDF with button
function openPDF4() {
    const pdfPath = '/includes/media/Portfolio Liv.pdf#page=60';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}

// Open PDF with button
function openPDF5() {
    const pdfPath = '/includes/media/Portfolio Liv.pdf#page=94';
    // Open the PDF in a new tab
    window.open(pdfPath, '_blank');
}