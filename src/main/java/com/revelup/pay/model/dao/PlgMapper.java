package com.revelup.pay.model.dao;

import com.revelup.pay.model.dto.PayCompletionDTO;
import org.apache.ibatis.annotations.Mapper;

@Mapper
public interface PlgMapper {
    void insertPlg(PayCompletionDTO payCompletionDTO);
}
