package com.dmss.citysparkapplication.repository;

//import org.springframework.data
import com.dmss.citysparkapplication.model.Image;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ImageRepository extends JpaRepository<Image, Long> {
}
