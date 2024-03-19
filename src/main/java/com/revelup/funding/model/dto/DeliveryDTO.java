package com.revelup.funding.model.dto;

import lombok.*;
import org.springframework.stereotype.Component;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
@Component
public class DeliveryDTO implements java.io.Serializable {

    private int plgCode;
    private String delivStat;
    private String trackingNo;

}
