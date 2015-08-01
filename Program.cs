using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Collections;
namespace Overlapping_Time_Slot
{
    class Program
    {
        static void Main(string[] args)
        {
            List<DateTime> fromSlot = new List<DateTime> { };
            List<DateTime> toSlot = new List<DateTime> { };
            List<DateTime> finalSortList = new List<DateTime> { };
            string sFromDt, sToDt;
            DateTime tempStarTime, tempEndTime;
            string sDate = Convert.ToString(System.DateTime.Now.Date.ToShortDateString());

            Console.WriteLine("How many time slots you want to merege");
            int numOfTimeSlots = Convert.ToInt32(Console.ReadLine());
            for (int count = 1; count <= numOfTimeSlots; count++)
            {
                Console.WriteLine("Enter FROM Time slot in 24 Hrs value as HH:MM");
                sFromDt = Convert.ToString(Console.ReadLine());
                sFromDt = sDate + " " + sFromDt;
                tempStarTime = DateTime.Parse(sFromDt.ToString());
                fromSlot.Add(tempStarTime);
                Console.WriteLine("Enter TO Time slot in 24 Hrs value as HH:MM");
                sToDt = Convert.ToString(Console.ReadLine());
                sToDt = sDate + " " + sToDt;
                tempEndTime = DateTime.Parse(sToDt.ToString());
                toSlot.Add(tempEndTime);
            }
            int lcount = toSlot.Count();

            fromSlot.Sort();
            toSlot.Sort();
            var minStartStamp = fromSlot[0];
            fromSlot.RemoveAt(0);
            var maxToStamp = toSlot[lcount - 1];
            toSlot.RemoveAt(lcount - 1);

            for (int count = 0; count < fromSlot.Count; count++)
            {
                DateTime temp1 = DateTime.Parse(fromSlot[count].ToString());
                int hours = temp1.Hour;
                Console.WriteLine(hours);
            }
           Console.ReadLine();
        }
    }
}
