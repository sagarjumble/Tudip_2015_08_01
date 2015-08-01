//
//  ViewController.swift
//  timeSlotApplication
//
//  Created by TT-MM-06 on 8/1/15.
//  Copyright (c) 2015 Tudip. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
 
    
    
        
        
        var timeSlotsArray: Array<Array<Float>> = [[1.2,3],[2.40,3.50],[3.50,4.30],[4.30,5],[3.30,5],[8,10],[10.20,10.40],[10.40,1],[1,4],[3.30,5]]
    var index: Int = 0
    do {
    var timeIndex = index
        do {
              if timeSlotsArray[index][1] >= timeSlotsArray[index+1][0] {
              var temp = timeSlotsArray[index+1][1]
              timeSlotsArray[index][1] = temp
              timeSlotsArray.removeAtIndex(index+1)
           }
              timeIndex++
           }while timeIndex <= timeSlotsArray.count
              index++
    
    }while index < timeSlotsArray.count - 1

    
    println(timeSlotsArray)
    
}

    

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }


}

