package labs.lab4;

import java.lang.reflect.Array;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import jakarta.servlet.http.HttpServletRequest;
import labs.lab4.DBrepository.DataBaseModule;
import labs.lab4.Hits.HitResult;
import labs.lab4.Users.User;
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

    @GetMapping("/api/check_user")
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

    @PostMapping("/api/get_one_hit")
    public Map<String, String> getHit(HttpServletRequest request, @RequestBody Map<String, String> json) {
        this.cookies = request.getCookies();
        checkConnection(request);
        Map<String, String> responseLine = new HashMap<>();

        if (!this.isUserHere) {
            responseLine.put("isUserHere", "false");
            return responseLine;
        }
        responseLine.put("isUserHere", "true");

        HitResult hit = HitResult.validateHit(json.get("x"), json.get("y"), json.get("r"));

        if (hit == null) {
            responseLine.put("isValid", "false");
            return responseLine;
        }

        if (this.cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("IDkey")
                        && UserController.getUsersHere().get(cookie.getValue()) != null) {
                    hit.setOwner(UserController.getUsersHere().get(cookie.getValue()));
                }
            }
        }

        if (hit.getOwner() == null) {
            responseLine.put("isValid", "false");
            return responseLine;
        }
        //TODO: redo
        //ResponseList responseList = new ResponseList();
        //responseList.add(response);

        hit.calculate();
        DataBaseModule.writeToDB(hit);

        responseLine.put("isValid", "true");
        responseLine.put("x", hit.getX() + "");
        responseLine.put("y", hit.getY() + "");
        responseLine.put("r", hit.getR() + "");
        responseLine.put("value", hit.isValue() + "");

        return responseLine;
    }

    @PostMapping("/api/get_all_hits")
    public List<HitResult> getHits(HttpServletRequest request) {
        checkConnection(request);

        ArrayList<HitResult> responseList = new ArrayList<>();

        if (!this.isUserHere) {
            return responseList;
        }

        User currentUser = new User();

        if (this.cookies != null) {
            for (Cookie cookie : cookies) {
                if (cookie.getName().equals("IDkey")
                        && UserController.getUsersHere().get(cookie.getValue()) != null) {
                    currentUser = UserController.getUsersHere().get(cookie.getValue());
                }
            }
        }

        ArrayList<HitResult> bufHits = (ArrayList<HitResult>) DataBaseModule.getHits(currentUser);

        for (HitResult hit : bufHits) {
            if (currentUser.equals(hit.getOwner())) {
                responseList.add(hit);
            }
        }

        return responseList;
    }

}
