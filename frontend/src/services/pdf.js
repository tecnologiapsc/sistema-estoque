import jsPDF from 'jspdf';


export function generatePDF() {

    const doc = new jsPDF()

    doc.text(
        'Relatório ERP',
        20,
        20
    )

    doc.save('relatorio.pdf')
}