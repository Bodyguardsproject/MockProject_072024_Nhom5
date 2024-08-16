package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.BodyguardResponse;
import com.bodyguards.bodyguards_us.entity.Bodyguard;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface BodyguardMapper {

    @Mapping(source = "user.firstName", target = "firstName")
    @Mapping(source = "user.lastName", target = "lastName")
    @Mapping(source = "user.email", target = "email")
    @Mapping(source = "user.address", target = "address")
    @Mapping(source = "user.dateOfBirth", target = "dateOfBirth")
    @Mapping(source = "user.gender", target = "gender")
    @Mapping(source = "user.avatar", target = "avatar")
    @Mapping(source = "user.phone", target = "phone")
    BodyguardResponse toDTO(Bodyguard bodyguard);

}
