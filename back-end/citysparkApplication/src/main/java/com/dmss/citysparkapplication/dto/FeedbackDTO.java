package com.dmss.citysparkapplication.dto;

import lombok.Getter;
import lombok.Setter;

import java.time.LocalDateTime;

public class FeedbackDTO {
    private Integer id;

    private String feedback;

    private Integer star;

    private Integer eventId;

    private Integer personId;

    private LocalDateTime createdDT;

    private LocalDateTime updatedDT;
}
