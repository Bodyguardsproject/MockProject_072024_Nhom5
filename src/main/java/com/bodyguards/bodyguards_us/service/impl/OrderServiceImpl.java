/*
 *  OrderServiceImpl
 *  @author: Minhhieuano
 *  @created 8/14/2024 5:26 PM
 * */

package com.bodyguards.bodyguards_us.service.impl;

import com.bodyguards.bodyguards_us.dto.CreateOrderRequest;
import com.bodyguards.bodyguards_us.dto.OrderResponse;
import com.bodyguards.bodyguards_us.entity.Order;
import com.bodyguards.bodyguards_us.entity.OrderDate;
import com.bodyguards.bodyguards_us.entity.Services;
import com.bodyguards.bodyguards_us.entity.User;
import com.bodyguards.bodyguards_us.enums.ErrorCode;
import com.bodyguards.bodyguards_us.enums.OrderStatus;
import com.bodyguards.bodyguards_us.exception.ApiException;
import com.bodyguards.bodyguards_us.mapper.OrderMapper;
import com.bodyguards.bodyguards_us.repository.OrderRepository;
import com.bodyguards.bodyguards_us.repository.ServiceRepository;
import com.bodyguards.bodyguards_us.service.OrderService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

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

		order.setOrderDates(request.getOrderDates().stream()
				.map(orderDate ->
						OrderDate.builder().orderDate(orderDate).order(order).build())
				.collect(Collectors.toList()));

		order.setServices(services);
		order.setUser(user);

		orderRepository.save(order);

		return "Create Order Successfully";
	}

	@Override
	public List<OrderResponse> getAllOrders() {
		List<Order> orders = orderRepository.findAll();
		List<OrderResponse> responses= new ArrayList<>();
		for (Order o: orders){
			OrderResponse orderResponse = orderMapper.toOrderResponse(o);
			orderResponse.setCustomerName(o.getUser().getFirstName());
			orderResponse.setServiceName(o.getServices().getName());
			orderResponse.setCreatedDate(o.getCreatedDate());
			responses.add(orderResponse);
		}

		Collections.reverse(responses);
		return responses;
	}

	@Override
	public void updateStatusOrder(Long id, String status) {
		Order order = orderRepository.findById(id).orElseThrow(() -> new RuntimeException("This order doesn't exsit"));
		order.setStatus(OrderStatus.valueOf(status));
		orderRepository.save(order);
	}
}
