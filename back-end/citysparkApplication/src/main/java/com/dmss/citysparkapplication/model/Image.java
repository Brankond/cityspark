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
@Data
@Table(name = "EVENT")
@NoArgsConstructor
@AllArgsConstructor
public class Image {
    @Id
    @Column(name = "ID")
    private Integer id;

    @Column(name = "IMAGE_LINK")
    private String imageLink;

    @Column(name = "EVENT_ID")
    private Integer eventId;

    @Column(name = "IMAGE_TYPE")
    private String imageType;

    @Column(name = "STATUS")
    private String status;

    @Column(name = "CREATED_DT")
    private LocalDateTime createdDT = LocalDateTime.now();

    @Column(name = "UPDATED_DT")
    private LocalDateTime updatedDT = LocalDateTime.now();



}
