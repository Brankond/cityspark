package com.dmss.citysparkapplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "participation")
public class Participation {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "ID")
    private Long id;

    @ManyToOne
    @JoinColumn(name = "PERSON_ID")
    private Person person;

    @ManyToOne
    @JoinColumn(name = "EVENT_ID")
    private Event event;

    @Column(name = "ROLE")
    private String role;

    @Column(name = "status")
    private String status;

    @Column(name = "CREATED_DT")
    private String createdDate;

    @Column(name = "UPDATED_DT")
    private String updatedDate;
}
