/*
 *  ContractMapper
 *  @author: Minhhieuano
 *  @created 8/19/2024 3:41 PM
 * */

package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.ContractResponse;
import com.bodyguards.bodyguards_us.entity.Contract;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ContractMapper {
    ContractResponse toContractResponse(Contract contract);
}
