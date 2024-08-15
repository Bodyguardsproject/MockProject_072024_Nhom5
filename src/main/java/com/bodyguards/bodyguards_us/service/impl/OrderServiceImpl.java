/*
 *  OrderServiceImpl
 *  @author: Minhhieuano
 *  @created 8/14/2024 5:26 PM
 * */

package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.CreateOrderRequest;
import com.bodyguards.bodyguards_us.entity.Order;
import com.bodyguards.bodyguards_us.entity.OrderDate;
import com.bodyguards.bodyguards_us.entity.Services;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.OrderMapper;
import com.bodyguards.bodyguards_us.repository.OrderRepository;
import com.bodyguards.bodyguards_us.repository.ServiceRepository;
import com.bodyguards.bodyguards_us.service.OrderService;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class OrderServiceImpl implements OrderService {
	protected final OrderRepository orderRepository;
	private final ServiceRepository serviceRepository;
	private final OrderMapper orderMapper;

	@Override
	public String createOrder(CreateOrderRequest request, User user) {

		Services services = serviceRepository
				.findByIdService(request.getServiceId())
				.orElseThrow(() -> new ApiException(ErrorCode.RESOURCE_NOT_FOUND));

		Order order = orderMapper.createOrderRequestToOrder(request);
		order.setServices(services);
		order.setUser(user);
		Set<OrderDate> orderDates = new HashSet<>();

		for (Date orderDate : request.getOrderDates()) {
			orderDates.add(OrderDate.builder().orderDate(orderDate).build());
		}

		order.setOrderDates(orderDates);

		orderRepository.save(order);

		return "Create Order Successfully";
	}
}
