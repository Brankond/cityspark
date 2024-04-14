package com.dmss.citysparkapplication.repository;

//import org.springframework.data
import com.dmss.citysparkapplication.model.Participation;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ParticipationRepository extends JpaRepository<Participation, Long> {
    Participation findById(Integer id);

    List<Participation> findByEventId(Integer eventId);

    List<Participation> findByPersonId(Integer personId);

    void deleteById(Integer id);
}
