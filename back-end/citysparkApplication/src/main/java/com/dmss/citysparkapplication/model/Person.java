package com.dmss.citysparkapplication.model;

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
    private Integer id;
    private Integer user_id;
    private String name;
    private String contact_no;
    private String description;
    private LocalDateTime birthday;
    private LocalDateTime created_dt;
    private LocalDateTime updated_dt;
}
