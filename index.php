
<html>
 <head>
  <title>PHP Test</title>
     <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js" type="text/javascript"></script>
 </head>
 <body>
 <?php ?>
 <?php echo '<p>Test Program</p>'; ?>
 Enter number of time slots:
 <input type="text" id="rows">
 <button onclick="createRows()">OK</button>
 <br>
 <br>
 <form action="response.php" method="post">
     <div class="timespan"></div>
     <input type="submit">
 </form>
 <script type="text/javascript">
//     $(document).ready(function(){
//         var count = $('#rows').val();
//     });

     function createRows(){
         var count = $('#rows').val();
         for(i=0;i<count;i++){
             var html = "";
             html ='start time:<input type="time" name="startTime'+(2*i)+'"> endtime: <input type="time" name="endTime'+(2*i+1)+'"><br>';
             $('.timespan').append(html);
         }
     }
 </script>
</body>
</html>