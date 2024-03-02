package com.dmss.citysparkapplication.repository;

//import org.springframework.data
import com.dmss.citysparkapplication.model.Event;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Long> {
    Event findById(Integer id);
}
