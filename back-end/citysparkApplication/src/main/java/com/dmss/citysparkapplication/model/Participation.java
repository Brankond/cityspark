package com.dmss.citysparkapplication.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

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

    @Column(name = "PERSON_ID")
    private Integer personId;

    @Column(name = "EVENT_ID")
    private Integer eventId;

    @Column(name = "ROLE")
    private String role;

    @Column(name = "status")
    private String status;

    @Column(name = "CREATED_DT")
    private LocalDateTime createdDT = LocalDateTime.now();

    @Column(name = "UPDATED_DT")
    private LocalDateTime updatedDT = LocalDateTime.now();
}
