package labs.lab4;

import java.util.HashMap;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import labs.lab4.DataBase.DataBaseModule;
import labs.lab4.Responses.Response;
import labs.lab4.Users.UserController;
import jakarta.servlet.http.Cookie;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class MainController {
    private boolean isUserHere = false;
    private Cookie[] cookies;

    @GetMapping("/api/check")
    public Map<String, String> checkConnection(HttpServletRequest request) {
        this.cookies = request.getCookies();

        if (cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("IDkey")
                        && UserController.getUsersHere().get(cookie.getValue()) != null) {
                    this.isUserHere = true;
                }
            }
        }

        System.out.println("isUserHere: " + isUserHere);

        Map<String, String> response = new HashMap<>();
        response.put("isUserHere", isUserHere ? "true" : "false");
        return response;
    }

    @PostMapping("/api/get_response")
    public Map<String, String> getResponse(HttpServletRequest request, @RequestBody Map<String, String> json) {
        this.cookies = request.getCookies();
        checkConnection(request);
        Map<String, String> responseLine = new HashMap<>();

        if (!this.isUserHere) {
            responseLine.put("isUserHere", "false");
            return responseLine;
        }

        Response response = Response.validateResponse(json.get("x"), json.get("y"), json.get("r"));

        if (response == null) {
            responseLine.put("isValid", "false");
            return responseLine;
        }

        if (this.cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("IDkey")
                        && UserController.getUsersHere().get(cookie.getValue()) != null) {
                    response.setOwner(UserController.getUsersHere().get(cookie.getValue()));
                }
            }
        }

        if (response.getOwner() == null) {
            responseLine.put("isValid", "false");
            return responseLine;
        }

        DataBaseModule.writeToDB(response);

        responseLine.put("isValid", "true");

        response.calculate();
        responseLine.put("x", response.getX() + "");
        responseLine.put("y", response.getY() + "");
        responseLine.put("r", response.getR() + "");
        responseLine.put("resp", response.isValue() + "");

        return responseLine;
    }
}
