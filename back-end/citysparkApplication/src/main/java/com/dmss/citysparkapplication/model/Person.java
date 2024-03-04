package com.dmss.citysparkapplication.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "PERSON")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Person {
    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "USER_ID")
    private Integer userId;

    @Column(name = "NAME")
    private String name;

    @Column(name = "CONTACT_NO")
    private String contactNo;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "BIRTHDAY")
    private LocalDateTime birthday;

    @Column(name = "CREATED_DT")
    private LocalDateTime createdDt;

    @Column(name = "UPDATED_DT")
    private LocalDateTime updatedDt;
}
