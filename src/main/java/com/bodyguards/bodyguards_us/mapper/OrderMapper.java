/*
 *  OrderMapper
 *  @author: Minhhieuano
 *  @created 8/14/2024 8:57 PM
 * */

package com.bodyguards.bodyguards_us.mapper;

import com.bodyguards.bodyguards_us.dto.CreateOrderRequest;
import com.bodyguards.bodyguards_us.entity.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface OrderMapper {

	@Mapping(source = "comment", target = "note")
	@Mapping(target = "orderDates", ignore = true)
	Order createOrderRequestToOrder(CreateOrderRequest request);
}
