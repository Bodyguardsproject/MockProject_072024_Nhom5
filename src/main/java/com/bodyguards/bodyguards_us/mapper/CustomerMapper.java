package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.CustomerResponse;
import com.bodyguards.bodyguards_us.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface CustomerMapper {

    @Mapping(target = "firstName", source = "user.firstName")
    @Mapping(target = "lastName", source = "user.lastName")
    @Mapping(target = "address", source = "user.address")
    CustomerResponse toResponse(User user);

}
