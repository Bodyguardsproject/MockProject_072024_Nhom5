/*
 *  UserMapper
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:45 AM
 * */

package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.CreateAccountRequest;
import com.bodyguards.bodyguards_us.dto.UserResponse;
import com.bodyguards.bodyguards_us.entity.User;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

    User createAccountRequestToUser(CreateAccountRequest createAccountRequest);

    @Mapping(target = "fullName", expression = "java(user.getFirstName() + \" \" + user.getLastName())")
    @Mapping(target = "id", source = "idUser")
    UserResponse userToUserResponse(User user);
}
