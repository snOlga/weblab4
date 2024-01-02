package labs.lab4;

import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;


@RestController
@CrossOrigin(origins = "*")
public class PrintSmt {
    
    @GetMapping("/print_smt")
    public Map<String, String> getMethodName() {
        Map<String, String> response = new HashMap<>();
        response.put("message", "Hello, world!");
        return response;
    }
    
}
