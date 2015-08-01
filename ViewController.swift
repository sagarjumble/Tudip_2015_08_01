//
//  ViewController.swift
//  eeetrt
//
//  Created by TT-MM-06 on 8/1/15.
//  Copyright (c) 2015 Tudip. All rights reserved.
//
import UIKit

class ViewController: UIViewController {
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        
        var timeSlots: Array<Array<Float>> = [[8,10],
            [10.20,10.40],
            [10.40,1],
            [1,3],
            [3.30,5],[8,10],
            [10.20,10.40],
            [10.40,1],
            [1,4],
            [3.30,5]]
        
        
        var index: Int = 0
        do {
            var tt = index
            do {
                if timeSlots[index][1] >= timeSlots[index+1][0] {
                    var temp = timeSlots[index+1][1]
                    timeSlots[index][1] = temp
                    timeSlots.removeAtIndex(index+1)
                }
                tt++
            }while tt <= timeSlots.count
            index++
            
        }while index < timeSlots.count - 1
        println(timeSlots)
        
    }
    
    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    
}