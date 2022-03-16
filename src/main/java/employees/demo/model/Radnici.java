package employees.demo.model;

import javax.persistence.*;

@Entity
@Table(name = "radnici")
public class Radnici {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "ime")
    private String ime;

    @Column(name = "prezime")
    private String prezime;

    @Column(name = "ime_oca")
    private String ime_oca;

    public Radnici() {

    }

    public Radnici(String ime, String prezime, String ime_oca) {
        this.ime = ime;
        this.prezime = prezime;
        this.ime_oca = ime_oca;
    }

    public long getId() {
        return id;
    }

    public String getIme() {
        return ime;
    }

    public void setIme(String ime) {
        this.ime = ime;
    }

    public String getPrezime() {
        return prezime;
    }

    public void setPrezime(String prezime) {
        this.prezime = prezime;
    }

    public String getImeOca() {
        return ime_oca;
    }

    public void setImeOca(String ime_oca) {
        this.ime_oca = ime_oca;
    }

    /*
     * @Override
     * public String toString() {
     * return "Tutorial [id=" + id + ", title=" + title + ", desc=" + description +
     * ", published=" + published + "]";
     * }
     */

}
