function day() {
   let a = Number(document.getElementById('tx1').value);
   switch (a)
   {
       case 1:
       case 3:
       case 5:
       case 7:
       case 8:
       case 10:
       case 12:
          document.getElementById('p').innerText='Tháng có 31 ngày';
          break;
       case 4:
       case 6:
       case 9:
       case 11:
          document.getElementById('p').innerText='Tháng có 30 ngày';
          break;
       case 2:
           document.getElementById('p').innerText='Tháng có 28 hoặc 29 ngày';
   }

}