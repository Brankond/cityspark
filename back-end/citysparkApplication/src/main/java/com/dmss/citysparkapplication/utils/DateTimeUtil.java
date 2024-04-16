package com.dmss.citysparkapplication.utils;

import com.dmss.citysparkapplication.constants.DateTimeConstants;

import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

public class DateTimeUtil {
    public static String getCurrentDateTimeString () {
        LocalDateTime now = LocalDateTime.now();

        DateTimeFormatter formatter = DateTimeFormatter.ofPattern(DateTimeConstants.DATE_TIME_FORMAT);

        return formatter.format(now);
    }
}
