package labs.lab4.DataBase;

import org.hibernate.SessionFactory;
import org.hibernate.boot.Metadata;
import org.hibernate.boot.MetadataSources;
import org.hibernate.boot.registry.StandardServiceRegistry;
import org.hibernate.boot.registry.StandardServiceRegistryBuilder;
import org.hibernate.cfg.Configuration;
import org.postgresql.Driver;

import labs.lab4.Users.User;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

public class HibernateUtil {
    private static SessionFactory sessionFactory = buildSessionFactory();

    private static SessionFactory buildSessionFactory() {
        try {
            StandardServiceRegistry registry = new StandardServiceRegistryBuilder()
                    .configure("hibernate.cfg.xml")
                    .build();
            Metadata metadata = new MetadataSources(registry)
                    .addAnnotatedClass(User.class)
                    .getMetadataBuilder()
                    .build();
            // Создаем SessionFactory из hibernate.cfg.xml
            SessionFactory sessionFactoryNorm = metadata.getSessionFactoryBuilder().build();
            sessionFactory = sessionFactoryNorm;
            return sessionFactoryNorm;
        } catch (Exception ex) {
            System.err.println("Initial SessionFactory creation failed." + ex);
            throw new ExceptionInInitializerError(ex);
        }
    }

    public static SessionFactory getSessionFactory() {
        System.out.println("getSessionFactory");
        return sessionFactory;
    }
}
