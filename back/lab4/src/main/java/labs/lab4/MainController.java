package labs.lab4;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import labs.lab4.Users.User;
import labs.lab4.Users.UserController;
import jakarta.servlet.http.Cookie;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class MainController {
    private boolean isUserHere = false;

    @GetMapping("/api/check")
    public Map<String, String> checkConnection(HttpServletRequest request) {
        Cookie[] cookies = request.getCookies();

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("IDkey")
                        && UserController.getUsersHere().get(cookie.getValue()) != null) {
                            isUserHere = true;
                }
            }
        }

        System.out.println("isUserHere: " + isUserHere);

        Map<String, String> response = new HashMap<>();
        response.put("isUserHere", isUserHere ? "true" : "false");
        return response;
    }
}
