package labs.lab4;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import labs.lab4.Users.UserController;

@SpringBootApplication
public class Lab4Application {

	public static void main(String[] args) {
		UserController.setUsers();
		SpringApplication.run(Lab4Application.class, args);
	}

}
