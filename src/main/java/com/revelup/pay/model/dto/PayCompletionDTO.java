package com.revelup.pay.model.dto;

import java.time.LocalDate;
import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Getter
public class PayCompletionDTO {
	private String itemName;
	private Integer totalPrice;
	private Integer quantity;
	private LocalDateTime createdAt;
}
