/*
 *  UserMapper
 *  @author: Minhhieuano
 *  @created 8/12/2024 11:45 AM
 * */

package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.AddAccountRequest;
import com.bodyguards.bodyguards_us.dto.CreateAccountRequest;
import com.bodyguards.bodyguards_us.dto.CustomerResponse;
import com.bodyguards.bodyguards_us.dto.UserResponse;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.entity.Cost;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface UserMapper {

	User createAccountRequestToUser(CreateAccountRequest createAccountRequest);

	@Mapping(target = "fullName", expression = "java(user.getFirstName() + \" \" + user.getLastName())")
	@Mapping(target = "id", source = "idUser")
	UserResponse userToUserResponse(User user);

	@Mapping(target = "roles", ignore = true)
	User addAccountRequestToUser(AddAccountRequest createAccountRequest);

	@Mapping(target = "serviceType", expression = "java(getServiceType(user))")
	@Mapping(target = "contractCount", expression = "java(getContractCount(user))")
	@Mapping(target = "totalCost", expression = "java(getTotalCost(user))")
	CustomerResponse toCustomerResponse(User user);

	default String getServiceType(User user) {
		return user.getOrders().stream()
				.findFirst()
				.map(order -> order.getServices().getName())
				.orElse("No service available");
	}

	default long getContractCount(User user) {
		return user.getOrders().stream()
				.flatMap(order -> order.getContracts().stream())
				.distinct()
				.count();
	}

	default Double getTotalCost(User user) {
		return user.getOrders().stream()
				.flatMap(order -> order.getContracts().stream())
				.flatMap(contract -> contract.getCosts().stream())
				.mapToDouble(Cost::getCost)
				.sum();
	}
}
