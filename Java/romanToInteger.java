package Java;
import java.util.Scanner;
public class romanToInteger {

	public static void main(String[] args) {
		
		        Scanner sc = new Scanner(System.in);
		        System.out.print("Enter a Roman number: ");
		        String romanNumeral = sc.nextLine().toUpperCase();
		        
		        int result = romanToInt(romanNumeral);
		        
		        if (result != -1) {
		            System.out.println("Integer representation: " + result);
		        }
		        else {
		            System.out.println("Invalid Roman numeral entered.");
		        }
	}
		    
	public static int romanToInt(String s) {
	    int result = 0;
	    int prevValue = 0;
	
	    for (int i = s.length() - 1; i >= 0; i--) {
	        char currentRoman = s.charAt(i);
	        int currentValue = 0;
	        
	        switch (currentRoman) {
	            case 'I':
	                currentValue = 1;
	                break;
	            case 'V':
	                currentValue = 5;
	                break;
	            case 'X':
	                currentValue = 10;
	                break;
	            case 'L':
	                currentValue = 50;
	                break;
	            case 'C':
	                currentValue = 100;
	                break;
	            case 'D':
	                currentValue = 500;
	                break;
	            case 'M':
	                currentValue = 1000;
	                break;
	            default:
	                return -1;
	        }
	        
	        if (currentValue < prevValue) {
	            result -= currentValue;
	        }
	        else {
	            result += currentValue;
	        }
	        
	        prevValue = currentValue;
	    }
	    
	    return result;
	}
}
