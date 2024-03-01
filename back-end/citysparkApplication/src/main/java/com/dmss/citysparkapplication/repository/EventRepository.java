package com.dmss.citysparkapplication.repository;

//import org.springframework.data
import com.dmss.citysparkapplication.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;

public interface EventRepository extends JpaRepository<Event, Long> {
}
