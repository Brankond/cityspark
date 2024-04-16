package com.dmss.citysparkapplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "FEEDBACK")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Feedback {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Integer id;

    @Column(name = "FEEDBACK")
    private String feedback;

    @Column(name = "CREATED_DT")
    private LocalDateTime created_dt = LocalDateTime.now();

    @Column(name = "UPDATED_DT")
    private LocalDateTime updated_dt = LocalDateTime.now();

    @Column(name = "EVENT_ID")
    private Integer event_id;

    @Column(name = "PERSON_ID")
    private Integer person_id;
}
