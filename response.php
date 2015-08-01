<?php
/**
 * Created by PhpStorm.
 * User: tudip
 * Date: 1/8/15
 * Time: 3:15 PM
 */
print_r($_POST);
$final = array();
$total = array();
for($i=0;$i<count($_POST);$i++){
if($i%2 != 0){
    $currentStartTime = $_POST["startTime".($i-1)];
    $currentEndTime = $_POST["endTime".($i)];
    $final[] = array($currentStartTime, $currentEndTime);
    for($j=0; $j<count($_POST);$j++){
//        if($j%2 != 0){
//                if(strtotime($_POST["startTime".($j)]) <= strtotime($currentEndTime)){
//                    $final[$i] = array($currentStartTime, $_POST["endTime".($j)]);
//                    for($k=0;$k<count($_POST);$k++){
//                        if(strcmp($final[$i],$total[$k]) ==0){
//                            $total[$i]=$final[$i];
//                            $total[$j]="";
//                        }
//                    }
//                    $final[$j]="";
//                }
//        }
//    }
//    if($final[$i] == null || $final[$i] == ""){
//        $total[$i]=$final[$i];
    }
//    echo "<br>".$final[$i][0]." ".$final[$i][1];
}
}
echo "<br>";
print_r($final);
    for($i=0;$i<count($final);$i++){

//        $total[$i]=array($final[$i][0],$final[$i][1]);
        for($j=0;$j<count($final);$j++){
            if($final[$j][0]<= $final[$i][1]){
                $final[$i][1] = $final[$j][1];
            }
        }
}
echo "<br>";
print_r($final);