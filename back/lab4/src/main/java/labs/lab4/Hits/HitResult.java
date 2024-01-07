package labs.lab4.Hits;

import com.fasterxml.jackson.annotation.JsonIgnore;

import jakarta.persistence.*;
import labs.lab4.Users.User;

@Entity
@Table(name = "Hits")
public class HitResult {
    @JsonIgnore
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id")
    private int id;

    @Column(name = "x")
    private float x;
    @Column(name = "y")
    private float y;
    @Column(name = "r")
    private float r;
    @Column(name = "hit_result")
    private boolean value;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "owner", referencedColumnName="id")
    private User owner;

    public float getX() {
        return x;
    }

    public float getY() {
        return y;
    }

    public float getR() {
        return r;
    }

    public int getID() {
        return id;
    }

    public User getOwner() {
        return owner;
    }

    public boolean isValue() {
        return value;
    }

    public void setX(float x) {
        this.x = x;
    }

    public void setY(float y) {
        this.y = y;
    }

    public void setR(float r) {
        this.r = r;
    }

    public void setValue(boolean value) {
        this.value = value;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setOwner(User owner) {
        this.owner = owner;
    }

    public HitResult() {

    }

    public HitResult(float xValue, float yValue, float rValue) {
        this.x = xValue;
        this.y = yValue;
        this.r = rValue;
    }

    public static HitResult validateHit(String xString, String yString, String rString) {
        try {
            return new HitResult(Float.parseFloat(xString), Float.parseFloat(yString), Float.parseFloat(rString));
        } catch (Exception e) {
            return null;
        }
    }

    public boolean calculate() {
        if (x == 0 && y == 0) {
            this.value = true;
        }

        boolean firstQuarter = x > 0 && y > 0 && (x <= r && y <= r);
        boolean secondQuarter = x < 0 && y > 0 && (y <= Math.sqrt(r - x * x));
        boolean thirdQuarter = x < 0 && y < 0 && (x >= (0 - r / 2) && y >= (0 - r));

        if (firstQuarter || secondQuarter || thirdQuarter) {
            this.value = true;
        } else {
            this.value = false;
        }
        return value;
    }

    public String getResponse() {
        return Boolean.toString(calculate());
    }

    @Override
    public boolean equals(Object obj) {
        return this.id == ((HitResult) obj).getID();
    }
}
