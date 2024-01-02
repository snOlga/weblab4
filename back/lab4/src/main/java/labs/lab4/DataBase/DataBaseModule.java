package labs.lab4.DataBase;

import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.query.Query;

import labs.lab4.Users.User;

import java.util.ArrayList;
import java.util.List;

public class DataBaseModule {
    public static void writeToDB(User item) {
        // HibernateUtil hibernateUtil = new HibernateUtil();
        SessionFactory sessionFactory = HibernateUtil.getSessionFactory();
        Session session = sessionFactory.openSession();

        try {
            session.beginTransaction();

            User entity = item;

            session.save(entity);

            session.getTransaction().commit();
        } catch (Exception e) {
            if (session.getTransaction() != null) {
                session.getTransaction().rollback();
            }
            e.printStackTrace();
        } finally {
            session.close();
        }

        // sessionFactory.close();
    }

    public static List<User> getUsersFromDBList() {
        List<User> entityList = new ArrayList<User>();
        HibernateUtil hibernateUtil = new HibernateUtil();
        SessionFactory sessionFactory = hibernateUtil.getSessionFactory();
        try (Session session = sessionFactory.openSession()) {
            Query<User> query = session.createQuery("FROM users", User.class);
            entityList = query.list();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return entityList;
    }
}
