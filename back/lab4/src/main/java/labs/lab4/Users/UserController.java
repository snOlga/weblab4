package labs.lab4.Users;

import java.util.ArrayList;
import java.util.Map;
import java.util.TreeMap;

import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.Cookie;
import jakarta.servlet.http.HttpServletResponse;
import labs.lab4.DBrepository.DataBaseModule;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

@RestController
// @CrossOrigin(origins = "*")
@CrossOrigin(origins = "http://localhost:3000", allowCredentials = "true")
public class UserController {
    private static Map<String, User> usersHere = new TreeMap<>();

    public static Map<String, User> getUsersHere() {
        return usersHere;
    }

    private static ArrayList<User> users = new ArrayList<User>();

    public static void setUsers() {
        UserController.users = (ArrayList<User>) DataBaseModule.getUsers();
        System.out.println("---set users from db---");
        for (int i = 0; i < users.size(); i++) {
            System.out.println(users.get(i));
        }
        System.out.println("--- ---");
    }

    @PostMapping("/api/user_processing")
    public ResponseEntity<?> userProcessing (@RequestBody Map<String, String> json, HttpServletResponse response) {
        String login = json.get("login");
        String password = json.get("password");
        boolean isNew = Boolean.parseBoolean(json.get("isNew"));

        User user = new User(login, password);

        String IDkey = user.getPassword();

        Cookie cookie = new Cookie("IDkey", IDkey);
        cookie.setMaxAge(Integer.MAX_VALUE);
        cookie.setPath("/");

        if (isNew) {
            users.add(user);

            usersHere.put(IDkey, user);
            response.addCookie(cookie);
            DataBaseModule.writeToDB(user);
        } else {
            for (int i = 0; i < users.size(); i++) {
                if (user.equals(users.get(i))) {
                    user = users.get(i);
                    usersHere.put(IDkey, user);
                    response.addCookie(cookie);
                    break;
                }
            }
        }

        return ResponseEntity.ok().body(HttpStatus.OK);
    }

}
