package com.dmss.citysparkapplication.service;

import com.dmss.citysparkapplication.model.Person;

public interface PersonService {
    Person get(Integer id);

    void update(Person person);
}
