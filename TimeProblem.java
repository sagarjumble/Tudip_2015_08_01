import java.util.ArrayList;
import java.util.Scanner;  
import java.lang.String;


class TIME_SLOT
{
    int hours;
    int min;
    String ap;
}

class ToFrom 
{
    TIME_SLOT Strt,stp;
}

public class TimeProblem
{
	 static int i=0 ;
     public static void main(String []args)
     {
    	TIME_SLOT ts1,ts2;        

    	ArrayList<ToFrom> al = new ArrayList<ToFrom>();
    	ArrayList<ToFrom> DisplayAL = new ArrayList<ToFrom>();
        int n;
        
        Scanner s=new Scanner(System.in);  
        
        System.out.println("Enter No. Of Time SLot :\t");
        n=s.nextInt();  
       
       		

		
		for(int k=0;k<n;k++)
		{
			ts1=new TIME_SLOT();
			ts2=new TIME_SLOT();
			System.out.println("Enter START TIME");
			
					System.out.println("Enter Hour");	
					ts1.hours = s.nextInt(); 

					System.out.println("Enter Minute");	
					ts1.min = s.nextInt(); 

					System.out.println("Enter AM/PM");	
					ts1.ap = s.next().toUpperCase();
 
				
          
			        System.out.println("Enter END TIME");
			
					System.out.println("Enter Hour");	
					ts2.hours = s.nextInt(); 

					System.out.println("Enter Minute");	
					ts2.min = s.nextInt(); 

					System.out.println("Enter AM/PM");	
					ts2.ap = s.next().toUpperCase(); 
					
					
					ToFrom tf = new ToFrom();
					tf.Strt = ts1;
					tf.stp  =ts2;
					al.add(tf);
 
				}
			
			
				
			 int tmp=0;
			 float hr1,hr2;
			  
		      for(	;i<n-1 ;i++)
		      {
		    	   
		    	  hr1=al.get(i).stp.min;
		    	  hr2=(al.get(i+1).Strt.min);
		    	  
		    	  if((al.get(i).stp.ap.trim().equals( al.get(i+1).Strt.ap.trim())))
		    	  {
		    		  
		    		 
		    		  float x = ( hr1 / 60 ) + al.get(i).stp.hours;
		    		  float y = ( hr2 / 60 )+ al.get(i+1).Strt.hours;    		  
		    		  
		    		  		    		  
		    		  if(x<y && tmp!=1)
		    		  {
		    			  
		    			  
		    			  System.out.print(al.get(i).Strt.hours +" : "+al.get(i).Strt.min+ " " + al.get(i).Strt.ap );
		    		      System.out.print(" to ");
		    		      System.out.println(al.get(i).stp.hours +" : "+al.get(i).stp.min+ " " + al.get(i).stp.ap );
		    		  }
		    		  else
		    		  {
		    			  if( x >= y)
			    		  {
			    			  if(tmp==0)
			    			  {
			    			   System.out.print(al.get(i).Strt.hours +" : "+al.get(i).Strt.min+ " " + al.get(i).Strt.ap );
			    			   System.out.print(" to ");
			    			   tmp = 1;
			    			   
			    		      }
			    			  
			    		  }
			    		  else
			    		  {
			    			  System.out.println(al.get(i).stp.hours +" : "+al.get(i).stp.min+ " " + al.get(i).stp.ap );
			    			  tmp=0;
			    			 
			    		  }
		    		  }
		    		  
		    	  }
		    		 
		    		  
		    		  
		    		  
		    	 }
		      
		      
		      if(tmp==0)
		      {
		    	  System.out.print(al.get(i).Strt.hours +" : "+al.get(i).Strt.min+ " " + al.get(i).Strt.ap );
    		      System.out.print(" to ");
    		      System.out.println(al.get(i).stp.hours +" : "+al.get(i).stp.min+ " " + al.get(i).stp.ap );
    		
		      }
		      else
		      {
		    	  System.out.println(al.get(i).stp.hours +" : "+al.get(i).stp.min+ " " + al.get(i).stp.ap );
		      }
		      
		      
		    	  
		    	  
		      }
		
		
               }
               