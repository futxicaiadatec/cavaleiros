/**
 * 2.1
 */
 const div = document.getElementById('tabelando')

 let tabelaHTML = ''
 for (let i = 0; i < 7; i++) {
   tabelaHTML += '<tr>'
   for (let j = 0; j < 7; j++) {
     tabelaHTML += `<td id='c${i}-l${j}'></td>`
   }
   tabelaHTML += '</tr>'
 }

 div.innerHTML = '<table>' + tabelaHTML + '</table>'
