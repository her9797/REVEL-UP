package com.revelup.funding.model.dto;

import com.revelup.pay.model.dto.PayDTO;
import lombok.*;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@ToString
public class DeliveryDTO {

    private int plgCode;
    private String delivStat;
    private String trackingNo;

}
