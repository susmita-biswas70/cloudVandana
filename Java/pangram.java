package Java;
import java.util.*;
public class pangram {

	public static boolean isPangram(String input) {
        Set<Character> alphabetSet = new HashSet<>();
        for (char ch = 'a'; ch <= 'z'; ch++) {
            alphabetSet.add(ch);
        }
        
        for (char ch : input.toCharArray()) {
            alphabetSet.remove(ch);
            // If all letters are found, the set will be empty
            if (alphabetSet.isEmpty()) {
                return true;
            }
        }
        
        // If the set is not empty after checking all characters, it's not a pangram
        return false;
    }
	public static void main(String[] args) {
		// TODO Auto-generated method stub
		 Scanner scanner = new Scanner(System.in);
	        System.out.print("Enter a sentence: ");
	        //example: pack my box with five dozen liquor jugs
	        String input = scanner.nextLine().toLowerCase(); // Convert to lowercase for case-insensitive comparison
	        
	        boolean isPangram = isPangram(input);
	        
	        if (isPangram) {
	            System.out.println("The input is a pangram.");
	        } else {
	            System.out.println("The input is not a pangram.");
	        }

	}

}
