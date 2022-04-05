package main.employees.model;

import com.fasterxml.jackson.annotation.JsonFormat;

import javax.persistence.*;
import java.util.*;

@Entity
@Table(name = "radnici")
public class Radnici {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @Column(name = "JMB")
    private Integer JMB;

    @Column(name = "JMBG")
    private Integer JMBG;

    @Column(name = "ime")
    private String ime;

    @Column(name = "prezime")
    private String prezime;

    @Column(name = "ime_oca")
    private String ime_oca;

    @Column(name = "spol")
    private String spol;

    @JsonFormat(pattern="dd.MM.yyyy.")
    @Column(name = "datum_rodjenja")
    private Date datum_rodjenja;

    @Column(name = "mjesto_rodjenja")
    private String mjesto_rodjenja;

    @Column(name = "opcina_rodjenja")
    private Integer opcina_rodjenja;

    @Column(name = "drzava_rodjenja")
    private String drzava_rodjenja;

    @Column(name = "opcina_stanovanja")
    private Integer opcina_stanovanja;

    @Column(name = "mjesto_stanovanja")
    private String mjesto_stanovanja;

    @Column(name = "ulica")
    private String ulica;

    @Column(name = "broj_ulice")
    private Integer broj_ulice;

    @Column(name = "neto_osnovica")
    private Double neto_osnovica;

    @Column(name = "org_dio")
    private Integer org_dio;

    @Column(name = "org_jedinica")
    private Integer org_jedinica;

    @JsonFormat(pattern="dd.MM.yyyy.")
    @Column(name = "datum_zaposlenja")
    private Date datum_zaposlenja;

    @Column(name = "radnoMjesto")
    private String radnoMjesto;

    public Radnici() {

    }

    public Radnici(Integer JMB, Integer JMBG, String ime, String prezime, String ime_oca,
                   String spol, Date datum_rodjenja, String mjesto_rodjenja, Integer opcina_rodjenja,
                   String drzava_rodjenja, Integer opcina_stanovanja, String mjesto_stanovanja, String ulica,
                   Integer broj_ulice, Double neto_osnovica, Integer org_dio, Integer org_jedinica, Date datum_zaposlenja, String radnoMjesto) {
        this.JMB = JMB;
        this.JMBG = JMBG;
        this.ime = ime;
        this.prezime = prezime;
        this.ime_oca = ime_oca;
        this.spol = spol;
        this.datum_rodjenja = datum_rodjenja;
        this.mjesto_rodjenja = mjesto_rodjenja;
        this.opcina_rodjenja = opcina_rodjenja;
        this.drzava_rodjenja = drzava_rodjenja;
        this.opcina_stanovanja = opcina_stanovanja;
        this.mjesto_stanovanja = mjesto_stanovanja;
        this.ulica = ulica;
        this.broj_ulice = broj_ulice;
        this.neto_osnovica = neto_osnovica;
        this.org_dio = org_dio;
        this.org_jedinica = org_jedinica;
        this.datum_zaposlenja = datum_zaposlenja;
        this.radnoMjesto = radnoMjesto;
    }

    public long getId() {
        return id;
    }

    public void setJMB(Integer JMB) {
        this.JMB = JMB;
    }

    public Integer getJMB() {
        return JMB;
    }

    public void setJMBG(Integer JMBG) {
        this.JMBG = JMBG;
    }

    public Integer getJMBG() {
        return JMBG;
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

    public String getSpol() {
        return spol;
    }

    public void setSpol(String spol) {
        this.spol = spol;
    }

    public Date getDatumRodjenja() {
        return datum_rodjenja;
    }

    public void setDatumRodjenja(Date datum_rodjenja) {
        this.datum_rodjenja = datum_rodjenja;
    }

    public String getMjestoRodjenja() {
        return mjesto_rodjenja;
    }

    public void setMjestoRodjenja(String mjesto_rodjenja) {
        this.mjesto_rodjenja = mjesto_rodjenja;
    }

    public Integer getOpcinaRodjenja() {
        return opcina_rodjenja;
    }

    public void setOpcinaRodjenja(Integer opcina_rodjenja) {
        this.opcina_rodjenja = opcina_rodjenja;
    }

    public String getDrzavaRodjenja() {
        return drzava_rodjenja;
    }

    public void setDrzavaRodjenja(String drzava_rodjenja) {
        this.drzava_rodjenja = drzava_rodjenja;
    }

    public Integer getOpcinaStanovanja() {
        return opcina_stanovanja;
    }

    public void setOpcinaStanovanja(Integer opcina_stanovanja) {
        this.opcina_stanovanja = opcina_stanovanja;
    }

    public String getMjestoStanovanja() {
        return mjesto_stanovanja;
    }

    public void setMjestoStanovanja(String mjesto_stanovanja) {
        this.mjesto_stanovanja = mjesto_stanovanja;
    }


    public void setUlica(String ulica) {
        this.ulica = ulica;
    }

    public String getUlica() {
        return ulica;
    }

    public void setBrojUlice(Integer broj_ulice) {
        this.broj_ulice = broj_ulice;
    }

    public Integer getBrojUlice() {
        return broj_ulice;
    }

    public void setNetoOsnovica(Double neto_osnovica) {
        this.neto_osnovica = neto_osnovica;
    }

    public Double getNetoOsnovica() {
        return neto_osnovica;
    }

    public void setOrgDio(Integer org_dio) {
        this.org_dio = org_dio;
    }

    public Integer getOrgDio() {
        return org_dio;
    }

    public void setOrgJedinica(Integer org_jedinica) {
        this.org_jedinica = org_jedinica;
    }

    public Integer getOrgJedinica() {
        return org_jedinica;
    }

    public void setDatumZaposlenja(Date datum_zaposlenja) {
        this.datum_zaposlenja = datum_zaposlenja;
    }

    public Date getDatumZaposlenja() {
        return datum_zaposlenja;
    }

    public void setRadnoMjesto(String radnoMjesto) {
        this.radnoMjesto = radnoMjesto;
    }

    public String getRadnoMjesto() {
        return radnoMjesto;
    }


    @Override
    public String toString() {
        return "Radnik [id=" + id + ", ime=" + ime + ", prezime=" + prezime +
                ", radno mjesto=" + radnoMjesto + "]";
    }


}
