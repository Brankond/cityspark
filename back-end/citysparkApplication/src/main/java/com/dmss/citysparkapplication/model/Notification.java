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
@Table(name = "NOTIFICATION")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Notification {
    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "SUBJECT")
    private String subject;

    @Column(name = "CONTENT")
    private String content;

    @Column(name = "CREATED_DT")
    private LocalDateTime created_dt;

    @Column(name = "UPDATED_DT")
    private LocalDateTime updated_dt;

    @Column(name = "EVENT_ID")
    private Integer event_id;

    @Column(name = "PERSON_ID")
    private Integer person_id;
}
