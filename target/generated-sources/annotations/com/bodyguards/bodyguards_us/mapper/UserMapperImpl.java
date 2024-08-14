package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.CreateAccountRequest;
import com.bodyguards.bodyguards_us.dto.UserResponse;
import com.bodyguards.bodyguards_us.entity.User;
import javax.annotation.processing.Generated;
import org.springframework.stereotype.Component;

@Generated(
    value = "org.mapstruct.ap.MappingProcessor",
    date = "2024-08-12T17:35:02+0700",
    comments = "version: 1.5.5.Final, compiler: javac, environment: Java 21.0.4 (Amazon.com Inc.)"
)
@Component
public class UserMapperImpl implements UserMapper {

    @Override
    public User createAccountRequestToUser(CreateAccountRequest createAccountRequest) {
        if ( createAccountRequest == null ) {
            return null;
        }

        User.UserBuilder user = User.builder();

        user.email( createAccountRequest.getEmail() );
        user.firstName( createAccountRequest.getFirstName() );
        user.lastName( createAccountRequest.getLastName() );
        user.address( createAccountRequest.getAddress() );
        user.phone( createAccountRequest.getPhone() );
        user.password( createAccountRequest.getPassword() );

        return user.build();
    }

    @Override
    public UserResponse userToUserResponse(User user) {
        if ( user == null ) {
            return null;
        }

        UserResponse.UserResponseBuilder userResponse = UserResponse.builder();

        userResponse.id( user.getIdUser() );
        userResponse.email( user.getEmail() );
        userResponse.phone( user.getPhone() );

        userResponse.fullName( user.getFirstName() + " " + user.getLastName() );

        return userResponse.build();
    }
}
