import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

public class Test {

    public static void main(String[] args) {

        List<Integer> arr = new ArrayList<>();
        Map<String, Integer> marks = new HashMap<>();

        marks.put("rahul", 100);
        marks.put("simmy", 200);

        for (Map.Entry<String, Integer> entry : marks.entrySet()) {
            System.out.print(entry.getKey() + " ------ ");
            System.out.println(entry.getValue());
            System.out.println("-------");
        }

    
        Optional<Integer> marksOfRohit = Optional.ofNullable(marks.get("rohit"));

        if (marksOfRohit.isPresent()) {
            System.out.println(marksOfRohit.get());
        } else {
            System.out.println("I am not present");
        }
    }
}