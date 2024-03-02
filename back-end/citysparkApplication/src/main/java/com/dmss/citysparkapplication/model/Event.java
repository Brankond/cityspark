package com.dmss.citysparkapplication.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.antlr.v4.runtime.misc.NotNull;

import java.time.LocalDateTime;

@Entity
@Data
@Table(name = "EVENT")
@NoArgsConstructor
@AllArgsConstructor
public class Event {
    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "TYPE")
    private String type;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "DESCRIPTION")
    private String description;

    @Column(name = "LOCATION")
    private String location;

    @Column(name = "EVENT_START_DT")
    private LocalDateTime eventStartDT;

    @Column(name = "EVENT_END_DT")
    private LocalDateTime eventEndDT;

    @Column(name = "CREATED_DT")
    private LocalDateTime createdDT = LocalDateTime.now();

    @Column(name = "UPDATED_DT")
    private LocalDateTime updatedDT = LocalDateTime.now();



}
