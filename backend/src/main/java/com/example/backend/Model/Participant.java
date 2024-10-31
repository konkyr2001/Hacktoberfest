package com.example.backend.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class Participant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String name;
    private String lastname;
    private String gitlabID;
    private String kaggleID;
    private String gender;
    private String dob;
    private String about;
    private String interest;

    public Participant() {
    }

    public Participant(String name, String lastName, String gitLabID, String kaggleID, String gender, String dob, String about, String interest) {
        this.name = name;
        this.lastname = lastName;
        this.gitlabID = gitLabID;
        this.kaggleID = kaggleID;
        this.gender = gender;
        this.dob = dob;
        this.about = about;
        this.interest = interest;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastname() {
        return lastname;
    }

    public void setLastname(String lastname) {
        this.lastname = lastname;
    }

    public String getGitlabID() {
        return gitlabID;
    }

    public void setGitlabID(String gitlabID) {
        this.gitlabID = gitlabID;
    }

    public String getKaggleID() {
        return kaggleID;
    }

    public void setKaggleID(String kaggleID) {
        this.kaggleID = kaggleID;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getDob() {
        return dob;
    }

    public void setDob(String dob) {
        this.dob = dob;
    }

    public String getAbout() {
        return about;
    }

    public void setAbout(String about) {
        this.about = about;
    }

    public String getInterest() {
        return interest;
    }

    public void setInterest(String interest) {
        this.interest = interest;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }
}
